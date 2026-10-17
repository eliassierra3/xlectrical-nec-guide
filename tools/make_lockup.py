"""Generate the NEC Guide brand images — same style as the Quick Estimator.

  standalone/nec-lockup.png   Xlectrical wordmark with the tagline tucked under
                              LECTRICAL (header logo)
  web/icons/*.png             home-screen icons: wordmark + a larger tagline
                              line underneath, on white

Tagline: "NEC" in the logo's amber, "GUIDE" in its purple gradient.
Font: Teko SemiBold (tools/fonts/Teko[wght].ttf, SIL Open Font License) — the
font file stays in tools/ and is never served; only the rendered PNGs ship.

Usage:  python3 tools/make_lockup.py      (needs Pillow)
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
LOGO = ROOT / "client" / "public" / "xlectrical-logo.png"
FONT = ROOT / "tools" / "fonts" / "Teko[wght].ttf"
WEIGHT = 600  # SemiBold

TAGLINE = "NEC GUIDE"
SP = TAGLINE.index(" ")  # split: before = amber, after = purple gradient

AMBER = (255, 178, 0)
PURPLE_L = (134, 39, 217)
PURPLE_R = (92, 14, 216)

# Where the tagline sits inside the 720×208 logo: right of the X's leg, under LECTRICAL.
TUCK = {"x0": 292, "x1": 718, "base": 194, "cap": 48}


def font(size):
    f = ImageFont.truetype(str(FONT), max(1, round(size)))
    f.set_variation_by_axes([WEIGHT])
    return f


def cap_ratio():
    f = font(1000)
    _, y0, _, _ = f.getbbox("H", anchor="ls")
    return -y0 / 1000


def fit(width, cap, min_tracking=0.04):
    """Font + letter spacing so TAGLINE at this cap height spans exactly `width`."""
    size = cap / cap_ratio()
    f = font(size)
    natural = sum(f.getlength(ch) for ch in TAGLINE)
    tracking = (width - natural) / (len(TAGLINE) - 1)
    if tracking < size * min_tracking:  # too wide at this height: shrink instead
        size *= (width - size * min_tracking * (len(TAGLINE) - 1)) / natural
        f = font(size)
        natural = sum(f.getlength(ch) for ch in TAGLINE)
        tracking = (width - natural) / (len(TAGLINE) - 1)
    return f, tracking


def draw_tagline(canvas, x0, x1, base, cap):
    """First word in amber, second word in the logo's purple gradient, baseline at `base`."""
    f, tracking = fit(x1 - x0, cap)
    mask = Image.new("L", canvas.size, 0)
    mdraw = ImageDraw.Draw(mask)
    draw = ImageDraw.Draw(canvas)
    x = x0
    est_start = None
    for i, ch in enumerate(TAGLINE):
        if i == SP + 1:
            est_start = x
        if i < SP:
            draw.text((x, base), ch, font=f, fill=AMBER, anchor="ls")
        elif i > SP and ch != " ":
            mdraw.text((x, base), ch, font=f, fill=255, anchor="ls")
        x += f.getlength(ch) + tracking

    grad = Image.new("RGBA", canvas.size)
    gdraw = ImageDraw.Draw(grad)
    span = max(1.0, x1 - est_start)
    for gx in range(int(est_start), int(x1) + 2):
        t = min(1.0, max(0.0, (gx - est_start) / span))
        color = tuple(round(a + (b - a) * t) for a, b in zip(PURPLE_L, PURPLE_R))
        gdraw.line([(gx, 0), (gx, canvas.height)], fill=color + (255,))
    canvas.paste(grad, (0, 0), mask)


def lockup(scale):
    logo = Image.open(LOGO).convert("RGBA")
    out = logo.resize((round(720 * scale), round(208 * scale)), Image.LANCZOS)
    draw_tagline(out, TUCK["x0"] * scale, TUCK["x1"] * scale, TUCK["base"] * scale, TUCK["cap"] * scale)
    return out


def icon(size, content_width):
    canvas = Image.new("RGBA", (size, size), "white")
    logo = Image.open(LOGO).convert("RGBA")
    logo = logo.crop(logo.getbbox())
    lw = round(size * content_width)
    lh = round(logo.height * lw / logo.width)
    logo = logo.resize((lw, lh), Image.LANCZOS)
    f, _ = fit(lw, cap=lw * 0.15, min_tracking=0.05)
    cap = f.size * cap_ratio()
    gap = lh * 0.24
    top = (size - (lh + gap + cap)) / 2
    left = (size - lw) / 2
    canvas.paste(logo, (round(left), round(top)), logo)
    draw_tagline(canvas, left, left + lw, top + lh + gap + cap, cap)
    return canvas.convert("RGB")


def main():
    (ROOT / "standalone").mkdir(exist_ok=True)
    lockup(1.5).save(ROOT / "standalone" / "nec-lockup.png", optimize=True)
    out = ROOT / "web" / "icons"
    out.mkdir(parents=True, exist_ok=True)
    icon(192, 0.84).save(out / "icon-192.png", optimize=True)
    icon(512, 0.84).save(out / "icon-512.png", optimize=True)
    icon(180, 0.84).save(out / "apple-touch-icon.png", optimize=True)
    icon(192, 0.64).save(out / "icon-192-maskable.png", optimize=True)
    icon(512, 0.64).save(out / "icon-512-maskable.png", optimize=True)
    print("Wrote standalone/nec-lockup.png and web/icons/")


if __name__ == "__main__":
    main()
