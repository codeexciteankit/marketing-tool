# Architecture Overview

## Tech Stack
- **Frontend**: Next.js 14+ (App Router), React, TailwindCSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL
- **Messaging**: Gupshup API (integration planned)

## System Design
1. **User Interface**: Built with Next.js for dashboard, campaign management, and analytics.
2. **API Server**: Express server handles business logic, database interactions, and external API calls.
3. **Database**: PostgreSQL stores user data, campaigns, templates, logs.
4. **Message Queue**: (Planned) Redis/RabbitMQ for bulk message processing.

## Security
- JWT Authentication
- Role-based Access Control (RBAC)
- Data Encryption (at rest and in transit)
