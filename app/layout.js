import "./globals.css";

const siteUrl = "https://www.lambdatechaus.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lambda Technologies | CAD Automation, Telecom CAD and Mapping",
    template: "%s | Lambda Technologies Pty Ltd"
  },
  description:
    "Australian CAD automation, telecommunications CAD solutions and custom mapping. We build drafting tools, network drawing workflows and CAD map integrations.",
  keywords: [
    "CAD automation",
    "telecommunications CAD solutions",
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
      "CAD automation, network drawing tools for telecommunications teams and custom mapping for CAD workflows.",
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
