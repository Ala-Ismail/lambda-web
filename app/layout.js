import "./globals.css";

const siteUrl = "https://www.lambdatechaus.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lambda Technologies | FPGA, CAD Automation and Telecom Drafting",
    template: "%s | Lambda Technologies Pty Ltd"
  },
  description:
    "Australian engineering support for FPGA and embedded systems, CAD automation and telecommunications drafting. Explore 12dAZ Converter and CCMap for CADCraft.",
  keywords: [
    "FPGA development",
    "embedded systems",
    "Verilog",
    "VHDL",
    "serial encoder protocols",
    "EnDat",
    "BiSS",
    "HIPERFACE DSL",
    "black channel safety",
    "industrial functional safety",
    "integration of functional safety systems",
    "FSoE",
    "SIL",
    "STO",
    "SS1",
    "safety I/O",
    "Altera FPGA",
    "Intel FPGA",
    "Remote System Update",
    "telecommunication network drafting",
    "AutoCAD LISP",
    "BricsCAD",
    "12dAZ Converter",
    "CCMap",
    "engineering automation",
    "Australia"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Lambda Technologies Pty Ltd",
    description:
      "FPGA and embedded development, CAD automation, telecommunications drafting and custom engineering software.",
    siteName: "Lambda Technologies Pty Ltd",
    images: [
      {
        url: "/images/fpga-development-hero.webp",
        width: 1440,
        height: 810,
        alt: "FPGA development board being probed at an electronics workbench"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
