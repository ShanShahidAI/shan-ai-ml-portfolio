# Shan — AI/ML Portfolio

A responsive, animated personal portfolio for Shan, BS Artificial Intelligence student at Riphah International University.

## Quick start

This is a **dependency-free static website**. Open `index.html` in a browser, or run a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

- **Vercel:** Create a new project and upload/deploy this folder. Framework preset: `Other`. No build command is required.
- **Hostinger / shared hosting:** Copy the files to your website's `public_html` folder. No backend is required.
- **GitHub Pages:** Publish the folder as the site root.

## Edit content

- Project titles, descriptions, categories, status, GitHub links, and details: `script.js` (`PROJECTS` array).
- All page copy, headline, social links, certificates, and email: `index.html`.
- Styling, layout, dark/light themes, and animations: `styles.css`.
- Photographs: `assets/shan-portrait.webp` and `assets/shan-editorial.webp`.

## Notes

- Current demo uses verified GitHub profile/repository references and previously supplied academic project descriptions. Projects without public source are **not** represented as deployed products.
- Contact uses a `mailto:` link (no fake contact-form backend).
- The website respects `prefers-reduced-motion` and supports mobile and keyboard interactions.
- Keep private GitHub repositories private; no code from private repositories is included.
