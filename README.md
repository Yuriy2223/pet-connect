# Petlove

## Slogan

_Helping every pet find a home!_

## Project Description

Petlove is a platform for searching, posting, and viewing pet adoption listings. Users can create their own listings, browse available pets, filter them by various criteria, and contact pet owners.

## Main Pages

- **Home** – The page contains the project name and description.
- **News** – The news page features a list of animal-related news. Users can read more details by clicking on a link. A search function allows filtering news by keywords.
- **Find pet** – This page contains a catalog of listings that can be filtered by keywords, category, gender, pet type, and location, and sorted by popularity or price. Server-side pagination is implemented for easy navigation.
- **Our friends** – The page lists partner organizations with contact details and links to their websites. Users can view their locations on a map and check business hours.
- **Profile page** – This page displays the user's profile, which can be edited, along with the list of pets they have added. It also shows the user's favorite listings and recently viewed listings.
- **Registration** – A registration form with fields for name, email, password, and password confirmation.
- **Login** – A login form with email and password validation.

## Core Technologies

### Frontend

- **React + Vite** – For fast and efficient development.
- **TypeScript** – Ensures strong typing and code safety.
- **React Router** – For page navigation.
- **Redux Toolkit + Redux Persist** – State management, handling theme switching, modal windows, and component states, effectively managing the entire application.
- **Axios** – API communication.
- **React Hook Form + Yup** – Form handling and validation.
- **Styled-components** – Custom styling.
- **React Select** – Custom dropdown lists.
- **React Toastify** – Notifications.
- **Date-fns** – Date handling.

### Development Tools

- **ESLint**: A linter for JavaScript and TypeScript that enforces code consistency and prevents errors.
- **Prettier**: A code formatter that ensures a uniform code style across the project.
- **TypeScript ESLint**: A plugin for ESLint to support TypeScript, enabling type-safe code analysis.
- **Vite Plugin React**: A plugin for React support in Vite, optimizing JSX handling and fast reloading.

### Backend

- **REST API**: Standard HTTP requests (GET, POST, PUT, DELETE) are used for interacting with the backend, retrieving, filtering, and sorting listings.

### Other Tools

- **Figma**: Used for UI design and prototyping.

## Technical Requirements

- **Responsive design** for all devices
- **Optimized graphics** with Retina display support
- **Filtering, search, and server-side pagination**
- **Burger menu** for mobile navigation
- **Modal windows** for user interactions
- **Token-based authentication**, stored in Redux
- **Listing creation form** with validation

## Completion Criteria

- Well-structured and maintainable code
- Use of semantic HTML5 tags
- API integration (fetching, filtering, pagination)
- Implementation of Redux Toolkit
- Forms validated with React Hook Form + Yup
- Fully responsive and UX/UI-friendly design

## Deployment

The project is deployed at: [Deployment Link](https://pet-connect-fawn.vercel.app/)
