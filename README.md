# Portfolio

This is a Next.js portfolio site. It uses Tailwind CSS for styling and submits contact forms through [Web3Forms](https://web3forms.com).

## Contact form
The contact section collects your name, email, subject, and message and posts directly to the Web3Forms API. To enable submissions:

1. Create a free account at [Web3Forms](https://web3forms.com) and generate an access key.
2. Store the key in your environment, e.g. `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
   ```

This repository includes a `.env.local` file with a demo access key so the
contact form works out of the box. Replace it with your own key for production
use.

## Scripts
- `npm run dev` – start development server
- `npm run build` – build for production
- `npm start` – run the production build
- `npm test` – run tests
- `npm run export` – build static files into the `docs` folder for GitHub Pages
