# Melih Koçhan - Portfolio

A modern, interactive portfolio website featuring a 3D keyboard animation and smooth scrolling experience.

## Features

- 🎨 **3D Interactive Keyboard** - Animated Spline keyboard that responds to scroll and keypress
- 🌙 **Dark/Light Mode** - Theme toggle with smooth transitions
- ✨ **Smooth Scrolling** - Enhanced scrolling experience with Lenis
- 🎯 **Skills Showcase** - Interactive skill display on keyboard interaction
- 📱 **Responsive Design** - Fully responsive across all devices
- 🚀 **Modern Stack** - Built with Next.js 15, React 19, TypeScript, and Tailwind CSS

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Graphics:** Spline
- **Animations:** GSAP, Framer Motion
- **Smooth Scroll:** Lenis

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

3. **Setup Resend API (for Contact Form):**
   - Go to [Resend.com](https://resend.com) and create an account
   - Navigate to API Keys section
   - Create a new API key
   - Copy the key and add it to `.env.local` as `RESEND_API_KEY`
   - Update your email in `app/data/config.ts` (replace `melihkochan@example.com` with your real email)

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── components/     # React components
│   ├── sections/      # Page sections (Hero, Skills, Projects, Contact)
│   ├── api/           # API routes
│   └── ...
├── public/            # Static assets
├── data/              # Configuration and constants
└── lib/               # Utility functions
```

## Build

```bash
npm run build
```

## Contact

- **Website:** [melihkochan.com](https://melihkochan.com)
- **GitHub:** [@melihkochan](https://github.com/melihkochan)
- **LinkedIn:** [Melih Koçhan](https://www.linkedin.com/in/melih-kochan-7961371a2/)
- **X (Twitter):** [@melihkochan1](https://x.com/melihkochan1)
- **Instagram:** [@melih_kochan](https://www.instagram.com/melih_kochan/)

## License

© 2026 Melih Koçhan. All rights reserved.
