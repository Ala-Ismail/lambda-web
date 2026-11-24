import "./globals.css";

const siteUrl = "https://www.lambdatechaus.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lambda Technologies | CAD Automation and Custom Mapping",
    template: "%s | Lambda Technologies Pty Ltd"
  },
  description:
    "Australian CAD automation and custom mapping solutions. Lambda Technologies builds drafting tools, integrates map backgrounds and supports telecommunications drafting.",
  keywords: [
    "CAD automation",
    "custom mapping solutions",
    "CAD map integration",
    "survey file conversion",
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
      "Australian CAD automation and custom mapping for survey drawings, civil plans and telecommunications networks.",
    siteName: "Lambda Technologies Pty Ltd",
    images: [
      {
        url: "/images/cad-infrastructure-collage.webp",
        width: 1440,
        height: 810,
        alt: "Civil survey drawing alongside a satellite-style view of the same site"
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
