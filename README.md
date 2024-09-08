# ABN AMRO ASSESSMENT

### Overview

The **ABN AMRO ASSESSMENT** is a Vue.js application built using **Vue 3** and **Vite**. It allows users to browse TV shows by genre and view detailed information about individual shows. The application integrates with the TVMaze API to fetch data about shows and genres.

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Commands](#commands)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [Project Structure](#project-structure)
8. [API Integration](#api-integration)
9. [Development and Testing](#development-and-testing)
10. [Troubleshooting](#troubleshooting)
11. [Contributing](#contributing)
12. [License](#license)

---

## Prerequisites

Before starting, ensure you have the following installed on your machine:

- **Node.js** (v20 or higher)
- **npm** (v10 or higher) for managing dependencies

You will also need access to the TVMaze API or a similar API for fetching TV shows and genres.

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Sait-Bozteke/abn-amro-assessment.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd abn-amro-assessment
   ```

3. **Install the necessary dependencies**:

   ```bash
   npm install
   ```

---

## Commands

Here are some common commands you might use:

- **Start the development server**:

  ```bash
  npm run dev
  ```

- **Lint your code**:

  ```bash
  npm run lint
  ```

- **Run tests**:

  ```bash
  npm run test:unit
  ```

- **Run prettier**:

  ```bash
  npm run format
  ```

- **Build the project**:

  ```bash
  npm run build
  ```

---

## Configuration

1. **Environment Variables**:

   Create a `.env` file in the root directory with the following variable:

   ```env
   VITE_API_BASE_URL=https://api.tvmaze.com
   ```

   Adjust the `VITE_API_BASE_URL` to point to the correct API endpoint for fetching TV shows and genres.

---

## Usage

### Running the Application

**Start the development server**:

```bash
npm run dev
```

### Application Features:

- **Home Page**: Browse a list of TV show genres.
- **Genre Page**: View TV shows categorized by genre.
- **Show Details Page**: See detailed information about a selected show, including its summary, genres, and ratings.

---

## Project Structure

```plaintext
├── src
│   ├── assets          # Static assets such as images
│   ├── components      # Reusable Vue components
│   ├── views           # Vue pages or views
│   ├── store           # Pinia store modules for state management
│   ├── services        # API service files
│   ├── utils           # Utility functions like API helpers
│   ├── router          # Vue Router configuration
│   ├── types           # TypeScript interfaces and types
│   └── main.ts         # App entry point
├── public              # Public static files
├── .env                # Environment configuration file
├── vite.config.ts      # Vite configuration
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```
