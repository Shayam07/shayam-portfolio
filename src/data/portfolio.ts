export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: 'Agentic AI & LLMs' | 'Machine Learning' | 'Data Analytics & NLP';
  status: 'Completed' | 'In Progress';
  flagship?: boolean;
  problemStatement: string;
  solution: string;
  keyContributions: string[];
  architecture: {
    overview: string;
    diagramSteps: string[];
    methodology: string[];
  };
  technologies: string[];
  githubUrl?: string; // Editable link - set to undefined or empty if not yet public
  liveDemoUrl?: string; // Editable link - set to undefined or empty if not yet deployed
  date: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  duration: string;
  location: string;
  cgpa: string;
  currentStatus: string;
  coreCoursework: string[];
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Virtual Internship' | 'Internship Project' | 'Academic Track';
  description: string;
  bulletPoints: string[];
  techStack: string[];
  isProject?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  distinction?: string;
  credentialUrl?: string; // Configurable link
  category: 'Elite Achievement' | 'Certification' | 'Academic Milestone';
  skillsGained: string[];
  description: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    title: string;
    educationSummary: string;
    institution: string;
    degree: string;
    cgpa: string;
    duration: string;
    location: string;
    phone: string;
    phoneClean: string;
    email: string;
    githubUsername: string;
    githubUrl: string; // Real GitHub profile URL
    linkedinUrl: string; // Real LinkedIn profile URL
    social: {
      github: string;
      linkedin: string;
    };
    availabilityStatus: string;
    resumePath: string;
    heroHeadline: string;
    heroHeadlineAccent: string;
    intro: string;
    heroTags: string[];
  };
  about: {
    introduction: string[];
    academicCard: {
      degree: string;
      institution: string;
      duration: string;
      cgpa: string;
      standing: string;
    };
    focusAreas: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  skills: SkillCategory[];
  projects: Project[];
  education: Education[];
  experience: ExperienceItem[];
  certifications: Certification[];
  github: {
    username: string;
    profileUrl: string;
    featuredRepos: {
      name: string;
      description: string;
      language: string;
      stars: number;
      forks: number;
      topics: string[];
      repoUrl: string;
    }[];
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Shayam Kaarthick N",
    role: "AI Engineer | Machine Learning Developer | AI & DS Student",
    title: "AI Engineer | Machine Learning Developer",
    educationSummary: "B.Tech Artificial Intelligence and Data Science, Sri Krishna College of Engineering and Technology (2025–2029)",
    institution: "Sri Krishna College of Engineering and Technology",
    degree: "B.Tech Artificial Intelligence and Data Science",
    cgpa: "9.65 / 10",
    duration: "2025 – 2029",
    location: "Coimbatore, Tamil Nadu, India",
    phone: "+91 7339677732",
    phoneClean: "+917339677732",
    email: "shayamat10@gmail.com",
    githubUsername: "Shayam07",
    // Real social profiles:
    githubUrl: "https://github.com/Shayam07",
    linkedinUrl: "https://www.linkedin.com/in/shayam-kaarthick-n-102478379/",
    social: {
      github: "https://github.com/Shayam07",
      linkedin: "https://www.linkedin.com/in/shayam-kaarthick-n-102478379/",
    },
    availabilityStatus: "Available for AI & ML Opportunities",
    resumePath: "/resume.pdf",
    heroHeadline: "Engineering Intelligence.",
    heroHeadlineAccent: "Building AI That Matters.",
    intro: "I'm Shayam Kaarthick, an Artificial Intelligence and Data Science student passionate about building intelligent systems through Machine Learning, Generative AI and Agentic AI. I enjoy transforming complex problems into practical AI solutions, from collaborative multi-agent systems to predictive modeling and intelligent applications.",
    heroTags: ["AI Engineer", "Machine Learning", "Generative AI", "Agentic AI"]
  },

  about: {
    introduction: [
      "I am currently pursuing a B.Tech in Artificial Intelligence and Data Science at Sri Krishna College of Engineering and Technology (2025–2029), maintaining a 9.65 / 10 CGPA.",
      "My passion lies in applied artificial intelligence, machine learning, and intelligent automation. I have practical experience developing end-to-end ML pipelines, deep learning CNN classifiers, and predictive analytics systems.",
      "I am actively exploring advanced generative AI, LLM integration, multi-agent architectures, and agent orchestration with LangGraph to build robust, practical AI applications that solve real-world problems."
    ],
    academicCard: {
      degree: "B.Tech – Artificial Intelligence and Data Science",
      institution: "Sri Krishna College of Engineering and Technology",
      duration: "2025 – 2029",
      cgpa: "9.65 / 10",
      standing: "Academic Topper & Dedicated AI Researcher"
    },
    focusAreas: [
      {
        title: "Agentic AI & LangGraph",
        description: "Architecting multi-agent collaboration frameworks, shared state transitions, and deterministic hand-off workflows with LangGraph and LLM APIs.",
        icon: "Bot"
      },
      {
        title: "Machine Learning & Deep Learning",
        description: "Building predictive regression models, CNN image classifiers, feature engineering pipelines, and rigorous evaluation methodologies.",
        icon: "Brain"
      },
      {
        title: "Data Analytics & Insight Extraction",
        description: "Transforming raw transactional and telemetry data into actionable intelligence with SQL, Pandas, NumPy, and statistical visualizations.",
        icon: "BarChart3"
      },
      {
        title: "Scalable AI Application Engineering",
        description: "Deploying intelligent services using FastAPI, robust structured prompt parsing, and clean modular codebases designed for production.",
        icon: "Cpu"
      }
    ]
  },

  experience: [
    {
      id: "infosys-springboard",
      role: "Virtual Intern – Artificial Intelligence & Machine Learning Track",
      organization: "Infosys Springboard Virtual Internship 7.0",
      period: "2026 – Present",
      location: "Virtual / Remote Mentorship",
      type: "Virtual Internship",
      description: "Currently participating in Infosys Springboard 7.0, a structured virtual internship focused on AI and ML with real-world industry applications.",
      bulletPoints: [
        "Building and evaluating ML models covering regression, classification and neural networks on structured datasets under Infosys professional mentorship.",
        "Developing end-to-end workflows including data cleaning, imputation, feature engineering, and cross-validation.",
        "Gaining exposure to industry-grade model assessment methodologies, hyperparameter tuning, and performance benchmarking."
      ],
      techStack: ["Python", "Machine Learning", "Neural Networks", "Scikit-learn", "Data Preprocessing", "Model Evaluation"],
      isProject: false
    },
    {
      id: "career-ai-project",
      role: "Career AI – AI-Powered Career Guidance (Internship Project)",
      organization: "Infosys Springboard Virtual Internship 7.0",
      period: "2026",
      location: "Project Track",
      type: "Internship Project",
      description: "Built an LLM-powered career guidance application that analyzes a user's skills and goals to generate personalized career recommendations and a skill-gap learning roadmap.",
      bulletPoints: [
        "Designed and iterated on prompts, integrated the LLM API and parsed responses into structured output for clear, consistent results.",
        "Formulated skill-gap algorithms mapping user background against industry job competencies to produce actionable step-by-step milestones.",
        "Engineered reliable JSON-schema parsing pipelines to guarantee deterministic responses without hallucination."
      ],
      techStack: ["Python", "LLM APIs", "Prompt Engineering", "Structured Output Parsing", "FastAPI"],
      isProject: true
    }
  ],

  projects: [
    {
      id: "orca-marine-agents",
      title: "ORCA – Marine Ecosystem Reasoning with Collaborative Agents",
      shortDescription: "A multi-agent agentic AI system in which specialized autonomous agents collaborate to reason over marine ecosystem data and produce explainable, evidence-backed insights.",
      category: "Agentic AI & LLMs",
      status: "In Progress",
      flagship: true,
      date: "2026 – Present",
      problemStatement: "Marine ecosystem monitoring relies on disparate, high-volume oceanographic sensor feeds, environmental telemetry, and ecological observations. Conventional static models fail to correlate interdisciplinary signals, lacking the reasoning depth needed to detect subtle ecological anomalies in real time.",
      solution: "Engineered ORCA, a collaborative multi-agent architecture where role-specialized autonomous agents coordinate over a LangGraph-directed state graph to ingest marine telemetry, assess ecological health, and synthesize structured diagnostic reports with explainable evidence.",
      keyContributions: [
        "Implemented specialized agents for data ingestion, ecosystem analysis and report synthesis.",
        "Developed a LangGraph orchestration layer managing task hand-offs and shared state across the agent mesh.",
        "Integrated agents with a FastAPI backend for high-throughput, asynchronous client interactions.",
        "Built a marine-data processing pipeline involving cleaning, transformation and feature extraction on dynamic environmental telemetry."
      ],
      architecture: {
        overview: "LangGraph-driven cyclical agent mesh with state-passing contracts, telemetry ingestion queues, and FastAPI service integration.",
        diagramSteps: [
          "1. Telemetry Ingestion Agent: Ingests oceanographic parameters (temperature, salinity, pH, acoustic features).",
          "2. Data Processing Pipeline: Cleans, transforms, normalizes, and extracts statistical anomalies.",
          "3. Ecosystem Reasoning Agent: Analyzes inter-variable correlations and detects biological stress patterns.",
          "4. LangGraph Orchestrator: Manages task hand-offs, conditional routing, and state convergence.",
          "5. Synthesis Agent & FastAPI: Compiles structured, evidence-backed ecological insights for researchers."
        ],
        methodology: [
          "StateGraph orchestration in LangGraph with validated schema transitions.",
          "Specialized agent roles with deterministic prompt envelopes and tool augmentation.",
          "Asynchronous FastAPI endpoints handling streaming telemetry and user query dispatches.",
          "Vectorized feature transformation pipelines utilizing Pandas and NumPy."
        ]
      },
      technologies: ["Python", "LangGraph", "FastAPI", "LLM APIs", "Pandas", "NumPy"],
      githubUrl: "https://github.com/Shayam07/ORCA-Marine_Ecosystem_Collabrative_Agents",
      liveDemoUrl: undefined
    },
    {
      id: "career-ai",
      title: "Career AI – AI-Powered Career Guidance",
      shortDescription: "An LLM-powered career guidance application that analyzes user skills and career goals, generates personalized recommendations and provides skill-gap learning roadmaps.",
      category: "Agentic AI & LLMs",
      status: "Completed",
      flagship: false,
      date: "2026",
      problemStatement: "Students and transitioning professionals struggle to navigate fragmented career paths, identify exact technical skill gaps, and acquire relevant competencies in a structured, actionable order.",
      solution: "Developed Career AI, an intelligent advisor that takes student profiles, existing competencies, and aspirations, leveraging LLMs with carefully tuned prompt chains to deliver personalized role matches and personalized skill-gap roadmaps.",
      keyContributions: [
        "LLM integration with iterative prompt engineering for reliable domain expertise.",
        "Structured response parsing into validated JSON models ensuring deterministic UI presentation.",
        "Personalized career recommendations based on multi-factor skill overlap and career trajectory modeling."
      ],
      architecture: {
        overview: "User profile input -> Prompt generation engine -> LLM API inference -> Structured output validation -> Roadmap generation.",
        diagramSteps: [
          "1. User Input Extraction: Captures skills, educational background, and target career domains.",
          "2. Prompt Construction: Dynamically formats evaluation guidelines and JSON output constraints.",
          "3. LLM API Invocation: Runs reasoning queries through high-fidelity model endpoints.",
          "4. Response Schema Parsing: Parses and validates the generated roadmap into discrete study milestones."
        ],
        methodology: [
          "Few-shot prompt templates enforcing strict JSON output schemas.",
          "Skill-gap heuristic mapping comparing user inputs against industry skill ontologies.",
          "Error-handling wrappers ensuring fallback parsing on irregular responses."
        ]
      },
      technologies: ["Python", "LLM APIs", "Prompt Engineering", "JSON Parsing"],
      githubUrl: "https://github.com/vaishnavithamma/careerai",
      liveDemoUrl: undefined
    },
    {
      id: "cnn-image-classifier",
      title: "Deep Learning-Based Image Classification",
      shortDescription: "Developed and trained a CNN image classifier with data preprocessing and augmentation. Evaluated performance on a held-out test set using TensorFlow/Keras.",
      category: "Machine Learning",
      status: "Completed",
      flagship: false,
      date: "2025 – 2026",
      problemStatement: "Image classification in diverse visual settings faces severe challenges with spatial variance, lighting fluctuations, and overfitting when training on limited dataset samples.",
      solution: "Built a deep Convolutional Neural Network (CNN) featuring stacked convolutional, batch normalization, and dropout layers combined with extensive real-time data augmentation to achieve robust generalization on unseen images.",
      keyContributions: [
        "Designed and trained deep CNN architecture with modular feature extraction blocks.",
        "Applied data preprocessing and real-time image augmentation (rotations, flips, zooming).",
        "Evaluated classification performance and convergence on a held-out test set using TensorFlow and Keras."
      ],
      architecture: {
        overview: "Image ingestion -> Data augmentation pipeline -> Convolutional & Pooling blocks -> Dense classification layers -> Softmax output.",
        diagramSteps: [
          "1. Image Preprocessing: Rescaling, normalization, and dimensional alignment.",
          "2. Data Augmentation: Real-time image shifts, zooms, and flips to mitigate overfitting.",
          "3. Feature Extraction: Convolutional layers with ReLU activation, MaxPooling, and BatchNormalization.",
          "4. Classification Head: Fully connected Dense layers with Dropout regularization.",
          "5. Evaluation: Confusion matrix, Precision/Recall, and Loss/Accuracy curves."
        ],
        methodology: [
          "Categorical cross-entropy loss optimization with Adam optimizer.",
          "Early stopping and model checkpointing based on validation loss.",
          "Visualization of training curves and confusion matrix using Matplotlib."
        ]
      },
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/Shayam07/Wildlife-_Population_AI",
      liveDemoUrl: undefined
    },
    {
      id: "student-performance-prediction",
      title: "Student Performance Prediction Using Machine Learning",
      shortDescription: "Built regression-based predictive models to analyze student academic outcomes using feature engineering and performance evaluation.",
      category: "Machine Learning",
      status: "Completed",
      flagship: false,
      date: "2025",
      problemStatement: "Educational institutions need early detection mechanisms to identify students needing academic interventions before final grading periods.",
      solution: "Engineered regression-based predictive models analyzing historical academic metrics, study habits, and demographic attributes, applying rigorous feature selection and cross-validation.",
      keyContributions: [
        "Built predictive regression models to forecast final scores based on intermediate performance indicators.",
        "Conducted extensive feature engineering, multicollinearity inspection, and outlier treatment.",
        "Evaluated models across RMSE, MAE, and R² scores with standard Scikit-learn pipelines."
      ],
      architecture: {
        overview: "Dataset ingestion -> Exploratory data analysis -> Feature selection & scaling -> Regression modeling -> Metric cross-validation.",
        diagramSteps: [
          "1. Data Cleaning: Handled missing values, encoded categorical variables, and normalized numeric attributes.",
          "2. Feature Engineering: Created composite study-habit indices and examined correlation heatmaps.",
          "3. Model Training: Fitted Linear Regression, Ridge, Lasso, and Random Forest Regressors.",
          "4. Validation: 5-fold cross-validation evaluated over RMSE, MAE, and R² metrics."
        ],
        methodology: [
          "Regularized regression techniques (Lasso/Ridge) to prevent overfitting.",
          "Variance Inflation Factor (VIF) filtering to eliminate multicollinear predictors.",
          "Residual analysis to verify homoscedasticity assumptions."
        ]
      },
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/Shayam07/Predictive-Modeling-ML",
      liveDemoUrl: undefined
    },
    {
      id: "retail-sales-analysis",
      title: "Retail Sales Data Analysis",
      shortDescription: "Performed exploratory data analysis to uncover sales trends and customer behavior patterns. Generated insights using statistical analysis and visualizations.",
      category: "Data Analytics & NLP",
      status: "Completed",
      flagship: false,
      date: "2025",
      problemStatement: "Retail businesses accumulate vast transactional records but lack actionable visibility into revenue seasonality, purchasing cohorts, and product category trends.",
      solution: "Executed comprehensive exploratory data analysis (EDA) combining SQL queries and Pandas dataframes to isolate purchasing frequency, customer segmentation metrics, and revenue growth drivers.",
      keyContributions: [
        "Extracted, joined, and cleaned multi-table transaction datasets using SQL queries and Pandas.",
        "Identified temporal sales spikes, month-over-month revenue trends, and basket composition patterns.",
        "Created publication-quality statistical visualizations using Seaborn and Matplotlib."
      ],
      architecture: {
        overview: "Relational database extraction -> Data transformation & aggregation -> Statistical hypothesis testing -> Visual report generation.",
        diagramSteps: [
          "1. SQL Extraction: Structured queries aggregating revenue by store region and product category.",
          "2. Data Cleansing: Removed null records, duplicate transactions, and reconciled currency formats.",
          "3. Descriptive Analytics: Computed central tendencies, percentile ranges, and year-over-year growth.",
          "4. Visualization: Plotted distribution curves, correlation heatmaps, and categorical bar charts."
        ],
        methodology: [
          "Cohort analysis grouping customers by initial transaction period.",
          "RFM (Recency, Frequency, Monetary) segmentation methodology.",
          "Visual communication design with high contrast, legible Seaborn plots."
        ]
      },
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "SQL"],
      githubUrl: "https://github.com/Shayam07/Exploratory-Data-Analysis",
      liveDemoUrl: undefined
    },
    {
      id: "movie-recommendation-system",
      title: "Movie Recommendation System",
      shortDescription: "Built a content-based recommendation engine using cosine similarity on TF-IDF vectors to deliver personalized movie suggestions.",
      category: "Data Analytics & NLP",
      status: "Completed",
      flagship: false,
      date: "2025",
      problemStatement: "Digital streaming platforms with tens of thousands of media titles require low-latency content discovery mechanisms that match user tastes without requiring heavy collaborative filtering histories.",
      solution: "Engineered a content-based recommendation engine converting textual metadata, movie genres, and plot overviews into TF-IDF vector embeddings, retrieving top matches via vectorized cosine similarity.",
      keyContributions: [
        "Processed metadata, cast tags, genres, and overviews using NLP tokenization and stop-word removal.",
        "Computed pairwise cosine similarity matrices across TF-IDF feature vectors for real-time retrieval.",
        "Built a modular inference function delivering the top-N most semantically similar movie titles."
      ],
      architecture: {
        overview: "Movie metadata ingestion -> Text preprocessing & TF-IDF vectorization -> Cosine similarity matrix -> Rank-ordered recommendation delivery.",
        diagramSteps: [
          "1. Text Ingestion: Merged movie summaries, genres, and keywords into a unified corpus.",
          "2. NLP Tokenization: Lowercasing, punctuation stripping, stemming, and stop-word filtering.",
          "3. Vectorization: Generated TF-IDF feature matrices reflecting term significance.",
          "4. Similarity Computation: Calculated pairwise cosine angle distances between titles.",
          "5. Retrieval: Queried target movie index to return ranked nearest-neighbor recommendations."
        ],
        methodology: [
          "TF-IDF (Term Frequency-Inverse Document Frequency) weighted scoring.",
          "High-dimensional cosine metric calculation for semantic similarity.",
          "Vectorized NumPy matrix indexing for instant response times."
        ]
      },
      technologies: ["Python", "Scikit-learn", "Pandas", "NLP"],
      githubUrl: "https://github.com/Shayam07/netflix-data-analysis",
      liveDemoUrl: undefined
    }
  ],

  skills: [
    {
      id: "languages",
      title: "Programming Languages",
      description: "Core programming languages for algorithmic systems, backend services, and database queries.",
      iconName: "Code2",
      skills: ["Python", "C++", "SQL"]
    },
    {
      id: "ml",
      title: "Machine Learning",
      description: "Supervised and unsupervised modeling, statistical learning, and predictive techniques.",
      iconName: "BrainCircuit",
      skills: ["Regression", "Classification", "Clustering", "Feature Engineering", "Model Evaluation", "Data Preprocessing"]
    },
    {
      id: "genai",
      title: "Generative & Agentic AI",
      description: "Modern language models, agent coordination frameworks, and prompt design.",
      iconName: "Sparkles",
      skills: ["LLM Integration", "Prompt Engineering", "Multi-Agent Systems", "Agent Orchestration (LangGraph)"]
    },
    {
      id: "frameworks",
      title: "Libraries & Frameworks",
      description: "Scientific computing, machine learning, deep learning, and API backends.",
      iconName: "Cpu",
      skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "Keras", "FastAPI"]
    },
    {
      id: "tools",
      title: "Tools & Databases",
      description: "Database engines, version control, code editors, and data science notebooks.",
      iconName: "Terminal",
      skills: ["MySQL", "SQL Server", "Git", "GitHub", "Jupyter Notebook", "VS Code"]
    }
  ],

  education: [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      field: "Artificial Intelligence and Data Science",
      institution: "Sri Krishna College of Engineering and Technology",
      duration: "2025 – 2029",
      location: "Coimbatore, Tamil Nadu, India",
      cgpa: "9.65 / 10",
      currentStatus: "Undergraduate Student (First Year)",
      coreCoursework: [
        "Data Structures and Algorithms",
        "Linear Algebra & Multivariable Calculus",
        "Probability & Mathematical Statistics",
        "Object-Oriented Programming (Python / C++)",
        "Database Management Systems & SQL",
        "Foundations of Machine Learning & Neural Networks"
      ],
      highlights: [
        "Achieved a 9.65 / 10 CGPA through consistent academic rigor.",
        "Actively developing applied AI projects and multi-agent systems.",
        "NPTEL Top 5% nationwide rank with Elite Topper certification."
      ]
    }
  ],

  certifications: [
    {
      id: "nptel-python",
      title: "NPTEL – Python for Data Science",
      issuer: "IITs / IISc (NPTEL)",
      issueDate: "2025",
      distinction: "Ranked in Top 5% Nationwide • Elite Topper Badge",
      credentialUrl: undefined, // Configurable URL - add link when desired
      category: "Elite Achievement",
      skillsGained: ["Python", "Data Science", "NumPy", "Pandas", "Statistical Analysis"],
      description: "Ranked in the Top 5% nationwide among thousands of participants across India. Awarded the prestigious Elite Topper Badge by IITs/IISc for exceptional performance in advanced Python and data analysis."
    },
    {
      id: "ai-for-everyone",
      title: "Coursera – AI for Everyone",
      issuer: "DeepLearning.AI (Andrew Ng)",
      issueDate: "2025",
      distinction: "Foundational AI Strategy & Neural Networks",
      credentialUrl: undefined, // Configurable URL
      category: "Certification",
      skillsGained: ["AI Strategy", "Machine Learning Workflows", "Neural Networks", "Data Ethics"],
      description: "Completed Andrew Ng's foundational AI course covering machine learning concepts, neural network capabilities, AI project lifecycles, and strategic organizational application of AI."
    },
    {
      id: "ml-with-python",
      title: "Coursera – Machine Learning with Python",
      issuer: "IBM / Coursera",
      issueDate: "2025",
      distinction: "Supervised & Unsupervised Machine Learning",
      credentialUrl: undefined, // Configurable URL
      category: "Certification",
      skillsGained: ["Regression", "Classification", "Clustering", "Scikit-learn", "Model Evaluation"],
      description: "Comprehensive hands-on training in machine learning algorithms using Python. Implemented regression, classification, decision trees, k-means clustering, and cross-validation pipelines."
    },
    {
      id: "academic-cgpa",
      title: "Academic Excellence – CGPA 9.65 / 10",
      issuer: "Sri Krishna College of Engineering and Technology",
      issueDate: "2025 – 2029",
      distinction: "B.Tech Artificial Intelligence and Data Science",
      credentialUrl: undefined,
      category: "Academic Milestone",
      skillsGained: ["Mathematical Foundations", "Algorithms", "AI & Data Science Coursework"],
      description: "Demonstrated consistent academic excellence in the Department of Artificial Intelligence and Data Science, achieving an outstanding 9.65 / 10 CGPA."
    }
  ],

  github: {
    username: "Shayam07",
    profileUrl: "https://github.com/Shayam07",
    featuredRepos: [
      {
        name: "ORCA-Marine_Ecosystem_Collabrative_Agents",
        description: "Flagship multi-agent collaborative reasoning system with LangGraph orchestration, FastAPI endpoints, and autonomous agents for marine ecosystem intelligence.",
        language: "Python",
        stars: 14,
        forks: 4,
        topics: ["langgraph", "agentic-ai", "fastapi", "multi-agent-system", "python"],
        repoUrl: "https://github.com/Shayam07/ORCA-Marine_Ecosystem_Collabrative_Agents"
      },
      {
        name: "careerai",
        description: "Infosys Springboard 7.0 internship project: LLM-powered career guidance and personalized skill-gap learning roadmap generator.",
        language: "Python",
        stars: 9,
        forks: 3,
        topics: ["llm-api", "prompt-engineering", "career-guidance", "python"],
        repoUrl: "https://github.com/vaishnavithamma/careerai"
      },
      {
        name: "Wildlife-_Population_AI",
        description: "Convolutional Neural Network (CNN) deep learning image classifier with data preprocessing and augmentation in TensorFlow/Keras.",
        language: "Python",
        stars: 11,
        forks: 2,
        topics: ["deep-learning", "cnn", "tensorflow", "keras", "computer-vision"],
        repoUrl: "https://github.com/Shayam07/Wildlife-_Population_AI"
      },
      {
        name: "Predictive-Modeling-ML",
        description: "Supervised machine learning predictive models and regression pipelines analyzing student academic performance with Scikit-learn.",
        language: "Python",
        stars: 8,
        forks: 2,
        topics: ["machine-learning", "regression", "scikit-learn", "data-science", "pandas"],
        repoUrl: "https://github.com/Shayam07/Predictive-Modeling-ML"
      },
      {
        name: "Exploratory-Data-Analysis",
        description: "Statistical exploratory data analysis pipelines, feature engineering, and distribution analysis with Pandas and Seaborn.",
        language: "Jupyter Notebook",
        stars: 5,
        forks: 1,
        topics: ["data-analytics", "eda", "pandas", "matplotlib", "seaborn"],
        repoUrl: "https://github.com/Shayam07/Exploratory-Data-Analysis"
      },
      {
        name: "netflix-data-analysis",
        description: "Content clustering, text metadata extraction, and descriptive analytics across streaming media catalogs using Scikit-learn and NLP.",
        language: "Python",
        stars: 6,
        forks: 1,
        topics: ["nlp", "data-analytics", "clustering", "python", "scikit-learn"],
        repoUrl: "https://github.com/Shayam07/netflix-data-analysis"
      }
    ]
  }
};

export const portfolio = {
  name: "Shayam Kaarthick N",
  email: "shayamat10@gmail.com",
  phone: "+917339677732",
  social: {
    github: "https://github.com/Shayam07",
    linkedin: "https://www.linkedin.com/in/shayam-kaarthick-n-102478379/",
  },
};
