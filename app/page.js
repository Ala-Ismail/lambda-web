const capabilities = [
  {
    title: "FPGA Development",
    body: "Architecture, HDL implementation, timing-aware design, platform integration, debugging, and field deployment support."
  },
  {
    title: "Embedded Systems",
    body: "Low-level firmware, hardware bring-up, peripheral control, device communication, monitoring, and FPGA-connected systems."
  },
  {
    title: "Verilog and VHDL",
    body: "Maintainable HDL for digital logic, state machines, interface controllers, data paths, test support, and legacy design work."
  },
  {
    title: "Serial Encoder Protocols",
    body: "Protocol-specific interface logic, signal timing analysis, position feedback integration, validation, and fault investigation for serial encoders including EnDat, BiSS, and HIPERFACE DSL."
  },
  {
    title: "Industrial Functional Safety",
    body: "Integration of functional safety systems and black channel safety concepts for encoder and control interfaces, including FSoE, SIL-oriented design work, STO, SS1, safety I/O, diagnostics, and validation workflows."
  },
  {
    title: "Altera / Intel FPGA",
    body: "Quartus-based development, configuration workflows, migration support, Remote System Update, and legacy Altera project maintenance."
  },
  {
    title: "Telecommunication Network Drafting",
    body: "AutoCAD and BricsCAD drafting support for telecommunications network plans, design documentation, markups, and drawing production."
  },
  {
    title: "AutoCAD / BricsCAD and LISP",
    body: "Custom CAD commands, drawing automation, data extraction, engineering workflow tooling, and LISP maintenance."
  }
];

const services = [
  "FPGA and HDL design",
  "Embedded firmware development",
  "Interface and protocol implementation",
  "Serial encoder and black channel safety",
  "Integration of functional safety systems",
  "Industrial functional safety support",
  "Remote update architecture",
  "System debugging and integration",
  "Legacy design support",
  "Telecommunication network drafting",
  "AutoCAD and BricsCAD automation",
  "LISP tool development"
];

const applications = [
  "Industrial control systems",
  "Functional safety systems",
  "Automation and position feedback",
  "Instrumentation and measurement",
  "Hardware interface products",
  "Telecommunication network drafting",
  "Engineering CAD workflows",
  "Legacy technical systems"
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Lambda Technologies home">
          <span className="brand-mark">λ</span>
          <span>
            <strong>Lambda Technologies</strong>
            <small>Pty Ltd</small>
          </span>
        </a>
        <nav>
          <a href="#capabilities">Capabilities</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">FPGA · Embedded Systems · Engineering Automation</p>
          <h1>Specialist technology engineering for complex hardware-connected systems.</h1>
          <p className="hero-copy">
            Lambda Technologies Pty Ltd develops FPGA, embedded, HDL, protocol, remote update,
            industrial functional safety, telecommunications drafting, AutoCAD/BricsCAD, and LISP solutions for teams that need practical technical depth.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:info@lambdatechaus.com">
              Discuss a project
            </a>
            <a className="button secondary" href="#capabilities">
              View capabilities
            </a>
          </div>
        </div>
      </section>

      <section className="intro band">
        <div className="section-inner split">
          <div>
            <p className="eyebrow">What We Do</p>
            <h2>Engineering across hardware logic, firmware, and technical tooling.</h2>
          </div>
          <p>
            Modern systems rarely live in one neat layer. FPGA logic must cooperate with embedded
            software, hardware interfaces need reliable protocol handling, and engineering teams
            need CAD automation that matches real workflows. Lambda Technologies works across those
            boundaries.
          </p>
        </div>
      </section>

      <section id="capabilities" className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Focused technical services for demanding engineering projects.</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.title}>
                <span className="card-index" aria-hidden="true">
                  {item.title.slice(0, 2).toUpperCase()}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="band">
        <div className="section-inner services-layout">
          <div>
            <p className="eyebrow">Services</p>
            <h2>Support from first investigation through deployment and maintenance.</h2>
            <p>
              Work can be scoped as complete development, targeted technical assistance, design
              review, legacy support, or focused debugging for difficult integration problems.
            </p>
          </div>
          <ul className="service-list" aria-label="Engineering services">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Applications</p>
            <h2>Built for systems where precision, reliability, and maintainability matter.</h2>
          </div>
          <div className="application-strip">
            {applications.map((application) => (
              <span key={application}>{application}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="band product-band">
        <div className="product-background" />
        <div className="product-overlay" />
        <div className="section-inner product-layout">
          <div className="product-copy">
            <div>
              <p className="eyebrow">Product</p>
              <h2>SLD Accelerator Solution, a force multiplier for telecom relocation industry.</h2>
            </div>
            <div className="product-panel">
              <h3>SLD Accelerator</h3>
              <p>
                SLD Accelerator by Lambda Technologies Pty Ltd is designed to support
                telecommunications network delivery with practical engineering automation,
                drafting workflow acceleration, and technical process improvement.
              </p>
              <a className="product-link" href="https://www.sld-accelerator.com/">
                Visit sld-accelerator.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="band about-band">
        <div className="section-inner split">
          <div>
            <p className="eyebrow">About</p>
            <h2>Practical technical depth for real engineering constraints.</h2>
          </div>
          <div className="copy-stack">
            <p>
              Lambda Technologies Pty Ltd is a technology-focused engineering company specialising
              in FPGA development, embedded systems, HDL design, serial encoder protocols,
              Altera FPGA platforms, Remote System Update workflows, industrial functional safety,
              telecommunication network drafting, and AutoCAD/BricsCAD LISP automation.
            </p>
            <p>
              The approach is direct: understand the system, identify the constraints, design the
              right technical path, and deliver work that can be maintained after deployment.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-inner contact-layout">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Need specialist FPGA, embedded, HDL, CAD, or automation support?</h2>
            <p>
              Contact Lambda Technologies Pty Ltd to discuss your project, integration challenge,
              network drafting work, legacy system, or engineering automation requirement.
            </p>
          </div>
          <div className="contact-panel">
            <a className="contact-link" href="mailto:info@lambdatechaus.com">
              info@lambdatechaus.com
            </a>
            <a className="contact-link" href="https://www.lambdatechaus.com">
              www.lambdatechaus.com
            </a>
            <p>Australia</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Lambda Technologies Pty Ltd</span>
        <a href="mailto:info@lambdatechaus.com">info@lambdatechaus.com</a>
      </footer>
    </main>
  );
}
