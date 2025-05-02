"use client"

import { motion } from "framer-motion"
import { Language, useLanguage } from "../l18n"

interface LanguageSwitcherProps {
  defaultLanguage?: "EN" | "IS"
  onLanguageChange?: (language: "EN" | "IS") => void
}

export default function LanguageSwitcher({ defaultLanguage = "EN" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return (
    <div className="relative flex h-8 items-center rounded-full border border-zinc-700 p-1">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`relative z-10 flex h-6 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors ${language === "en" ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-200"}`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("is")}
        className={`relative z-10 flex h-6 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors ${language === "is" ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-200"}`}
      >
        IS
      </button>
      <motion.div
        className="absolute h-6 w-8 rounded-full bg-white"
        initial={false}
        animate={{
          x: language === "en" ? 4 : 36,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </div>
  )
}
