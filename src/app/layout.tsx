import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { baseUrl } from "./sitemap";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Jose Santos IV",
    template: "%s | Jose Santos IV",
  },
  description: `I’m a freelance Frontend Developer specializing in React and in building a web interface with better user experiences.`,
  openGraph: {
    title: "Jose Santos IV",
    description: `I’m a freelance Frontend Developer specializing in React and in building a web interface with better user experiences.`,
    url: baseUrl,
    siteName: "Jose Santos IV",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const socials = [
    {
      id: 1,
      image: "/github-icon.png",
      title: "My Github",
      link: "https://github.com/ivjose",
    },
    {
      id: 2,
      image: "/linkedin-icon.png",
      title: "My Linkedin",
      link: "https://www.linkedin.com/in/ivjose/",
    },
    {
      id: 3,
      image: "/resume-icon.png",
      title: "My Resume",
      link: "https://docs.google.com/document/d/1gaebALsWmZ8L58KLGnij-_5Qt9jtnY8ob9MGn_c0zi8/edit",
    },
  ];

  const currentDate = new Date();
  return (
    <html lang="en" className="h-full">
      <body className={`${montserrat.className} antialiased h-full`}>
        {children}

        <footer className="bg-[var(--gray)] h-[400px] flex gap-6 flex-wrap flex-col items-center justify-center">
          <ol className="flex items-center  mb-4 md:mb-6 gap-4">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.link}
                  title={social.title}
                  className=" inline-block grayscale transition delay-150 duration-300 ease-in-out hover:-translate-y-1 opacity-45 hover:opacity-100 hover:grayscale-0 focus:grayscale-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.title}</span>
                  <Image
                    className="h-12 w-12"
                    src={social.image}
                    alt={social.title}
                    width={50}
                    height={50}
                    priority
                  />
                </a>
              </li>
            ))}
          </ol>
          <p className=" text-white">
            © {currentDate.getFullYear()} - All Rights Reserved
          </p>
        </footer>
      </body>
    </html>
  );
}
