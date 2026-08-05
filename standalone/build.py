#!/usr/bin/env python3
"""Build the self-contained Xlectrical NEC Field Reference.

Single source of truth = the TypeScript data files used by the server
(../server/src/data/tables.ts and sections.ts). This strips the TS-only
lines, injects the data + the Xlectrical logo into _template.html, and
writes two outputs:

  index.html     -> full HTML document (double-click to open locally, offline)
  artifact.html  -> body-only content (for publishing as a Claude Artifact)

Run:  python3 standalone/build.py
"""
import base64
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DATA = os.path.join(ROOT, "server", "src", "data")
LOGO = os.path.join(ROOT, "client", "public", "xlectrical-logo.png")
WEB = os.path.join(ROOT, "web")  # installable PWA build (host this folder)


def load_ts(filename, varname, decl):
    path = os.path.join(DATA, filename)
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    # Drop TS-only import lines; the rest is valid JS object-literal syntax.
    lines = [l for l in text.splitlines() if not l.lstrip().startswith("import ")]
    text = "\n".join(lines)
    text = text.replace(decl, "const %s =" % varname, 1)
    return text.strip()


def main():
    tables_js = load_ts("tables.ts", "TABLES", "export const tables: RefTable[] =")
    sections_js = load_ts("sections.ts", "SECTIONS", "export const sections: Section[] =")
    data_js = tables_js + "\n\n" + sections_js
    # Safety: never let embedded strings terminate the inline <script>.
    data_js = data_js.replace("</script", "<\\/script")

    with open(LOGO, "rb") as f:
        logo_uri = "data:image/png;base64," + base64.b64encode(f.read()).decode("ascii")

    with open(os.path.join(HERE, "_template.html"), "r", encoding="utf-8") as f:
        tpl = f.read()

    core = tpl.replace("/*__DATA__*/", data_js).replace("__LOGO_DATA_URI__", logo_uri)

    # Body-only content for the Artifact tool (no <html>/<head>/<body>).
    with open(os.path.join(HERE, "artifact.html"), "w", encoding="utf-8") as f:
        f.write(core)

    # Full standalone document for local double-click use.
    doc = (
        "<!doctype html>\n<html lang=\"en\">\n<head>\n"
        "<meta charset=\"utf-8\" />\n"
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n"
        "<title>Xlectrical &middot; NEC Field Reference</title>\n"
        "</head>\n<body>\n" + core + "\n</body>\n</html>\n"
    )
    with open(os.path.join(HERE, "index.html"), "w", encoding="utf-8") as f:
        f.write(doc)

    # Installable PWA build (web/index.html) — links the manifest + registers
    # the service worker so it can be added to the home screen and run offline.
    pwa_head = (
        # theme-color matches the app background (dark by default); the app also
        # updates it live on theme toggle so the phone status bar always matches.
        "<meta name=\"theme-color\" content=\"#0f1216\" />\n"
        "<link rel=\"manifest\" href=\"manifest.webmanifest\" />\n"
        "<link rel=\"icon\" href=\"icons/icon-192.png\" />\n"
        "<link rel=\"apple-touch-icon\" href=\"icons/apple-touch-icon.png\" />\n"
        "<meta name=\"mobile-web-app-capable\" content=\"yes\" />\n"
        "<meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n"
        # 'default' keeps the status bar readable in BOTH light and dark themes
        # (black-translucent forced white text, unreadable on the light theme).
        "<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"default\" />\n"
        "<meta name=\"apple-mobile-web-app-title\" content=\"Xlectrical NEC\" />\n"
    )
    sw_script = (
        "\n<script>if('serviceWorker' in navigator){window.addEventListener('load',"
        "function(){navigator.serviceWorker.register('service-worker.js').catch(function(){});});}</script>\n"
    )
    pwa_doc = (
        "<!doctype html>\n<html lang=\"en\">\n<head>\n"
        "<meta charset=\"utf-8\" />\n"
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\" />\n"
        "<title>Xlectrical &middot; NEC Field Reference</title>\n"
        + pwa_head +
        "</head>\n<body>\n" + core + sw_script + "\n</body>\n</html>\n"
    )
    os.makedirs(WEB, exist_ok=True)
    with open(os.path.join(WEB, "index.html"), "w", encoding="utf-8") as f:
        f.write(pwa_doc)

    # Report
    print("[build] logo: %d bytes -> data URI" % os.path.getsize(LOGO))
    print("[build] wrote standalone/index.html, standalone/artifact.html, web/index.html")
    print("[build] data blob: %d chars" % len(data_js))


if __name__ == "__main__":
    main()
