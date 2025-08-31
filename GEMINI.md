
# GEMINI Project Analysis: app_ads1

## Project Overview

This is an Angular 18 web application generated using the Angular CLI. It features Server-Side Rendering (SSR) enabled with Express. The application is structured with standalone components and uses SCSS for styling. It incorporates the Angular Material library for UI components, specifically using the `azure-blue` prebuilt theme.

The application has two main sections:
- A "home" page, accessible via the `/shiba` route.
- A "users" section, accessible via the `/users` route, which also includes a dynamic route for querying specific users (`/usersQuery/:id/name/:type`).

The root component `AppComponent` bootstraps the main navigation (`NavigationComponent`), which likely contains the primary UI shell for the application.

## Building and Running

### Development
- **Run development server:** `npm start` or `ng serve`
- **Watch for changes:** `npm run watch`

### Production
- **Build:** `npm run build`
- **Run SSR server:** `npm run serve:ssr:app_ads1`

### Testing
- **Run unit tests:** `npm test` or `ng test`

## Development Conventions

- **Styling:** The project uses SCSS for styling, as defined in `angular.json`.
- **Components:** The project uses standalone components, a modern Angular practice.
- **Routing:** Routes are defined in `src/app/app.routes.ts` and are lazy-loaded, which is good for performance.
- **Linting/Formatting:** While no explicit linter configuration file (like `.eslintrc.json`) is visible in the provided structure, Angular projects typically include linting. It's recommended to use `ng lint` if configured.
