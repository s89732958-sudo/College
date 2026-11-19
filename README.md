# Digital Education Fund

Education crowdfunding platform with responsive public website, donor accounts, campaign applications, admin moderation and Razorpay payment integration.

## Features
- Public campaign directory and campaign details
- Donor registration and login (bcrypt password hashing + JWT)
- Campaign submission with admin approval/rejection workflow
- Admin dashboard with totals, pending applications and donation records
- Razorpay order creation and payment signature verification
- Neon PostgreSQL database for persistent hosted data
- Express API with rate limiting, Helmet security headers and input checks

## Local setup
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Set `DATABASE_URL` to a Neon PostgreSQL connection string.
5. Set `JWT_SECRET` to a random secret with at least 32 characters.
6. Set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_NAME`, and `ADMIN_BOOTSTRAP_TOKEN`.
7. Set Razorpay test keys to enable test payments (optional).
8. Run `npm start` and open http://localhost:3000.

The database tables are created automatically on first API request. To create the first admin, call POST /api/admin/bootstrap with header `x-bootstrap-token: YOUR_ADMIN_BOOTSTRAP_TOKEN`. After successful creation, remove or rotate the bootstrap token.

## Vercel deployment
- Import this repository into Vercel.
- Add all variables from `.env.example` in Project Settings → Environment Variables.
- Use a Neon database; do not use a local SQLite file on Vercel.
- Deploy after setting the environment variables.
- Configure Razorpay webhook and test the full payment flow before accepting live contributions.

## Security and compliance
Never commit real secrets. Verify beneficiaries and supporting evidence before approval; obtain guardian consent where children are involved; protect minors' personal information; publish clear fees, refunds, privacy, grievance and fund-disbursement policies. Seek qualified Indian legal/accounting advice on the appropriate entity structure and applicable 80G, CSR and FCRA rules. Do not claim tax deductibility without legal eligibility and documentation.
