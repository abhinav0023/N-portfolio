# Neha Sindhwani — portfolio

Personal portfolio site for **Neha Sindhwani**, built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS** v4. Content is driven from a single JSON file so copy updates do not require layout changes.

## Prerequisites

- **Node.js** 20+ (LTS recommended)

## Scripts

```bash
npm install    # install dependencies
npm run dev    # local dev server (Vite)
npm run build  # typecheck + production build to dist/
npm run preview # serve the production build locally
npm run lint   # ESLint
```

## Editing content

All factual copy and lists live in [`src/data/profile.json`](src/data/profile.json). After editing, save the file; Vite will hot-reload in development.

### Assumptions (placeholders)

- **Profile photo:** There is no image URL in the JSON yet. The hero uses a geometric “initials” block instead. Add a field later (for example `personalInfo.photoUrl`) and wire it in the hero if you want a real photo.
- **Project links:** `liveUrl` and `repoUrl` are not in the JSON; project cards list tech and descriptions only. Add those fields when you want buttons without inventing URLs.

## Deploying to GitHub Pages

This project sets Vite [`base`](vite.config.ts) to `./` so asset paths work on GitHub Pages and many static hosts.

1. Create a GitHub repository and push this project.
2. For a **project site** at `https://<user>.github.io/<repo>/`, set `base` in `vite.config.ts` to `'/your-repo-name/'` (leading and trailing slashes matter for some assets).
3. Run `npm run build`.
4. Publish the **`dist/`** folder:
   - **Actions:** use a workflow that uploads `dist` to Pages, or  
   - **`gh-pages` branch:** push only `dist` contents to the branch configured in **Settings → Pages**.

Replace the placeholder `og:url` in [`index.html`](index.html) with your real Pages URL when you know it.

## Design

Visual direction follows a **Playful Geometric** system: warm cream background, violet accent, chunky borders, hard “sticker” shadows, and motion that respects `prefers-reduced-motion`.

## License

Private project for personal portfolio use unless otherwise specified.
