import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/navbar";
import { cn } from "@/lib/utils";

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
    >
      <body className={`${inter.className} min-h-full flex flex-col mt-[25px] mx-[250px]`}>
        <NavigationBar></NavigationBar>
        {children}
        <footer className="p-6 mt-5 text-center text-sm text-muted-foreground">
        Copyright &copy; 2025.
      </footer>

      </body>
    </html>
  );
}
