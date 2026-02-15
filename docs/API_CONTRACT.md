# API Contract

## Authentication
- `POST /api/auth/register` - Create new user
- `POST /api/auth/login` - Login and get JWT

## Campaigns
- `GET /api/campaigns` - List all campaigns
- `POST /api/campaigns` - Create a new campaign
- `GET /api/campaigns/:id` - Get campaign details
- `PUT /api/campaigns/:id` - Update campaign
- `DELETE /api/campaigns/:id` - Delete campaign

## Users
- `GET /api/users` - List all users (admin only)
- `POST /api/users/import` - Bulk upload users via CSV

## Templates
- `GET /api/templates` - List templates
- `POST /api/templates` - Create template
