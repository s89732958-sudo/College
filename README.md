# Digital Education Fund

A responsive education crowdfunding website with a JSON-file database, donor accounts, campaign applications, admin moderation, donation records and Razorpay checkout.

## Features
- Public directory of approved education campaigns
- Donor registration/login (bcrypt password hashing + JWT)
- Campaign applications and admin approval/rejection
- Full admin control panel: overview metrics, campaign review, users/donors, donation records, search/filter and CSV export
- Razorpay order creation and server-side payment signature verification
- JSON database stored at `data/db.json`; created automatically on first API request
- Express security headers and API rate limiting

## Local setup
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Set a random `JWT_SECRET` of at least 32 characters.
5. Set `ADMIN_NAME`, `ADMIN_EMAIL`, and a strong `ADMIN_PASSWORD`.
6. Run `npm start` and open http://localhost:3000.
7. Create the first administrator once by calling:
   ```bash
   curl -X POST http://localhost:3000/api/admin/bootstrap \
     -H "x-bootstrap-token: YOUR_ADMIN_BOOTSTRAP_TOKEN"
   ```
   Set `ADMIN_BOOTSTRAP_TOKEN` in your environment before running this command. Keep it secret. After admin creation, remove/disable the bootstrap endpoint before public production use.
8. Open http://localhost:3000/admin.html and sign in using `ADMIN_EMAIL` and `ADMIN_PASSWORD`.

## JSON database
- File: `data/db.json`
- Collections: `users`, `campaigns`, `donations`
- Passwords are stored as bcrypt hashes; payment secrets are never stored in the JSON database.
- Back up this file securely and never publish real user/donation data in GitHub.

## Razorpay
Set `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` in `.env`. Start with Razorpay test credentials. The payment API verifies the Razorpay signature before marking a donation as paid.

## Important hosting limitation
This JSON-file database is intended for local development or a traditional persistent Node.js server with writable disk. Vercel serverless functions have ephemeral, non-shared filesystems; JSON writes there are not durable or safe for concurrent production use. For Vercel hosting, migrate storage to a managed database or persistent object store before accepting real donations. Do not treat a Vercel deployment with local JSON storage as production-ready.

## Before public fundraising
This is a technical starter, not legal or financial advice. Verify beneficiaries and supporting documents, obtain parent/guardian consent for minors, protect children's personal data, publish privacy/refund/grievance and fund-disbursement policies, and confirm applicable Indian KYC, tax, FCRA and payment-provider requirements. Do not promise 80G deductions, CSR eligibility or foreign-donation acceptance unless legally eligible and verified.

Never commit `.env` or payment secrets. Use HTTPS, strong unique credentials and secure backups.
