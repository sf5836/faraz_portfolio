# Dawood Ahmad — Portfolio

A modern, animated developer portfolio built with **React 19**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **GSAP**.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

---

## Features

- **Hero Section** — Animated intro with typing effect, floating logo cards, and particle background
- **About** — Code-terminal style bio with auto-typing animation
- **Skills** — Categorized skill cards (Frontend, Backend, Tools, Learning)
- **Experience & Education** — Interactive timeline with glowing nodes
- **Projects** — Filterable project grid with category tabs and hover effects
- **Certifications** — Featured IBM certificate + 3-column grid with lightbox modal
- **Stats** — Animated counters with professional icons
- **Contact** — Working contact form via EmailJS
- **Custom Cursor** — Magnetic cursor effect on desktop
- **Scroll Progress** — Top progress bar indicator
- **Responsive** — Fully mobile-friendly design
- **Dark Theme** — Custom dark palette with cyan/purple accents

---

## Tech Stack

| Category       | Technologies                                      |
| -------------- | ------------------------------------------------- |
| **Framework**  | React 19, Vite 7                                  |
| **Styling**    | Tailwind CSS 3, PostCSS, Custom CSS               |
| **Animation**  | Framer Motion, GSAP                               |
| **Icons**      | React Icons (Feather)                              |
| **Contact**    | EmailJS                                           |
| **Other**      | React CountUp, React Type Animation, Intersection Observer |

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/dawoodahmad018/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy.

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
├── public/
│   ├── certificates/       # Certificate images
│   ├── logos/               # Company & university logos
│   ├── projects/            # Project screenshots
│   └── profile.png          # Profile picture
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, CustomCursor
│   │   ├── sections/        # Hero, About, Skills, Experience, Projects, etc.
│   │   └── ui/              # AnimatedText, GlowCard, ParticleField, etc.
│   ├── data/
│   │   └── portfolioData.js # ⭐ All portfolio content (edit this to customize)
│   ├── hooks/               # Custom React hooks
│   ├── styles/
│   │   └── globals.css      # Global styles & Tailwind imports
│   └── utils/               # Animation configs & EmailJS setup
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Customization

### 1. Personal Info & Content

Edit **`src/data/portfolioData.js`** — this single file controls all portfolio content:

- `personal` — Name, role, email, socials, bio
- `experience` — Work experience entries
- `education` — Education entries
- `certifications` — Certificate cards with images and logos
- `projects` — Project cards with images, tech stack, links
- `skills` — Skill categories and items
- `stats` — Counter statistics
- `navLinks` — Navigation menu items

### 2. Profile Picture & Favicon

Replace `public/profile.png` with your own photo. It's used in the navbar, hero, and footer.

### 3. Project Images

Add project screenshots to `public/projects/` and reference them in `portfolioData.js`.

### 4. Certificate Images & Logos

- Add certificate images to `public/certificates/`
- Add company logos to `public/logos/`
- Reference them in the `certifications` array in `portfolioData.js`

### 5. Contact Form (EmailJS)

Edit **`src/utils/emailConfig.js`** with your own EmailJS credentials:

```js
export const emailConfig = {
  serviceId: 'your_service_id',
  templateId: 'your_template_id',
  publicKey: 'your_public_key',
}
```

Sign up at [emailjs.com](https://www.emailjs.com/) to get your credentials.

### 6. Colors & Theme

Edit `tailwind.config.js` to change the accent colors (`accent-cyan`, `accent-purple`) and background colors.

---

## Deployment

This project can be deployed to any static hosting:

- **Vercel** — `npm run build` → deploy `dist/`
- **Netlify** — Connect repo, build command: `npm run build`, publish dir: `dist`
- **GitHub Pages** — Use `gh-pages` package or GitHub Actions

---

## License

This project is open source and available for personal use. Feel free to fork and customize it for your own portfolio.

---

**Built with ❤️ by [Dawood Ahmad](https://github.com/dawoodahmad018)**
