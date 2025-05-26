# n0te

**n0te** is a lightweight and efficient note-taking application built with React, Vite, and Tailwind CSS. It features a rich Markdown editor powered by `@mdxeditor/editor`, allowing for seamless note creation and management. The application is containerized using Docker for easy setup and deployment.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Using Vite Development Server](#using-vite-development-server)
  - [Using Docker](#using-docker)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Rich Markdown Editor**: Utilizes [`@mdxeditor/editor`](https://mdxeditor.dev/) for a comprehensive editing experience.
  - Support for headings, lists (ordered and unordered), quotes, thematic breaks, links, and tables.
  - Text formatting: Bold, Italic, Underline.
  - Undo/Redo functionality.
  - Block type selection.
- **Real-time Preview**: See your Markdown rendered as you type.
- **Simple and Clean UI**: Dark-themed interface for a pleasant user experience, styled with Tailwind CSS.
- **Responsive Design**: Adapts to different screen sizes.
- **Fast Development**: Leverages Vite for quick HMR and optimized builds.
- **Dockerized**: Easy to set up and run in a containerized environment.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later recommended, as per [`Dockerfile`](Dockerfile))
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/get-started) (optional, for containerized deployment)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/GShreekar/n0te.git
    cd n0te
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Running the Application

You can run the application using the Vite development server directly or via Docker.

### Using Vite Development Server

This method is ideal for active development due to Vite's Hot Module Replacement (HMR).

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This command is defined in the `scripts` section of [`package.json`](package.json).

2.  **Open your browser:**
    Navigate to `http://localhost:4073` (or the host/port specified in [`vite.config.js`](vite.config.js) if changed).

### Using Docker

This method uses the provided [`Dockerfile`](Dockerfile) and [`docker-compose.yml`](docker-compose.yml) to run the application in a container.

1.  **Build and run the Docker container:**
    ```bash
    docker-compose up
    ```
    To run in detached mode (in the background):
    ```bash
    docker-compose up -d
    ```

2.  **Open your browser:**
    Navigate to `http://localhost:4073`.

The [`Dockerfile`](Dockerfile) sets up a Node.js 18 environment, installs dependencies, and runs `npm run dev` exposing port `4073`. The [`docker-compose.yml`](docker-compose.yml) file orchestrates this service, mapping port `4073` on your host to port `4073` in the container and mounting the current directory into `/app` in the container for live code changes.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is licensed under the GNU Affero General Public License v3.0. See the [`LICENSE`](LICENSE) file for full details.