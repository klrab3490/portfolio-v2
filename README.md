# Portfolio Website v2

This repository contains the code for my portfolio website version 2.0. It is built using Next.js, React, and Tailwind CSS, with additional packages for email functionality and animation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)

## Installation

To get started with the project, clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/protfolio-v2.git protfolio
```

Then, navigate to the project directory:

```bash
cd protfolio
```

Install the required dependencies:

```bash
npm install
```

## Usage

Once the dependencies are installed, you can run the development server using:

```bash
npm run dev
```

This will start the development server on `localhost:3000` by default. You can then view the website in your browser.

For production build, you can use:

```bash
npm run build
```

And to start the production server:

```bash
npm run start
```

## Deployment

This project can be easily deployed using Vercel, which provides seamless integration with Next.js projects. Follow these steps to deploy:

1. Install the Vercel CLI globally:

   ```bash
   npm install -g vercel
   ```

2. Log in to your Vercel account:

   ```bash
   vercel login
   ```

3. Once logged in, navigate to your project directory:

   ```bash
   cd protfolio-v2
   ```

4. Deploy your project using the following command:

   ```bash
   vercel --prod
   ```

This will deploy your application to Vercel's platform and provide you with a unique URL where your application will be accessible.

## Scripts

- `dev`: Runs the Next.js development server.
- `build`: Builds the production-ready version of the website.
- `start`: Starts the production server.
- `lint`: Lints the project files using ESLint.

## Dependencies

- `@emailjs/browser`: Provides functionality for sending emails from the browser.
- `framer-motion`: Library for creating fluid animations in React.
- `next`: Framework for building React applications.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `react-icons`: Library for popular icons in React components.
- `sharp`: High-performance image processing library.

## Dev Dependencies

- `autoprefixer`: PostCSS plugin to parse CSS and add vendor prefixes.
- `eslint`: Tool for identifying and reporting on patterns found in JavaScript code.
- `eslint-config-next`: ESLint configuration for Next.js projects.
- `postcss`: Tool for transforming CSS with JavaScript plugins.
- `tailwindcss`: Utility-first CSS framework for rapidly building custom designs.
