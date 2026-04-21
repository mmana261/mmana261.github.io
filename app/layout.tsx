import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Manantsoa's Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className={`${inter.className} min-h-screen flex flex-col px-[20vw]`}>

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <NavigationBar/>
          <main className="flex-1 pt-31">
          {children}
          </main>
          <footer className="p-6 text-center text-sm text-muted-foreground">
          Copyright &copy; 2025.
          </footer>
        </ThemeProvider>


      </body>
    </html>
  );
}
