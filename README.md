# Wedding App

A beautiful and comprehensive wedding planning and management application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

### Guest Portal

- Wedding information and event details
- RSVP management system
- Gift registry integration
- Photo sharing capabilities
- Guest messaging system

### Admin Dashboard

- Guest list management
- RSVP tracking and analytics
- Event configuration
- Content management system
- Vendor coordination tools

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter, Playfair Display, Dancing Script, Crimson Text
- **Code Quality**: ESLint, Prettier, Husky
- **Development**: Hot reload, TypeScript checking, automated linting

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

Copy the example environment file and configure your variables:

```bash
cp .env.example .env.local
```

Fill in the required environment variables for database, authentication, storage, and external services.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── admin/             # Admin dashboard pages
│   ├── guest/             # Guest portal pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── ui/               # shadcn/ui components
│   └── providers.tsx     # App providers
├── lib/                  # Utility functions
├── styles/              # Theme and styling
│   └── theme.ts         # Wedding theme configuration
└── types/               # TypeScript type definitions
```

## Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run prettier     # Format code with Prettier
npm run type-check   # Check TypeScript types
```

## Wedding Theme

The application includes a carefully crafted wedding color palette:

- **Primary Colors**: Rose/Pink shades for romantic elements
- **Secondary Colors**: Elegant grays and slates
- **Accent Colors**: Gold, champagne, sage green, and lavender
- **Typography**: Serif fonts for elegance, sans-serif for readability

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Ensure all checks pass (linting, type checking, formatting)
4. Submit a pull request

## Deployment

This project is optimized for deployment on Vercel:

```bash
vercel --prod
```

Make sure to configure all environment variables in your deployment platform.
