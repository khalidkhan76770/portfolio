# Portfolio

This is a Next.js portfolio site. It uses Tailwind CSS for styling and includes a simple API route for contact form submissions.

## Contact form
The contact form posts to `/api/send-email` and sends email via the SendGrid API. Set the following environment variables so the API can send mail:
- `SENDGRID_API_KEY`
- `SENDGRID_FROM_EMAIL`

## Scripts
- `npm run dev` – start development server
- `npm run build` – build for production
- `npm start` – run the production build
- `npm test` – run tests
- `npm run export` – build static files into the `docs` folder for GitHub Pages
