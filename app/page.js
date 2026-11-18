import Image from "next/image";
import HeroSlideshow from "./hero-slideshow";

const capabilityImages = {
  fpga: "/images/fpga-development-hero.webp",
  telecom: "/images/telecommunications-hero.webp",
  cad: "/images/cad-drafting-hero.webp"
};

const heroSlides = [
  { label: "FPGA development", image: capabilityImages.fpga, position: "68% center" },
  { label: "Telecommunications", image: capabilityImages.telecom, position: "72% center" },
  { label: "CAD & civil infrastructure", image: "/images/cad-infrastructure-collage.webp", position: "72% center" }
];

const capabilities = [
  {
    title: "FPGA and embedded systems",
    body: "We develop Verilog and VHDL designs, write embedded firmware, and support hardware bring-up, timing closure and system integration.",
    image: capabilityImages.fpga
  },
  {
    title: "CAD and drafting automation",
    body: "We build AutoCAD and BricsCAD tools, including LISP routines, to automate drawing production, extract drawing data and process markups.",
    image: capabilityImages.cad
  },
  {
    title: "Telecommunications drafting",
    body: "We prepare network drawings and Single Line Diagrams, document proposed changes and assess their impact on existing designs.",
    image: capabilityImages.telecom
  },
  {
    title: "Interfaces and protocols",
    body: "We implement and validate SPI, UART and I²C interfaces and serial encoder protocols including EnDat, BiSS and HIPERFACE DSL."
  },
  {
    title: "Functional safety engineering support",
    body: "We support the design, integration and validation of industrial safety functions and communications, including FSoE, safe torque off (STO), safe stop 1 (SS1) and safety I/O diagnostics."
  },
  {
    title: "Altera and Intel FPGA platforms",
    body: "We develop and maintain Quartus projects, support migrations and design Remote System Update workflows."
  },
  {
    title: "Custom engineering software",
    body: "We build tools that connect engineering systems, convert files and automate repeatable project tasks."
  }
];

const services = [
  {
    title: "Design and delivery",
    body: "Bring us in for a defined engineering, drafting or automation package, from initial scoping through implementation and handover."
  },
  {
    title: "Integration and troubleshooting",
    body: "Get focused support with hardware bring-up, interface validation, fault investigation or a difficult system integration."
  },
  {
    title: "Maintenance and migration",
    body: "Keep existing designs working with legacy FPGA support, remote update planning, and improvements to drafting and software workflows."
  }
];

const navigation = [
  ["Capabilities", "#capabilities"],
  ["Services", "#services"],
  ["Products", "#products"],
  ["About", "#about"],
  ["Contact", "#contact"]
];

export default function Home() {
  return (
    <>
      <header id="top" className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="#top" aria-label="Lambda Technologies home">
            <span className="brand-mark" aria-hidden="true">&lambda;</span>
            <span>
              <strong>Lambda Technologies</strong>
              <small>Pty Ltd</small>
            </span>
          </a>
          <nav className="site-nav" aria-label="Primary">
            {navigation.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <HeroSlideshow slides={heroSlides}>
          <p className="eyebrow">Engineering &amp; automation</p>
          <h1>From embedded systems to engineering drawings.</h1>
          <p className="hero-summary">
            Lambda Technologies designs and integrates FPGA and embedded systems, automates CAD
            workflows, and produces technical documentation for telecommunications networks.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:info@lambdatechaus.com">
              Discuss a project <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="#capabilities">
              View capabilities <span aria-hidden="true">↓</span>
            </a>
          </div>
        </HeroSlideshow>

        <section id="capabilities" className="section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Capabilities</p>
                <h2>FPGA development, CAD automation and telecom drafting</h2>
              </div>
              <p>
                We help engineering teams bring up new hardware, diagnose integration issues,
                automate drawing production and maintain existing systems.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.slice(0, 3).map(({ title, body, image }) => (
                <article className="capability-card" key={title}>
                  <div className="capability-image">
                    <Image src={image} alt="" fill sizes="(max-width: 680px) 100vw, 33vw" />
                  </div>
                  <div className="card-copy">
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="specialty-grid">
              {capabilities.slice(3).map(({ title, body }) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="wrap services-layout">
            <div>
              <p className="eyebrow">Services</p>
              <h2>Support at every stage of delivery</h2>
            </div>
            <div className="service-list">
              {services.map(({ title, body }) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Products &amp; projects</p>
                <h2>Tools for engineering drawings</h2>
              </div>
            </div>
            <div className="product-grid">
              <article className="product-card">
                <div className="product-image converter-image">
                  <Image
                    src="/images/12daz-converter.webp"
                    alt="12dAZ Converter showing a road plan and DXF export settings"
                    width={1200}
                    height={742}
                    sizes="(max-width: 780px) 95vw, 49vw"
                  />
                </div>
                <div className="card-copy">
                  <p className="eyebrow">Lambda Technologies product</p>
                  <h3>12dAZ Converter</h3>
                  <p>
                    Convert 12d Model survey files in <code>.12daz</code> and <code>.12da</code> format to
                    2D and 3D DXF for use in CAD.
                  </p>
                  <div className="product-links">
                    <a className="text-link" href="https://12daz-app-website.vercel.app/">
                      Visit 12dAZ Converter <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
              <article className="product-card">
                <figure className="product-image ccmap-image">
                  <Image
                    src="/images/ccmap-synthetic-satellite.webp"
                    alt="Illustrated CADCraft workspace showing yellow property boundaries over fictional satellite imagery"
                    fill
                    sizes="(max-width: 780px) 95vw, 49vw"
                  />
                  <figcaption>Illustrative CADCraft view</figcaption>
                </figure>
                <div className="card-copy">
                  <p className="eyebrow">Experimental CADCraft integration</p>
                  <h3>CCMap</h3>
                  <p>
                    CADCraft is an open-source drafting application created by the ArtCraft team.
                    Lambda Technologies forked it as CCMap to develop experimental map backgrounds,
                    including OpenStreetMap streets, Google satellite view and Esri World Imagery.
                    The maps provide a view-only reference that can align with Australian MGA
                    coordinates while leaving drawing geometry and exports unchanged.
                  </p>
                  <div className="product-links">
                    <a className="text-link" href="https://github.com/Ala-Ismail/CCMap">
                      View CCMap on GitHub <span aria-hidden="true">↗</span>
                    </a>
                    <a className="text-link" href="https://github.com/Ala-Ismail/CCMap#map-backgrounds">
                      Map setup <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="wrap about-layout">
            <div>
              <p className="eyebrow">About</p>
              <h2>Engineering support from Australia</h2>
            </div>
            <p>
              Lambda Technologies Pty Ltd works with teams across embedded development,
              CAD automation and telecommunications drafting. We work through the constraints
              with your team and deliver designs, drawings or software you can maintain after handover.
            </p>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="wrap contact-layout">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s discuss your project</h2>
              <p>Tell us what you’re building, what’s getting in the way, or where you need engineering support.</p>
            </div>
            <a className="button button-primary" href="mailto:info@lambdatechaus.com">
              info@lambdatechaus.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span>&copy; {new Date().getFullYear()} Lambda Technologies Pty Ltd</span>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  );
}
