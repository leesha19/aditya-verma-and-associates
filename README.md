# Verma Law Associates

Professional law firm website — React + Create React App.

## Quick Start

```bash
npm install
npm start
```

Opens at **http://localhost:3000**

## Build for Production

```bash
npm run build
```

---

## Project Structure

```
src/
├── index.js                    # CRA entry point
├── App.js                      # Root: Navbar + HomePage + Footer
│
├── constants/
│   ├── theme.js                # Colors & fonts (single source of truth)
│   └── data.js                 # All content: names, bios, phones, team
│
├── hooks/
│   ├── useInView.js            # Scroll-triggered animation
│   ├── useScrolled.js          # Navbar transparency on scroll
│   └── useForm.js              # Form state & submission
│
├── utils/
│   └── helpers.js              # scrollToSection(), fadeUpStyle()
│
├── styles/
│   └── global.css              # Resets, fonts, keyframes, responsive
│
├── components/
│   ├── layout/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   └── ui/
│       ├── Avatar.js
│       ├── ScaleIcon.js
│       ├── GoldButton.js
│       ├── Tag.js
│       ├── SectionHeader.js
│       ├── ProfileCard.js      # Reused for Patron + Aditya Verma
│       ├── CoreTeamCard.js
│       └── ContactCard.js
│
├── sections/
│   ├── HeroSection.js
│   ├── AboutSection.js
│   ├── AdityaSection.js
│   ├── CoreTeamSection.js
│   ├── InternshipSection.js
│   └── ContactSection.js
│
└── pages/
    └── HomePage.js             # Composes all sections
```

## Updating Content

All names, phone numbers, bios, and team data are in one file:

```
src/constants/data.js
```

Edit there and changes reflect everywhere automatically.
