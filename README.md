# Naveed Latif · Software Engineer & DevOps Portfolio

A production-grade, editorial portfolio website showcasing full-stack engineering, cloud architecture, devops pipelines, and agentic AI systems. Built with Next.js 16 (Turbopack), TypeScript, Tailwind CSS, and Framer Motion.

---

## ✦ Key Highlights & Architecture

- **Editorial Aesthetic & Typography**: Clean typographic layout combining serif headlines (`Playfair Display` / `Cinzel`), monospace data registers (`JetBrains Mono`), and warm parchment tones.
- **Interactive Terminal**: An interactive command-line sandbox built directly into the hero section with commands like `help`, `skills`, `projects`, `contact`, `clear`, and `whoami`.
- **Featured Projects & Architecture Archive**:
  - Highlighting production-ready applications like **Pingly**, **Jobify**, **WorkStudio**, **K72**, and **Shopwise**.
  - Project architecture modal for deep-dive technical overviews, tech badges, and source links.
  - Graceful fallback modal with direct repository links for projects currently undergoing deployment maintenance.
- **Specialized Services**: Focused coverage of Web Development, Database Architecture, DevOps & Cloud Deployment, and Agentic AI.
- **Technical Skills Matrix**: Filterable registry spanning Frontend, Backend, DevOps & Cloud, and Databases with detailed category breakdowns.
- **Career Timeline & Milestones**: Interactive chronological record of professional experience and software achievements.
- **Working Contact Channel**:
  - Real-time contact form powered by **Web3Forms**.
  - Direct 1-click **WhatsApp** messaging integration (`+92 310 2331695`).
  - GitHub, LinkedIn, and email channels.
- **Responsive & Accessible**: Optimized for seamless viewing across smartphones, tablets, and desktop displays.

---

## 🛠 Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Core** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), Custom Vanilla CSS Variables & Design System |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/), Custom SVG Developer Icons |
| **Contact Delivery** | [Web3Forms API](https://web3forms.com/) |

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.18+ recommended).

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/NaveedLatiff/np.git
cd np
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root of the project to enable the contact form:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

*(Get your free access key at [web3forms.com](https://web3forms.com/))*

### 4. Development Server

Start the Turbopack local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build

To test the production build:

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
np/
├── app/
│   ├── components/
│   │   ├── About.tsx          # Background, biography, and engineering philosophy
│   │   ├── Contact.tsx        # Contact form (Web3Forms) and direct channels (WhatsApp, Email)
│   │   ├── Hero.tsx           # Headline, status ledger, and interactive terminal
│   │   ├── Journey.tsx        # Career milestone timeline
│   │   ├── Navbar.tsx         # Navigation header and live status ticker
│   │   ├── Projects.tsx       # Featured project, archive list, and detail/fallback modals
│   │   ├── Services.tsx       # 4 core engineering domains
│   │   └── Skills.tsx         # Technical stack grid and modal
│   ├── lib/
│   │   ├── data.ts            # Project, skill, and career dataset
│   │   └── icons.tsx          # SVG brand icons (GitHub, LinkedIn, WhatsApp, etc.)
│   ├── globals.css            # Editorial palette tokens, typography rules, responsive bounds
│   ├── layout.tsx             # Root HTML layout and metadata
│   └── page.tsx               # Main page assemblage
├── .gitignore                 # Protected env, dependencies, and build outputs
├── package.json
└── README.md
```

---

## 📬 Contact & Connect

- **GitHub**: [@NaveedLatiff](https://github.com/NaveedLatiff)
- **LinkedIn**: [Naveed Latif](https://www.linkedin.com/in/naveedlatif526)
- **Email**: [naveedlatif526@gmail.com](mailto:naveedlatif526@gmail.com)
- **WhatsApp**: [+92 310 2331695](https://wa.me/923102331695)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
