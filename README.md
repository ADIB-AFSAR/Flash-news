# News App

Welcome to the News App! This project is a React-based application that displays news articles and allows users to filter and search for news based on categories.

**Live link** - https://flash-news-delta.vercel.app/

## Important Information

This application supports both dynamic and static data. Currently, while hosted, it only supports static data. However, you can use it with dynamic APIs locally by cloning the repository to your system and adding your API key in place of static file path. 

To run the application with static data, read installation process


## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [API Reference](#api-reference)
8. [Contributing](#contributing)

## Features

- **Dynamic News Display:** Fetch and display news articles from an API.
- **Category Filtering:** Filter news articles by category using dynamic slugs.
- **Search Functionality:** Search for news articles based on user input.
- **Responsive Design:** Fully responsive design optimized for various devices.
- **Light and Dark Mode:** Theme toggle to switch between light and dark modes.
- **Smooth Scrolling:** Scroll smoothly with "up" and "down" buttons.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** 14.x or later
- **npm or Yarn:** Package manager to handle dependencies
- **Vercel CLI:** For deployment (optional)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/news-app.git
   cd news-app
2. **Install Dependencies**
   npm install or yarn install
3. Run the Application
   npm start or yarn start
   
## Environment Variables
  Create a .env file in the root directory of the project and add the following variables:
  
  REACT_APP_API_KEY=your_api_key
  REACT_APP_API_URL=https://newsapi.org/v2/everything

  Replace your_api_key with your actual API key and adjust REACT_APP_API_URL as needed.

## Usage
1. Navigate to http://localhost:3000 in your browser to view the app.
2. Use the search bar to find news articles.
3. Filter news articles by selecting a category.
4. Toggle between light and dark modes using the theme switch.

## Folder Structure
/news-app
|-- /public
|   |-- index.html
|   |-- style.css
|   |-- favicon.ico
|   |-- flash.png
|-- /src
|   |-- /components
|   |   |-- ScrollBtn.jsx
|   |   |-- NewsItems.jsx
|   |   |-- Search.jsx
|   |   |-- Crousel.jsx
|   |-- /pages
|   |   |-- Home.jsx
|   |   |-- Category.jsx
|   |-- /redux
|   |   |-- /action
|   |   |   |-- action.js
|   |   |-- /constant
|   |   |   |--contant.js
|   |   |-- /reducer
|   |   |   |-- reducer.js
|   |   |-- /saga
|   |   |   |--saga.js
|   |   |   |--service.js
|   |   |   |--data_updated.json
|   |   |-- store.js
|   |-- /layouts
|   |   |-- Header.jsx
|   |   |-- Footer.jsx
|   |-- App.js
|   |-- index.js
|-- .env
|-- package.json
|-- README.md

## API Reference
The app uses the News API to fetch news articles. Ensure you have a valid API key. API endpoints and usage are detailed in the News API documentation.

## Contributing
1. Fork the Repository: Click the "Fork" button on GitHub to create a copy of the repository under your account.

2. Clone Your Fork: Clone the forked repository to your local machine:
   git clone https://github.com/yourusername/news-app.git
3. Create a Branch: Create a new branch for your changes:
   git checkout -b feature/your-feature
4. Make Changes: Implement your changes and commit them:
   git add .
   git commit -m "Add new feature"
5. Push Changes: Push your changes to your forked repository:
   git push origin feature/your-feature
6. Create a Pull Request: Go to the original repository and open a pull request with your changes.
