# Features Module

This folder contains feature-specific modules organized by business domain.

## Structure

Each feature folder should follow this structure:
```
feature-name/
├── components/     # Feature-specific components
├── services/       # Feature-specific services
├── models/         # Feature-specific interfaces/types
└── feature.routes.ts  # Feature routing (if needed)
```

## Current Features

- **calculator/** - Investment calculator input and logic
- **results/** - Investment results display and visualization

## Guidelines

- Keep features isolated and self-contained
- Use standalone components (Angular 14+)
- Lazy load features when possible
- Feature services should be scoped to the feature
