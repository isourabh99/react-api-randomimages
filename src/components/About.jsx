import React from "react";

const About = () => {
  return (
    <div>
      <p className="mx-20 text-2xl text-red-400">Project Description</p>
      <p className="mx-20 text-xl">
        This project is a React application created using Vite, aimed at
        demonstrating component-based architecture, routing, and API integration
        using Axios. The application includes multiple pages with navigation and
        an image gallery fetched from an external API.
      </p>
      <br />
      <p className="mx-20 text-2xl text-red-400">Features</p>
      <br />
      <p className="mx-20 text-2xl text-blue-400">
        Component-Based Architecture:
      </p>
      <br />
      <p className="mx-20 text-2xl ">
        <span className="text-2xl text-yellow-400"> Nav Component:</span> A
        navigation bar that allows users to switch between different pages
        (Home, Gallery, About). Gallery Component: Displays images fetched from
        an external API and allows re-fetching images.
        <br /> <br />
        <span className="text-2xl text-yellow-400">About Component:</span> A
        static page with information about the application. Routing: Implemented
        using react-router-dom to handle navigation between different
        components/pages. Axios Configuration: Configured a global Axios
        instance with a base URL pointing to the lorempixum API for fetching
        images.
        <br /> <br />
        <span className="text-2xl text-yellow-400">API Integration:</span> The
        Gallery component fetches images from the API and displays them.
        Includes functionality to automatically fetch images when the Gallery
        component is viewed using useEffect.
      </p>
    </div>
  );
};

export default About;
