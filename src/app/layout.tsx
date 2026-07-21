import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { LanguageProvider } from "@/context/language-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "Matheus Nóbrega Fernandes | Engenheiro de Dados",
  description: "Engenheiro de Dados com foco em arquiteturas lakehouse, ETL/ELT e governança em Azure e Databricks",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#060A12] text-white antialiased relative overflow-x-hidden`}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
