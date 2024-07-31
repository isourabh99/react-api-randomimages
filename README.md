# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Project Description
This project is a React application created using Vite, aimed at demonstrating component-based architecture, routing, and API integration using Axios. The application includes multiple pages with navigation and an image gallery fetched from an external API.

Features
Component-Based Architecture:

Nav Component: A navigation bar that allows users to switch between different pages (Home, Gallery, About).
Gallery Component: Displays images fetched from an external API and allows re-fetching images.
About Component: A static page with information about the application.
Routing:

Implemented using react-router-dom to handle navigation between different components/pages.
Axios Configuration:

Configured a global Axios instance with a base URL pointing to the lorempixum API for fetching images.
API Integration:

The Gallery component fetches images from the API and displays them.
Includes functionality to automatically fetch images when the Gallery component is viewed using useEffect.
