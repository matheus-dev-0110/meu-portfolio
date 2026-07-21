import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { LanguageProvider } from "@/context/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Matheus Nóbrega Fernandes | Engenheiro de Dados",
  description: "Engenheiro de Dados com foco em arquiteturas lakehouse, ETL/ELT e governança em Azure e Databricks",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-slate-950 text-white antialiased relative overflow-x-hidden">
        
        {/* FUNDO ANIMADO (DECORATIVO) */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-animated" />

        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
