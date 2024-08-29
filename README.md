# MERN Blog

## Project Overview

The MERN Blog project is a modern, full-stack web application built using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. This project serves as a blog platform where users can sign up, log in, manage their posts, and navigate through various sections of the site.

The application is designed to offer both public and admin-facing features, with distinct roles and permissions for different types of users.

## Key Features

### User Authentication

- **Signup**: Users can create an account by providing their first name, last name, email, and password.
- **Login**: Registered users can log in to access personalized features and administrative functionalities.
- **Role-Based Access**: Differentiates between regular users and admin users, ensuring that only admins can access the admin dashboard and manage posts.

### Public Frontend

- **Home Page**: Provides an overview of the blog with navigation to other sections.
- **About Page**: Contains information about the blog and its purpose.
- **Blog Page**: Displays a list of blog posts with options to read more.
- **Login & Signup Pages**: Interfaces for users to log in or register for an account.

### Admin Dashboard

- **Dashboard**: A central hub for admin users to manage blog content.
- **Posts Management**: Admins can create, update, and delete blog posts.
- **Post Editing**: Provides a form for updating existing posts.

## Technologies Used

- **Frontend**:
  - **React**: For building the user interface and handling frontend logic.
  - **Tailwind CSS**: For styling the components with a utility-first CSS framework.
  - **Pug**: Used for templating in some components.

- **Backend**:
  - **Node.js**: The runtime environment for running the server-side code.
  - **Express.js**: Framework for building RESTful APIs.
  - **MongoDB**: NoSQL database for storing user and blog data.
  - **JWT (JSON Web Tokens)**: For secure user authentication and authorization.

- **Build Tools**:
  - **Webpack**: For bundling JavaScript and CSS files.
  - **Laravel Mix**: Provides a fluent API for defining Webpack build steps.

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB instance (local or cloud-based)
- Git

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/CABDUWAHAAB/mern-blog.git
   cd mern-blog
