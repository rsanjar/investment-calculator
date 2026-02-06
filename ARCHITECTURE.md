# Project Architecture

This document describes the folder structure and architectural decisions for the Investment Calculator application.

## Angular 21 Best Practices

This project follows Angular 21 best practices including:
- **Standalone Components** - All components use standalone: true
- **Signals** - Using Angular Signals for reactive state management
- **Inject Function** - Using inject() for dependency injection
- **Modern Routing** - Functional route guards and resolvers
- **TypeScript 5.9** - Latest TypeScript features

## Folder Structure

```
src/
├── app/
│   ├── core/                 # Singleton services and app-wide functionality
│   │   ├── services/         # Global singleton services
│   │   ├── guards/           # Route guards
│   │   ├── interceptors/     # HTTP interceptors
│   │   └── models/           # Core data models
│   ├── shared/               # Reusable components and utilities
│   │   ├── components/       # Shared UI components
│   │   ├── directives/       # Custom directives
│   │   ├── pipes/            # Custom pipes
│   │   └── utils/            # Utility functions
│   ├── features/             # Feature modules by domain
│   │   ├── calculator/       # Investment calculator feature
│   │   └── results/          # Results display feature
│   ├── layout/               # Layout components
│   │   ├── header/
│   │   └── footer/
│   ├── app.ts               # Root component
│   ├── app.config.ts        # Application configuration
│   └── app.routes.ts        # Root routing
├── assets/                   # Static assets
│   ├── images/
│   └── icons/
├── environments/             # Environment configurations
├── styles.scss              # Global styles
└── main.ts                  # Application bootstrap

```

## Module Organization

### Core Module
- Contains singleton services used throughout the app
- Services are provided in root
- Includes guards, interceptors, and core models
- Should only be imported once (if using modules)

### Shared Module
- Contains reusable components, directives, and pipes
- Can be imported by multiple features
- No business logic - purely presentational

### Features
- Organized by business domain
- Each feature is self-contained
- Can be lazy-loaded for better performance
- Contains feature-specific components, services, and models

### Layout
- Application shell components
- Header, footer, navigation
- Typically loaded eagerly

## Code Organization Guidelines

1. **One component per file** - Each component in its own file
2. **Standalone components** - Use standalone: true for all components
3. **Signals over RxJS** - Prefer signals for simple state management
4. **Dependency injection** - Use inject() function in constructors
5. **Type safety** - Use TypeScript interfaces for all data structures
6. **Naming conventions**:
   - Components: `feature-name.component.ts`
   - Services: `feature-name.service.ts`
   - Models: `feature-name.model.ts`
   - Tests: `feature-name.spec.ts`

## Performance Considerations

- Lazy load feature modules
- Use OnPush change detection strategy
- Implement trackBy for ngFor
- Optimize images and assets
- Use production builds for deployment

## Testing Strategy

- Unit tests for services and components
- Integration tests for feature workflows
- E2E tests for critical user journeys
- Test files colocated with source files

## Future Enhancements

- State management (NgRx/SignalStore) if needed
- PWA capabilities
- Internationalization (i18n)
- Accessibility (a11y) improvements
