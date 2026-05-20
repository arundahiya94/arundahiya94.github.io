# Arun Kumar - AI Engineer Portfolio

A modern, minimalist portfolio showcasing my experience in AI/ML engineering, data science, and software development. Built with Astro and Tailwind CSS.

🔗 **Live Site**: [https://arundahiya94.github.io](https://arundahiya94.github.io)

## About Me

Data & AI Engineer with 7+ years of software engineering experience and an M.Sc. in Applied Data Science. I specialize in building end-to-end ML/AI pipelines, transformer-based NLP models, RAG systems, and production MLOps workflows.

Currently interning at **Mercedes-Benz**, working on multi-agent AI systems with Google Vertex AI and implementing production-ready RAG pipelines.

## Tech Stack

**AI/ML**: Python, PyTorch, TensorFlow, HuggingFace Transformers, LangChain, RAG Pipelines, Vector Databases

**Data Engineering**: GCP BigQuery, AWS, Airflow, dbt, Spark, Docker/Kubernetes

**Development**: Flask, Git/GitHub, CI/CD, Jenkins, REST APIs

## Featured Projects

- **Mental Health Reddit Classifier** - Multi-label classification across 7 psychological dimensions using transformer architectures (82.1% accuracy)
- **FER-2013 Emotion Recognition** - Knowledge distillation achieving 74.3% accuracy with model compression
- **GenAI News Generator** - RAG-powered article generation with LangChain
- **City Bike Share Analytics Pipeline** - Real-time data pipeline with BigQuery, dbt, and Airflow
- **Candidate Predictor API** - ML deployment with Flask and Docker

## Template Credits

This portfolio is built using the excellent [DevPortfolio template](https://github.com/RyanFitzgerald/devportfolio) by Ryan Fitzgerald. The template provides a clean, professional foundation built with:

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tabler Icons](https://tabler.io/icons)** - Icon library
- **TypeScript** - Type-safe configuration

## Local Development

To run this portfolio locally:

```bash
# Clone the repository
git clone https://github.com/arundahiya94/arundahiya94.github.io.git
cd arundahiya94.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## Project Structure

```
arundahiya94.github.io/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          # Astro components
│   │   ├── About.astro      # About section
│   │   ├── Education.astro  # Education section
│   │   ├── Experience.astro # Work experience section
│   │   ├── Footer.astro     # Site footer
│   │   ├── Header.astro     # Navigation header
│   │   ├── Hero.astro       # Hero/intro section
│   │   └── Projects.astro   # Projects showcase
│   ├── pages/
│   │   └── index.astro      # Main page layout
│   ├── styles/
│   │   └── global.css       # Global styles
│   └── config.ts            # Site configuration
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies
└── tailwind.config.js       # Tailwind configuration
```

## Configuration

All portfolio content is managed through `src/config.ts`. Update this single file to customize:

- Personal information (name, title, location)
- Social links (email, GitHub, LinkedIn)
- About section text
- Skills list
- Projects with descriptions and links
- Work experience with bullet points
- Education and achievements

### Example Configuration Structure

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Job Title",
  description: "Brief site description",
  accentColor: "#1d4ed8", // Customize theme color
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
  },
  aboutMe: "Your bio...",
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  projects: [
    {
      name: "Project Name",
      description: "Project description",
      link: "https://github.com/yourusername/project",
      skills: ["Tech1", "Tech2"]
    }
  ],
  // ... experience, education sections
};
```

## Deployment

This portfolio is automatically deployed to GitHub Pages via GitHub Actions. Any push to the `main` branch triggers a rebuild and deployment.

**Deployment workflow**: `.github/workflows/deploy.yml`

The site is live at: **[https://arundahiya94.github.io](https://arundahiya94.github.io)**

### Alternative Deployment Options

- [Netlify](https://docs.astro.build/en/guides/deploy/netlify/)
- [Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
- [Cloudflare Pages](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Render](https://docs.astro.build/en/guides/deploy/render/)

## Connect With Me

- 📧 Email: [dahiya.akd94@gmail.com](mailto:dahiya.akd94@gmail.com)
- 💼 LinkedIn: [arun-kumar-94in](https://linkedin.com/in/arun-kumar-94in)
- 🐙 GitHub: [arundahiya94](https://github.com/arundahiya94)
- 📍 Location: Heidelberg, Germany

## License

This portfolio is based on the MIT-licensed [DevPortfolio template](https://github.com/RyanFitzgerald/devportfolio). All project content and customizations are © 2026 Arun Kumar.

---

**Looking for AI/ML engineering opportunities in Germany and EMEA** 🚀