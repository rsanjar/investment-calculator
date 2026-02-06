# Core Module

This folder contains singleton services, guards, interceptors, and models used throughout the application.

## Structure

- **services/** - Application-wide singleton services
- **guards/** - Route guards for authentication and authorization
- **interceptors/** - HTTP interceptors for request/response handling
- **models/** - Core TypeScript interfaces and models

## Guidelines

- Services in this folder should be provided in root
- Keep business logic in feature modules, not here
- Only include truly global functionality
