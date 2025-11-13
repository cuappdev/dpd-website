# DPD Website

A modern, vibrant course website for Introduction to Digital Product Design built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, colorful design with purple, orange, and red accents
- 📱 Fully responsive layout
- 🎯 Interactive navigation with dropdown menus
- ❓ FAQ section with accordion functionality
- ✨ Decorative abstract shapes throughout the page
- 🎓 Course information, dates, and instructor profiles

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
dpd-website/
├── app/
│   ├── page.tsx          # Main homepage
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Navigation bar with dropdowns
│   ├── FAQ.tsx           # FAQ accordion component
│   └── DecorativeShape.tsx # Decorative SVG shapes
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library
