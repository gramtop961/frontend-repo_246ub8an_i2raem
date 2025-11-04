import { motion } from "framer-motion";
import { ArrowRight, Moon, Sun, Languages } from "lucide-react";

const WHATSAPP_NUMBER = "<nomor_wa_saya>"; // replace with your WhatsApp number e.g., 6281234567890

export default function Hero({ t, lang, onToggleLang, theme, onToggleTheme }) {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <header className="relative overflow-hidden">
      {/* Top navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-900 flex items-center justify-center text-white font-bold">B</div>
          <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">Basscode Studio</div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleLang}
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle language"
          >
            <Languages size={18} /> {lang.toUpperCase()}
          </button>
          <button
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition"
          >
            {t.cta} <ArrowRight size={18} />
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32">
        {/* Decorative gradient */}
        <div className="pointer-events-none absolute inset-0 -z-[1]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[90%] bg-gradient-to-b from-blue-100/60 to-transparent dark:from-blue-900/20 blur-2xl" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          {t.heroTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
        >
          {t.heroSubtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-800 transition"
          >
            {t.cta}
          </a>
          <a
            href="#templates"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-base font-semibold border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {t.viewTemplates}
          </a>
        </motion.div>
      </div>
    </header>
  );
}
