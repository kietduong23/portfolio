import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ToastProvider";
import { content } from "@/lib/content";
import { profile } from "@/lib/data";
import "./globals.css";


export const metadata: Metadata = {
  title: `${profile.name} — Frontend Developer`,
  description: content.en.hero.summary,
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Portfolio", profile.name],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Frontend Developer`,
    description: content.en.hero.summary,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#090d16",
};

// Applies the saved theme before first paint to avoid a flash. Default: dark.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:'dark'}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <ToastProvider>{children}</ToastProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
