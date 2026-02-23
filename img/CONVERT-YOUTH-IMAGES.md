# Why the pictures didn't show (and how to fix it)

The image files were **HEIC** (Apple/iPhone format) with a `.png` extension. Browsers need real PNG data, so they showed a broken image.

**Preview quirk:** If you Export a file that *already* has a `.png` name, Preview sometimes doesn't actually convert HEIC → PNG; it can leave the data as HEIC. So the files were renamed to `.heic` first.

## What to do now (in Preview)

1. In your **img** folder you now have: **picture1.heic** … **picture5.heic**.
2. **Double‑click** `picture1.heic` to open it in **Preview**.
3. **File → Export…**
4. Set **Format** to **PNG**.
5. **Export As:** type **picture1.png** (same folder, `img`).
6. Click **Save**.
7. Repeat for **picture2.heic** → **picture2.png**, then picture3, 4, and 5.

After all 5 are exported as PNG, reload your catalogue page; the images should display.
