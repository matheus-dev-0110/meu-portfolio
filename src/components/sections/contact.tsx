"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 }
  })
}

export default function ContactSection() {
  const { language } = useLanguage()
  const t = content[language].contact

  return (
    <section id="contact" className="relative bg-[#0B0E14] py-28 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
        >
          {t.title}
        </motion.h2>

        <p className="mx-auto mb-16 max-w-xl text-sm text-slate-400 sm:text-base">
          {t.description}
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Mail, color: "purple", href: `mailto:${t.email.value}`, label: "Email" },
            { icon: MessageCircle, color: "green", href: `https://wa.me/${t.whatsapp.value}`, label: "WhatsApp" },
            { icon: Linkedin, color: "blue", href: `https://${t.linkedin.value}`, label: "LinkedIn" },
          ].map((item, i) => {
            const isPrimary = item.label === "Email"
            const cardClass = `group flex flex-col items-center justify-center rounded-2xl border ${isPrimary ? 'border-white/20 bg-purple-600' : 'border-white/10 bg-black/40'} p-8 md:p-10 backdrop-blur-xl transition`
            return (
              <motion.a
                key={item.label}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                <item.icon className={`mb-4 h-7 w-7 ${isPrimary ? 'text-white' : `text-${item.color}-400`}`} />
                <span className={`text-sm ${isPrimary ? 'text-white' : 'text-slate-400'}`}>{item.label}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
