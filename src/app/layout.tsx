import type { Metadata, Viewport } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Sameh — Data Scientist & ML Engineer",
  description:
    "Portfolio of Mohamed Sameh Salah Eldine — data scientist and machine learning engineer building streaming analytics platforms, LLM agents, computer-vision pipelines, and rigorously validated deep-learning models.",
  keywords: [
    "Mohamed Sameh",
    "Data Scientist",
    "Machine Learning Engineer",
    "Alexandria",
    "Egypt",
    "Portfolio",
  ],
  authors: [{ name: "Mohamed Sameh Salah Eldine" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Mohamed Sameh — Data Scientist & ML Engineer",
    description:
      "Streaming analytics platforms, LLM agents, computer vision, and rigorously validated deep learning. Alexandria, Egypt.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf1e0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${newsreader.variable} ${jetbrains.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{console.log("%c$ whoami","color:#bb9457;font-family:ui-monospace,monospace;font-size:12px");console.log("%c> mohamed-sameh — you found the easter egg. I build ML systems, streaming pipelines, and the occasional terminal. Say hi: smedo4407@gmail.com","color:#a08b6a;font-family:ui-monospace,monospace;font-size:12px")}catch(e){}`,
          }}
        />
      </body>
    </html>
  );
}
