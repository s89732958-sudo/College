# Digital Education Fund

Responsive education crowdfunding website with donor accounts, campaign applications, admin moderation, donation records and optional Razorpay checkout.

## Features
- Public list of approved education campaigns
- Donor registration/login with bcrypt and JWT
- Campaign application and admin approval/rejection
- Admin dashboard with campaign statistics and donation records
- Razorpay order creation and server-side signature verification
- Neon PostgreSQL persistence, security headers and rate limiting

## Local setup
1. Install Node.js 20+ and create a PostgreSQL database (Neon is supported).
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Configure `DATABASE_URL`, a random `JWT_SECRET` (32+ characters), `ADMIN_NAME`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_BOOTSTRAP_TOKEN`.
5. Run `npm start` and open http://localhost:3000.
6. Create the first administrator once:
   ```bash
   curl -X POST http://localhost:3000/api/admin/bootstrap -H 'x-bootstrap-token: YOUR_BOOTSTRAP_TOKEN'
   ```
7. Disable/remove the bootstrap endpoint after creating the admin.

Database tables are created automatically on the first API request.

## Vercel deployment
1. Import this repository into Vercel.
2. Provision Neon PostgreSQL and set `DATABASE_URL`.
3. Set `JWT_SECRET`, `ADMIN_NAME`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_BOOTSTRAP_TOKEN` in Vercel Environment Variables.
4. Optionally set `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`.
5. Deploy and verify `/api/health`.
6. Call the bootstrap endpoint once with the `x-bootstrap-token` header, then disable it and redeploy.

## API
- `GET /api/health`, `GET /api/campaigns`
- `POST /api/register`, `POST /api/login`
- `POST /api/campaigns` (authenticated)
- `POST /api/donations/order`, `POST /api/donations/verify`
- `GET /api/admin/stats`, `GET /api/admin/campaigns`, `PATCH /api/admin/campaigns/:id`, `GET /api/admin/donations` (admin)

## Before public fundraising
This is a technical starter, not legal or financial advice. Verify beneficiaries and documents, obtain parent/guardian consent for minors, publish privacy/refund/grievance policies, and confirm applicable Indian KYC, tax, FCRA and payment-provider requirements. Do not promise 80G deductions, CSR eligibility or foreign-donation acceptance unless legally eligible and verified.

Never commit `.env` or payment secrets. Use HTTPS, strong unique credentials and database backups.