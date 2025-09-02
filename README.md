# Tekken-Forum

## Overview

Tekken-Forum is a fullstack web forum built with Next.js that allows users to post and engage via global feed with comment sections.

### Current features:

- Post creation
- Commenting
- Editing/Deleting posts
- Post filtering
- Sorting via newest/oldest
- Responsive UI with modern design

### Planned features:

- User authentication and profile management
- Profile customisation
- Post likes

### Tech Stack

Frontend:
![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwindcss&logoColor=white)

Authentication:
![Clerk](https://img.shields.io/badge/Clerk-3A3A3A?logo=clerk&logoColor=white)

Database:
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)

UI Components:
![React Icons](https://img.shields.io/badge/React%20Icons-20232A?logo=react&logoColor=white)

Deployment:
![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=white)

## Set-up

### Pre-requisites

- Node.js
- npm

### Installation

1. Clone the repo

```
git clone git@github.com:PeterHetherington/tekken-forum.git
cd tekken-forum
```

2. Install dependencies

```
npm install
```

3. Run development server

```
npm run dev
```

4. Add environment variables

This project requires the following environment variable:

- `DB_CONN`: The connection string for your database.

Create a `.env` file in the root of the project and add:

```
DB_CONN=your_database_connection_string_here

```

Schema for the database can be found in seed.sql

Make sure to add .env to your .gitignore file

Resources used:
https://nextjs.org/docs/app/api-reference/functions/use-search-params
