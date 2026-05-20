export const siteConfig = {
  name: "Arun Kumar",
  title: "AI Engineer | Data Scientist",
  email: "dahiya.akd94@gmail.com",
  github: "arundahiya94",
  linkedin: "arun-kumar-94in",
  location: "Heidelberg, Germany",
  
  about: `Data & AI Engineer with 7+ years of software engineering experience and an M.Sc. in Applied Data Science. I build end-to-end ML/AI pipelines on GCP and AWS — from transformer-based NLP classification to agentic AI systems with RAG and vector databases.

Currently interning at Mercedes-Benz, where I architect multi-agent AI workflows using Google Vertex AI and implement production-ready RAG pipelines. Previously led microservices development and CI/CD automation at Iris Software Solutions, reducing deployment time by 20%.

I specialize in NLP, transformer models (BERT, RoBERTa, DeBERTa), and MLOps. My recent work includes classifying mental health discourse on Reddit with 82% accuracy and building real-time data pipelines for bike-share analytics.`,

  skills: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "HuggingFace Transformers",
    "LangChain",
    "RAG Pipelines",
    "Google Vertex AI",
    "GCP BigQuery",
    "AWS",
    "Docker/Kubernetes",
    "Airflow",
    "dbt",
    "Flask",
    "Git/GitHub",
    "CI/CD",
    "NLP",
    "Vector Databases"
  ],

  projects: [
    {
      name: "Mental Health Reddit Classifier",
      description: "Multi-label classification of mental health discussions across 7 psychological dimensions using 5 transformer architectures (DistilBERT, RoBERTa, DeBERTa, MentalBERT, Mental-RoBERTa). Built end-to-end NLP pipeline with data augmentation, achieving 82.1% accuracy on sentiment and 79% macro F1 with DeBERTa. Key finding: general-purpose models outperform domain-specific ones in low-resource conditions.",
      link: "https://github.com/arundahiya94/mental-health-reddit-classifier",
      skills: ["PyTorch", "HuggingFace Transformers", "NLP", "Data Augmentation", "Multi-Task Learning"]
    },
    {
      name: "FER-2013 Emotion Recognition via Knowledge Distillation",
      description: "Achieved 74.3% accuracy on facial emotion recognition using knowledge distillation (VGG-13 teacher → EfficientNet-B0 student). Implemented RandAugment/Mixup augmentation, AdamW optimization, and OneCycleLR scheduling for efficient model compression while maintaining performance.",
      link: "https://github.com/arundahiya94/fer2013-distillation",
      skills: ["Deep Learning", "Knowledge Distillation", "Computer Vision", "PyTorch", "Model Compression"]
    },
    {
      name: "GenAI News Generator",
      description: "Generative AI-powered newspaper article generator that creates context-aware news articles from uploaded documents or web sources. Built with RAG (Retrieval-Augmented Generation) architecture and LangChain for intelligent content synthesis and fact-grounded generation.",
      link: "https://github.com/arundahiya94/genai-news-generator",
      skills: ["LangChain", "RAG", "LLMs", "Python", "Document Processing"]
    },
    {
      name: "City Bike Share Analytics Pipeline",
      description: "Built near-real-time data pipeline with BigQuery (2-min refresh), curated dbt models, and Airflow orchestration. Delivered operational dashboards surfacing rider demand and station utilization KPIs, reducing station idle time by 15% through data quality checks.",
      link: "https://github.com/arundahiya94", // Update when repo is public
      skills: ["GCP BigQuery", "dbt", "Airflow", "Data Engineering", "Analytics"]
    },
    {
      name: "Candidate Predictor API",
      description: "Machine learning API that predicts candidate hirable status using logistic regression. Deployed with Flask and Docker for scalable, real-time predictions. Features comprehensive data preprocessing, model versioning, and REST endpoint for integration.",
      link: "https://github.com/arundahiya94/candidate-predictor-api",
      skills: ["Flask", "Docker", "ML Deployment", "REST API", "scikit-learn"]
    }
  ],

  experience: [
    {
      company: "Mercedes-Benz",
      title: "AI Engineer Intern",
      dateRange: "Nov 2025 - May 2026",
      bullets: [
        "Architected and deployed multi-agent AI workflows on Google Vertex AI using Google Agent Development Kit (ADK), integrating specialized sub-agents into automated pipelines for the communications department",
        "Implemented RAG pipelines with vector database integration, enabling context-aware AI responses grounded in internal corporate knowledge bases",
        "Drove end-to-end deployment of AI artifacts into production environments, collaborating across engineering teams in Agile Scrum framework"
      ]
    },
    {
      company: "Iris Software Solutions",
      title: "Senior Software Engineer",
      dateRange: "Sep 2021 - Feb 2024",
      bullets: [
        "Led development of RESTful microservices (Java/Python) consumed by analytics and reporting systems, supporting data-driven decision-making",
        "Automated CI/CD pipelines (Jenkins, SonarQube), reducing deployment time by 20% and defect rate by 20%",
        "Mentored junior engineers through structured code reviews, accelerating team delivery velocity by 15%"
      ]
    },
    {
      company: "Tech Mahindra Ltd.",
      title: "Software Engineer",
      dateRange: "Sep 2016 - Sep 2021",
      bullets: [
        "Delivered enterprise SOAP/REST integrations handling 200+ daily transactions, reducing end-to-end latency by 20%",
        "Standardized version control by migrating team from SVN to Git/Jenkins, improving collaboration across 10+ members",
        "Contributed to requirements analysis, system design, and QA for multiple client-facing enterprise integration projects"
      ]
    }
  ],

  education: [
    {
      school: "SRH University Heidelberg",
      degree: "M.Sc. Applied Data Science and Analytics",
      dateRange: "Apr 2024 - Mar 2026",
      achievements: [
        "Thesis: Classification of Mental Health Discourse on Reddit Using Transformer-Based Models",
        "Key coursework: Machine Learning, Deep Learning, NLP, MLOps, Data Engineering"
      ]
    },
    {
      school: "DCRUST Murthal, Haryana",
      degree: "B.E. Computer Science Engineering",
      dateRange: "Jul 2012 - Jun 2016",
      achievements: []
    }
  ]
};