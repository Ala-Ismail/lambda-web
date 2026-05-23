const capabilities = [
  {
    title: "FPGA and Embedded Systems",
    body: "Architecture, HDL, firmware, hardware bring-up, interface control, timing-aware design, debugging, and deployment support for complex connected systems."
  },
  {
    title: "CAD and Drafting Automation",
    body: "AutoCAD, BricsCAD, LISP, drawing automation, data extraction, markups, and practical tooling for teams producing technical documentation."
  },
  {
    title: "Telecommunication Networks",
    body: "Network drafting support, design documentation, impact analysis, drawing production, workflow improvement, and delivery support for telecom projects."
  },
  {
    title: "SLD Accelerator",
    body: "Single Line Diagram workflow acceleration through Lambda Technologies' SLD Accelerator product, helping telecom teams produce clearer outputs faster."
  },
  {
    title: "Protocol and Interface Work",
    body: "Maintainable Verilog and VHDL, serial encoder interfaces, SPI, UART, I2C, EnDat, BiSS, HIPERFACE DSL, validation support, and fault investigation."
  },
  {
    title: "Functional Safety Support",
    body: "Support for SIL-oriented design work, black channel safety concepts, FSoE, STO, SS1, safety I/O, diagnostics, and validation workflows."
  },
  {
    title: "Altera / Intel FPGA",
    body: "Quartus-based development, configuration workflows, migration support, Remote System Update, and legacy Altera project maintenance."
  },
  {
    title: "Custom Applications",
    body: "Purpose-built software and automation that fits customer workflows, connects technical systems, and turns specialist knowledge into repeatable tools."
  }
];

const services = [
  "FPGA, HDL, and embedded development",
  "CAD drafting and drawing automation",
  "Telecommunication network drafting",
  "Single Line Diagram workflow acceleration",
  "Interface and protocol implementation",
  "Functional safety support",
  "Remote update architecture",
  "System debugging and integration",
  "Legacy design support",
  "AutoCAD, BricsCAD, and LISP tooling"
];

const applications = [
  "Industrial control systems",
  "Embedded product support",
  "FPGA-connected platforms",
  "Telecommunication network drafting",
  "Single Line Diagram workflows",
  "Engineering CAD workflows",
  "Functional safety systems",
  "Legacy technical systems"
];

const embeddedDomain = ["FPGA logic", "Embedded firmware", "Interfaces and safety"];
const deliveryDomain = ["Telecom networks", "CAD drafting", "Single Line Diagrams"];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Lambda Technologies home">
          <span className="brand-mark">&lambda;</span>
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
          <div className="hero-copy-block">
            <p className="eyebrow">Engineering software, drafting, and network solutions</p>
            <h1>A practical technical partner for complex project delivery.</h1>
            <p className="hero-copy">
              Lambda Technologies helps teams solve connected engineering problems across FPGA and
              embedded systems, CAD drafting, telecommunication network work, and Single Line Diagram
              delivery through SLD Accelerator.
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

          <div className="hero-graphic" aria-label="Lambda Technologies solution areas">
            <div className="domain-map">
              <div className="domain-column embedded-domain">
                <span className="domain-label">Technical Systems</span>
                <h2>Embedded + FPGA</h2>
                <ul>
                  {embeddedDomain.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="domain-bridge" aria-hidden="true">
                <span className="bridge-line" />
                <div className="bridge-hub">
                  <span>Lambda</span>
                  <strong>Custom software + automation</strong>
                </div>
                <span className="bridge-line" />
              </div>

              <div className="domain-column delivery-domain">
                <span className="domain-label">Delivery Outputs</span>
                <h2>Telecom + CAD</h2>
                <ul>
                  {deliveryDomain.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="intro band">
        <div className="section-inner split">
          <div>
            <p className="eyebrow">What We Do</p>
            <h2>Balanced support across technical systems, drawings, and delivery workflows.</h2>
          </div>
          <p>
            Engineering delivery rarely sits in one neat layer. Lambda Technologies can work close
            to the hardware when needed, then step into CAD, drafting, telecom documentation, and
            automation when the project needs clearer outputs and repeatable processes.
          </p>
        </div>
      </section>

      <section id="capabilities" className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Specialist capability presented as a practical project partner.</h2>
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
            <h2>Support from first investigation through drawings, tools, and deployment.</h2>
            <p>
              Work can be scoped as complete solution delivery, targeted technical assistance,
              drafting support, automation, design review, legacy support, or focused debugging for
              difficult integration problems.
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
            <h2>Useful where technical accuracy and clear delivery both matter.</h2>
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
              <h2>SLD Accelerator for faster Single Line Diagram delivery.</h2>
            </div>
            <div className="product-panel">
              <h3>SLD Accelerator</h3>
              <p>
                SLD Accelerator by Lambda Technologies Pty Ltd supports telecommunications teams
                with practical Single Line Diagram automation, drafting workflow acceleration, and
                clearer network delivery processes.
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
            <h2>Approachable engineering depth for real delivery constraints.</h2>
          </div>
          <div className="copy-stack">
            <p>
              Lambda Technologies Pty Ltd provides technology-focused engineering support across
              FPGA development, embedded systems, HDL design, CAD automation, telecommunication
              network drafting, SLD Accelerator, Altera FPGA platforms, Remote System Update
              workflows, and functional safety support.
            </p>
            <p>
              The approach is direct and collaborative: understand the project, identify the
              constraints, choose the right technical path, and deliver work that customers can use
              and maintain after handover.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-inner contact-layout">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Need a technical partner for engineering, drafting, or network delivery?</h2>
            <p>
              Contact Lambda Technologies Pty Ltd to discuss your project, integration challenge,
              network drafting work, Single Line Diagram workflow, legacy system, or engineering
              automation requirement.
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
        <span>&copy; {new Date().getFullYear()} Lambda Technologies Pty Ltd</span>
        <a href="mailto:info@lambdatechaus.com">info@lambdatechaus.com</a>
      </footer>
    </main>
  );
}
