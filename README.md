# College Discovery Platform

A full-stack College Discovery Platform built with **Next.js, React, TypeScript, Prisma ORM, and PostgreSQL**. The application enables users to discover colleges, search and filter results, compare multiple colleges side-by-side, and save their favourite colleges through a secure authentication system.

This implementation focuses on the following core features from the internship assignment:

* College Listing with Search and Filters
* College Detail Page
* Compare Colleges
* Authentication and Saved Colleges

## Live Demo

https://college-discovery-xuz6.vercel.app/

## GitHub Repository

https://github.com/Chethali/college-discovery

## Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes
* Node.js
* TypeScript

### Database

* PostgreSQL (Neon)
* Prisma ORM

### Authentication

* JWT Authentication
* bcryptjs Password Hashing
* HTTP-only Cookies

## Features

* Secure user signup and login
* JWT-based authentication
* Searchable college listing
* Filter colleges by state and college type
* Pagination support
* College detail page with overview, courses, and placement statistics
* Save and unsave favourite colleges
* Compare up to three colleges side-by-side
* Responsive user interface
* REST API backed by PostgreSQL and Prisma ORM

## Architecture

* Frontend built using Next.js App Router
* Backend implemented using Next.js API Routes
* Prisma ORM provides type-safe database access
* PostgreSQL database hosted on Neon
* JWT authentication using secure HTTP-only cookies
* Modular component-based architecture for scalability and maintainability

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Chethali/college-discovery.git
cd college-discovery
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root.

```env
DATABASE_URL="your-neon-postgres-url"
JWT_SECRET="your-secret-key"
```

### Run Database Migrations

```bash
npx prisma migrate deploy
```

### Seed the Database

```bash
npx prisma db seed
```

### Start the Development Server

```bash
npm run dev
```

Then open:

```
http://localhost:3000
```

in your browser.

## Project Highlights

This project was developed as part of a Full Stack Engineering internship assessment with emphasis on:

* Clean and modular architecture
* Database-backed REST APIs
* Secure authentication
* Scalable Prisma schema design
* Responsive frontend development
* Reusable UI components
* Production-oriented development practices
