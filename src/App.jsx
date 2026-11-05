import './App.css'

const projects = [
  {
    name: ' Bot de Monitoramento de editais',
    category: 'Python e automação',
    description:
      'Experimento de automação para monitorar publicações de editais da UNEB e enviar alertas pelo Telegram.',
    status: 'Em uso',
    href: 'https://github.com/hugosouzamagalhaes/uneb-editais-bot'
  },
  {
    name: 'Rede de votações parlamentares',
    category: 'Python e grafos + Ciências Humanas',
    description:
      'Exploração de relações entre votações parlamentares usando modelos de redes.',
    status: 'Acadêmico',
    href: 'https://github.com/hugosouzamagalhaes/rede-politica-brasil'
  },
  {
    name: 'MyFit',
    category: 'Java + Programação Orientada à Objetos',
    description:
      'Sistema de gestão de academia desenvolvido para praticar organização de dados e regras de negócio.',
    status: 'Acadêmico',
    href: 'https://github.com/hugosouzamagalhaes/MyFit'
  },
  {
    name: 'Dashboard de análise de preços de AirBnb',
    category: 'Análise de dados e Desenvolvimento Web',
    description:
      'Dashboard (site) com uma análise exploratória de dados de preços de AirBnb no Rio de Janeiro',
    status: 'Em uso',
    href: 'https://github.com/hugosouzamagalhaes/airbnb-rj-analysis'
  },
]

const GITHUB = 'https://github.com/hugosouzamagalhaes'
const LINKEDIN = 'https://www.linkedin.com/in/hugosmagalhaes/'
const EMAIL = 'hsmagalhaes2@gmail.com'

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function SocialLinks({ compact }) {
  return (
    <div className={`social-links${compact ? ' compact' : ''}`}>
      <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
        <GithubIcon />
      </a>
      <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <LinkedinIcon />
      </a>
      <a href={`mailto:${EMAIL}`} aria-label="E-mail">
        <MailIcon />
      </a>
    </div>
  )
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Voltar ao início">
        <span className="avatar">
          HM
          <img
            src={`${import.meta.env.BASE_URL}foto.jpg`}
            alt="Foto de Hugo"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </span>
        <span className="wordmark">
          hsm<span className="cursor">_</span>
        </span>
      </a>
      <nav className="navigation" aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#pesquisa">Pesquisa</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero container" id="inicio">
      <div className="hero-copy">
        <h1>Hugo Magalhães</h1>
        <p className="hero-description">
          Desenvolvedor de Software e Pesquisador<br />
          Graduando em Sistemas de Informação na UNEB.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#projetos">Ver projetos</a>
          <a className="text-link" href="#sobre">Sobre mim</a>
        </div>
      </div>

      <div className="terminal" aria-label="Áreas de interesse">
        <p><span className="prompt">~ $</span> who-am-i</p>
        <p className="out">hugo</p>
        <p><span className="prompt">~ $</span> interesses.txt</p>
        <p className="out">computação</p>
        <p className="out">matemática e lógica</p>
        <p className="out">pesquisa acadêmica</p>
        <p className="out">desenvolvimento de software</p>
        <p><span className="prompt">~ $</span> <span className="cursor">█</span></p>
        <SocialLinks compact />
      </div>
    </section>
  )
}

function Section({ id, title, alt, children }) {
  return (
    <section className={`section${alt ? ' section-alt' : ''}`} id={id}>
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="sobre" title="Sobre mim" alt>
      <div className="about-grid">
        <div className="about-copy">
          <p className="section-lead">
            Estou no 4° semestre de Sistemas de Informação pela UNEB e atuo na Iniciação Científica em Computação em Tempo Real.
          </p>
          <p className="body-copy">
            Tenho afinidade com matemática, lógica e algoritmos, aplicando esses fundamentos em projetos acadêmicos e pessoais.
          </p>
          <p className="body-copy">
            Possuo experiência como estagiário de T.I no núcleo de tecnologia do Pessoa & Pessoa Advogados, lidando com rotinas técnicas e suporte.
          </p>
          <p className="body-copy">
            Também me interesso pela interseção da computação com história e política, utilizando análise de dados e redes para investigar questões sociais.
          </p>
        </div>

        <div className="skills-card">
          <div className="about-image-wrapper">
            <img
              src="/tech.jpg"
              alt="Ilustração de tecnologia e dados"
              onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
            />
          </div>

          <h3>Tecnologias & Ferramentas</h3>

          <div className="skill-group">
            <span className="skill-label">Linguagens & Dados</span>
            <div className="skills-tags">
              <span>Python</span>
              <span>SQL</span>
              <span>Java</span>
            </div>
          </div>

          <div className="skill-group">
            <span className="skill-label">Ferramentas & Teoria</span>
            <div className="skills-tags">
              <span>Git</span>
              <span>Power BI</span>
              <span>Teoria dos Grafos</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.name}>
            <div>
              <p className="category">{project.category}</p>
              <h3>{project.name}</h3>
              <p className="body-copy">{project.description}</p>
              {project.href && (
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                  Ver no GitHub
                </a>
              )}
            </div>
            <span className="project-status">{project.status}</span>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Research() {
  return (
    <Section id="pesquisa" title="Pesquisa e estudos" alt>
      <div className="research-grid">
        <article className="research-card">
          <div className="research-header">
            <span className="research-badge">Iniciação Científica</span>
            <h3>Computação em Tempo Real</h3>
          </div>
          <p className="body-copy">
            Investigação sobre escalonamento de tarefas, restrições temporais e
            fundamentos matemáticos aplicados a sistemas de alta prioridade.
          </p>
          <div className="skills-tags">
            <span>Escalonamento</span>
            <span>Sistemas Operacionais</span>
            <span>Algoritmos</span>
          </div>
        </article>

        <article className="research-card">
          <div className="research-header">
            <span className="research-badge">Projeto Autônomo</span>
            <h3>Computação + Ciências Humanas</h3>
          </div>
          <p className="body-copy">
            Estudos independentes aplicando Ciência da Computação, modelos de redes e análise estatística para investigar dados políticos e sociais.
          </p>
          <div className="skills-tags">
            <span>Teoria dos Grafos</span>
            <span>Análise de Dados</span>
            <span>Ciências Sociais</span>
          </div>
        </article>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contato" title="Contato">
      <div className="contact-card">
        <div className="contact-content">
          <h3>Vamos conversar?</h3>
          <p className="body-copy">
            Estou disponível para oportunidades de estágio, projetos colaborativos ou trocas de conhecimento sobre tecnologia e pesquisa.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${EMAIL}`} className="button-primary">
              Enviar e-mail
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="button-secondary">
              Ver LinkedIn
            </a>
          </div>
        </div>
        <div className="contact-links-list">
          <div className="contact-item">
            <span className="contact-label">E-mail</span>
            <a href={`mailto:${EMAIL}`} className="contact-value">{EMAIL}</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">GitHub</span>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="contact-value">github.com/hugosouzamagalhaes</a>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="footer container">
      <p>© 2026 Hugo de Souza Magalhães</p>
      <a href="#inicio">Voltar ao topo</a>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <div className="hero-band">
        <Hero />
      </div>
      <main>
        <About />
        <Projects />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App