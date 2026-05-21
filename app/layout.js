import "./globals.css";

const siteUrl = "https://www.lambdatechaus.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lambda Technologies Pty Ltd | FPGA, Embedded Systems and Engineering Automation",
    template: "%s | Lambda Technologies Pty Ltd"
  },
  description:
    "Lambda Technologies Pty Ltd provides specialist FPGA development, embedded systems, Verilog, VHDL, serial encoder protocols, EnDat, BiSS, HIPERFACE DSL, black channel safety, integration of functional safety systems, industrial functional safety, FSoE, SIL, STO, SS1, Altera FPGA, Remote System Update, telecommunication network drafting, AutoCAD, BricsCAD and LISP development services.",
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
      "Specialist engineering for FPGA, embedded systems, HDL development, serial protocols, industrial functional safety, remote update workflows, telecom drafting, and CAD automation.",
    siteName: "Lambda Technologies Pty Ltd",
    images: [
      {
        url: "/images/lambda-engineering-hero.png",
        width: 1536,
        height: 1024,
        alt: "FPGA and embedded systems engineering workspace"
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
