# New Times Frontend

A responsive business and technology news website built with React. The app includes editorial pages, live-news sections, market widgets, magazine content, subscription flows, and reusable news components.

## Tech Stack

- React 19
- React Router
- Vite
- Tailwind CSS 4
- Recharts

## Main Sections

- Home and top stories
- Magazine
- Billionaires
- Economy
- NT Spotlight
- Technology
- Industry
- Money Today
- Subscription page

## Getting Started

### Requirements

- Node.js
- npm

### Installation

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint after an `eslint.config.js` file is added |

## Project Structure

```text
frontend/
|-- public/             Static public files
|-- src/
|   |-- assets/         Local images and other media
|   |-- component/      Reusable page and content components
|   |-- components/     Shared site components
|   |-- pages/          Route-level page components
|   |-- App.jsx         Application routes and shared layout
|   |-- index.css       Tailwind import and global styles
|   `-- main.jsx        React application entry point
|-- index.html
|-- package.json
`-- vite.config.js
```

## Production Build

```bash
npm run build
npm run preview
```

The generated production files are written to `dist/`.

## Notes

- Routing uses `BrowserRouter`, so production hosting should redirect unknown paths to `index.html`.
- Some content uses remote images and Google Fonts, which require an internet connection.
- Page routes are configured in `src/App.jsx`.
