# Star Wars Character Explorer (Frontend)

A modern web application for exploring characters from the Star Wars universe, built with Next.js.

![Star Wars Character Explorer](https://i.ibb.co.com/Wvw3F0Xh/Capture-2025-05-09-063032.png)

## Overview

The Star Wars Character Explorer allows users to:
- Browse a list of Star Wars characters
- Search for characters by name
- View detailed information about each character
- Navigate through paginated results

## Technology Stack

- **Next.js 15.3.2** - React framework with server-side rendering
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Component library

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v8 or later) or yarn (v1.22 or later) or pnpm (v8 or later) or bun (v1 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sudwiptokm/theredit_fe
cd theredit_fe
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with:
```
API_URL=http://localhost:5501/characters
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- **Character Listing**: View a grid of Star Wars characters
- **Character Details**: See comprehensive information about each character
- **Search**: Find characters by name with debounced search
- **Pagination**: Navigate through multiple pages of results
- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Server-Side Rendering**: Fast initial load and SEO-friendly

## Project Structure

- `/src/app`: Pages and layouts using Next.js App Router
- `/src/components`: Reusable React components
- `/src/lib`: Utility functions and API clients
- `/public`: Static assets

## Documentation

For more detailed information, please refer to:

- [Technical Documentation](./docs/TechnicalDocumentation.md)
- [Installation Guide](./docs/InstallationGuide.md)
- [QA/Test Plan](./docs/QA_TestPlan.md)

## Building for Production

```bash
npm run build
```

The compiled output will be in the `.next` directory.

## Deployment

The frontend can be deployed to Vercel, Netlify, or any other static site hosting service. Make sure to set the environment variables as described in the Installation Guide

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Star Wars API (SWAPI)](https://swapi.py4e.com/) for providing the data
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling utilities
- [Shadcn UI](https://ui.shadcn.com/) for the component library
