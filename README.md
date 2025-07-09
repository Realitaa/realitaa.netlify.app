# Reza Mulia Putra's Personal Website

This is the source code for [Reza Mulia Putra](https://realitaa.github.io)'s personal website, built with [Vue 3](https://vuejs.org/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), and [Vanta.js](https://www.vantajs.com/). The site showcases projects, achievements, and contact information, and supports both English and Indonesian languages. The branch used by Github Pages is `v1`.

## Features

- **Responsive Design**: Mobile-first and fully responsive layout.
- **Internationalization**: Supports English and Indonesian via [vue-i18n](https://vue-i18n.intlify.dev/).
- **Animated Hero Section**: Interactive globe animation using Vanta.js.
- **Project & Achievement Gallery**: Dynamic loading of projects and certificates from JSON files.
- **Contact Section**: Quick links to social media and messaging platforms.
- **404 Page**: Custom not found page with animated message.

## Project Structure

- [`.github/workflows/build.yml`](.github/workflows/build.yml) - CI/CD for Github Pages using Github Action Node JS.
- [`src/`](src/) — Vue components and views
- [`public/`](public/) — Static assets, certificates, and project data
- [`src/assets/main.css`](src/assets/main.css) — Tailwind CSS and custom styles entry point
- [`src/i18n.js`](src/i18n.js) — Internationalization setup and library
- [`src/router.js`](src/router.js) — Vue Router configuration

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22 or newer recommended. Personally using v23.4.0)
- [npm](https://www.npmjs.com/)

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

Open http://localhost:5173 to view the site locally.

### Build for Production

```sh
npm run build
```

The production-ready files will be in the `dist/` directory.

### Lint & Format

```sh
npm run lint
npm run format
```

## Deployment

This project uses GitHub Actions ([.github/workflows/build.yml](.github/workflows/build.yml)) to build and deploy the site automatically on pushes to the dev branch using [peaceiris/actions-gh-pages@v3](https://github.com/peaceiris/actions-gh-pages).

## License

This repository is for personal portfolio use. For inquiries, please contact [Reza Mulia Putra](https://linkedin.com/in/Realitaa).

> Made with ❤️ using Vue 3, Vite, and Tailwind CSS.
