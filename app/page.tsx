export default function Home() {
  const expertise = {
    ai: [
      "Machine Learning",
      "Deep Learning",
      "CNN Architectures",
      "Natural Language Processing",
      "Semantic Search",
      "Computer Vision",
      "RAG Systems",
      "LLM Applications",
    ],

    analytics: [
      "Exploratory Data Analysis",
      "Predictive Analytics",
      "Data Visualization",
      "Feature Engineering",
      "Regression Models",
      "Time Series Forecasting",
    ],

    infrastructure: [
      "LangChain",
      "Qdrant",
      "Weaviate",
      "FastAPI",
      "Streamlit",
      "TensorFlow",
      "GitHub",
      "Docker",
    ],
  };

  const projects = [
    {
      title: "CLARSE-base Compliance Assistant",
      stack:
        "LangChain • Qdrant • Semantic Search • LLM APIs • Streamlit",
      desc:
        "Built an AI-powered compliance intelligence assistant capable of clause-aware semantic retrieval, contextual response generation, and intelligent compliance document analysis using embeddings and vector search pipelines.",
      github: "https://github.com/ShiniyaBenny",
    },

    {
      title: "Enhanced Chat-with-Documents",
      stack:
        "Embeddings • NLP • Semantic Retrieval • Streamlit",
      desc:
        "Developed an intelligent document interaction platform enabling semantic search, contextual summarization, sentiment analysis, and AI-assisted question answering across uploaded enterprise documents.",
      github: "https://github.com/ShiniyaBenny",
    },

    {
      title: "SignBot",
      stack:
        "OpenCV • SVM • Gemini API • Computer Vision",
      desc:
        "Created a real-time multimodal AI communication assistant for sign language recognition with contextual text generation and speech output capabilities.",
      github: "https://github.com/ShiniyaBenny/Sign-Language-detection",
    },

    {
      title: "Multi-Disease Detection Framework",
      stack:
        "TensorFlow • CNN • Deep Learning • Medical AI",
      desc:
        "Designed a deep learning-based healthcare AI framework for detecting Alzheimer’s disease, lung cancer, pneumonia, and breast cancer using CNN architectures and medical imaging data.",
      github: "https://github.com/ShiniyaBenny",
    },

    {
      title: "Document QA System",
      stack:
        "FastAPI • Weaviate • NLP • Vector Search",
      desc:
        "Built a semantic document question-answering system enabling intelligent retrieval and contextual AI-assisted responses over large text datasets.",
      github: "https://github.com/ShiniyaBenny/debyez-ai-document-qa",
    },

    {
      title: "Job Classification System",
      stack:
        "TF-IDF • KMeans • NLP • Machine Learning",
      desc:
        "Developed a machine learning system for categorizing job postings based on required skills using clustering algorithms and NLP preprocessing techniques.",
      github: "https://github.com/ShiniyaBenny/job-clustering-system",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-bold tracking-wide">
            Shiniya Benny
          </h1>

          <div className="hidden md:flex gap-10 text-zinc-400">

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#expertise" className="hover:text-white transition">
              Expertise
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section
        id="about"
        className="relative overflow-hidden px-8 py-32 border-b border-zinc-900"
      >

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px]" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT */}
          <div>

            <div className="inline-block px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 tracking-[0.25em] text-sm uppercase">
              AI • NLP • Deep Learning
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight mt-8">
              Building Intelligent
              <br />
              AI Systems
            </h1>

            <p className="text-zinc-400 text-xl leading-relaxed mt-10 max-w-2xl">
              MSc Data Analytics and Computational Science student focused on
              developing practical AI systems using NLP, semantic retrieval,
              deep learning, vector databases, and intelligent document
              processing pipelines.
            </p>

            <p className="text-zinc-500 text-lg leading-relaxed mt-8 max-w-2xl">
              Passionate about building AI-powered compliance assistants,
              healthcare deep learning frameworks, document intelligence systems,
              and multimodal AI applications using modern machine learning
              infrastructure and LLM technologies.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="https://github.com/ShiniyaBenny"
                target="_blank"
                className="px-7 py-4 bg-white text-black rounded-2xl font-semibold hover:opacity-90 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shiniya-benny-523846250"
                target="_blank"
                className="px-7 py-4 border border-zinc-700 rounded-2xl hover:bg-zinc-900 transition"
              >
                LinkedIn
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-7 py-4 border border-cyan-500 rounded-2xl hover:bg-cyan-500/10 transition"
              >
                Download Resume
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl">

                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* EXPERTISE */}
      <section
        id="expertise"
        className="px-8 py-28 border-b border-zinc-900"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold mb-20">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* AI */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-10">

              <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
                AI & Machine Learning
              </h3>

              <div className="flex flex-wrap gap-3">

                {expertise.ai.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 bg-black border border-zinc-700 rounded-xl"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* Analytics */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-10">

              <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
                Data Analytics
              </h3>

              <div className="flex flex-wrap gap-3">

                {expertise.analytics.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 bg-black border border-zinc-700 rounded-xl"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* INFRA */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-10">

              <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
                AI Infrastructure
              </h3>

              <div className="flex flex-wrap gap-3">

                {expertise.infrastructure.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 bg-black border border-zinc-700 rounded-xl"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="px-8 py-28 border-b border-zinc-900"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold mb-20">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {projects.map((project, index) => (

              <div
                key={index}
                className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-10 hover:border-cyan-500 transition duration-300"
              >

                <h3 className="text-3xl font-semibold leading-tight">
                  {project.title}
                </h3>

                <p className="text-cyan-400 mt-5">
                  {project.stack}
                </p>

                <p className="text-zinc-400 leading-relaxed text-lg mt-8">
                  {project.desc}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  className="inline-block mt-10 px-5 py-3 rounded-2xl border border-zinc-700 hover:bg-zinc-800 transition"
                >
                  View Project
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="px-8 py-28 border-b border-zinc-900"
      >

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-20">
            Experience
          </h2>

          <div className="space-y-10">

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-10">

              <h3 className="text-3xl font-semibold">
                Data Analytics Intern
              </h3>

              <p className="text-cyan-400 mt-3">
                Oasis Infobite
              </p>

              <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
                Worked on exploratory data analysis, customer behavior analysis,
                regression-based prediction systems, data preprocessing,
                visualization, and machine learning workflows using Python.
              </p>

            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-10">

              <h3 className="text-3xl font-semibold">
                Machine Learning Intern
              </h3>

              <p className="text-cyan-400 mt-3">
                CodSoft
              </p>

              <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
                Developed NLP-based chatbot systems, machine learning models,
                classification projects, and AI workflows focused on practical
                problem solving and intelligent automation.
              </p>

            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-10">

              <h3 className="text-3xl font-semibold">
                Professional Experience
              </h3>

              <p className="text-cyan-400 mt-3">
                Sutherland Global Services • SBI Life Insurance
              </p>

              <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
                Experience across customer support, business operations,
                communication workflows, and client interaction with strong
                focus on problem-solving, adaptability, and operational
                efficiency.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CERTIFICATIONS */}
      <section className="px-8 py-28 border-b border-zinc-900">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-20">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Deep Learning Specialization — Coursera",
              "Machine Learning with Python — IBM",
              "Generative AI for Beginners — Google Cloud",
              "Preparing Data for Analysis with Microsoft Excel — Coursera",
            ].map((cert) => (

              <div
                key={cert}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6"
              >
                {cert}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-8 py-32"
      >

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-6xl font-bold">
            Open for AI/ML Opportunities
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed mt-10">
            Interested in AI Engineering, NLP, Deep Learning,
            semantic retrieval systems, and intelligent document technologies.
          </p>

          <div className="flex justify-center gap-6 mt-14 flex-wrap">

            <a
              href="mailto:Shiniya2000@gmail.com"
              className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:opacity-90 transition"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/shiniya-benny-523846250"
              target="_blank"
              className="px-8 py-4 border border-zinc-700 rounded-2xl hover:bg-zinc-900 transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}