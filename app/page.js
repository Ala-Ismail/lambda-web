import Image from "next/image";
import HeroSlideshow from "./hero-slideshow";

const capabilityImages = {
  telecom: "/images/sld-accelerator-telecom-bg.png",
  cad: "/images/cad-drafting-hero.webp",
  infrastructure: "/images/cad-infrastructure-collage.webp"
};

const heroSlides = [
  { label: "CAD automation", image: capabilityImages.cad, position: "72% center" },
  { label: "Telecommunications CAD", image: capabilityImages.telecom, position: "72% center" },
  { label: "Custom mapping", image: capabilityImages.infrastructure, position: "72% center" }
];

const capabilities = [
  {
    title: "CAD automation",
    body: "We build AutoCAD and BricsCAD tools, including LISP routines, to automate drawing production, extract drawing data and process markups.",
    image: capabilityImages.cad
  },
  {
    title: "Telecommunications CAD solutions",
    body: "We build CAD tools and workflows for creating network drawings and single-line diagrams, documenting proposed changes and assessing their impact on existing designs.",
    image: capabilityImages.telecom
  },
  {
    title: "Custom mapping solutions",
    body: "We build tools that bring street maps and aerial imagery into CAD and align map backgrounds with survey drawings and Australian MGA coordinates.",
    image: capabilityImages.infrastructure
  }
];

const services = [
  {
    title: "Design and delivery",
    body: "Develop CAD automation routines, telecommunications drawing workflows or custom mapping tools, from requirements through implementation and handover."
  },
  {
    title: "Integration and troubleshooting",
    body: "Get help connecting CAD and mapping tools, aligning map backgrounds and resolving drawing or file conversion issues."
  },
  {
    title: "Maintenance and migration",
    body: "Maintain existing drafting tools and migrate drawings and automation routines to new software or workflows."
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
            <strong>Lambda Technologies</strong>
            <small>Pty Ltd</small>
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
          <h1>CAD automation, telecom design and custom mapping</h1>
          <p className="hero-summary">
            Lambda Technologies builds tools that automate drafting, help telecommunications teams
            produce network drawings and bring street maps and aerial imagery into CAD.
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
                <h2>Tools for drawings, networks and maps</h2>
              </div>
              <p>
                We develop tools around your existing software, drawing standards and project data.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.map(({ title, body, image }) => (
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
                <h2>Tools for drawings, maps and engineering models</h2>
              </div>
              <p>
                <a href="#contact">Contact us</a> to explore enterprise support options for our open-source tools.
              </p>
            </div>
            <div className="product-grid">
              <article className="product-card">
                <div className="product-image product-screenshot">
                  <Image
                    src="/images/12daz-converter.webp"
                    alt="12dAZ Converter showing a road plan and DXF export settings"
                    width={1200}
                    height={742}
                    sizes="(max-width: 780px) 95vw, 50vw"
                  />
                </div>
                <div className="card-copy">
                  <p className="eyebrow">Under development</p>
                  <h3>12dAZ Converter</h3>
                  <p>
                    Convert <code>.12daz</code> and <code>.12da</code> survey files to editable DXF offline,
                    including in air-gapped environments. Flatten to 2D or keep supported elevations.
                  </p>
                  <p>
                    The Windows x64 app is being developed to integrate with government mapping
                    services for map backgrounds in connected environments. It also provides MGA
                    projection suggestions and previews geometry that would be skipped during export.
                  </p>
                </div>
              </article>
              <article className="product-card">
                <figure className="product-image ccmap-image">
                  <Image
                    src="/images/ccmap-synthetic-satellite.webp"
                    alt="Illustrated CADCraft workspace showing yellow property boundaries over fictional satellite imagery"
                    fill
                    sizes="(max-width: 780px) 95vw, 50vw"
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
              <section id="sld-accelerator" className="product-card sld-accelerator-card" aria-labelledby="sld-accelerator-title">
                <div className="sld-accelerator-copy">
                  <p className="eyebrow">Proprietary Lambda Technologies product</p>
                  <h3 id="sld-accelerator-title">SLD Accelerator</h3>
                  <p className="sld-accelerator-description">
                    A telecommunications CAD tool that combines design analysis, change impact
                    assessment and single-line diagram creation. Public demos are unavailable.
                  </p>
                </div>
                <div className="sld-accelerator-image">
                  <Image
                    src={capabilityImages.telecom}
                    alt="Illustration of a telecommunications drafting workstation with network maps and diagrams"
                    fill
                    sizes="(max-width: 780px) 90vw, (max-width: 1328px) 52vw, 690px"
                  />
                </div>
              </section>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="wrap about-layout">
            <div>
              <p className="eyebrow">About</p>
              <h2>Australian CAD and mapping specialists</h2>
            </div>
            <p>
              Lambda Technologies Pty Ltd develops CAD automation, telecommunications drawing tools
              and custom mapping software in Australia. We work with your team to deliver tools you
              can maintain after handover.
            </p>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="wrap contact-layout">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s discuss your project</h2>
              <p>Tell us about your drafting workflow, network drawings or mapping requirements.</p>
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
