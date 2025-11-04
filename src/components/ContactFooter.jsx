import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "<nomor_wa_saya>"; // replace with your WhatsApp number e.g., 6281234567890

export default function ContactFooter({ t }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const waLink = useMemo(() => {
    const base = `https://wa.me/${WHATSAPP_NUMBER}`;
    const lines = [
      `${t.formName}: ${form.name}`,
      `${t.formEmail}: ${form.email}`,
      `${t.formCompany}: ${form.company}`,
      `${t.formBudget}: ${form.budget}`,
      `${t.formMessage}: ${form.message}`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    return `${base}?text=${text}`;
  }, [form, t]);

  return (
    <>
      <section id="contact" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            {t.contactTitle}
          </motion.h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">{t.contactDesc}</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(waLink, "_blank");
            }}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">{t.formName}</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">{t.formEmail}</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">{t.formCompany}</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">{t.formBudget}</label>
              <input
                type="text"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">{t.formMessage}</label>
              <textarea
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-800 transition"
              >
                <Send size={18} /> {t.sendWhatsApp}
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm">
          <p className="text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Basscode Studio</p>
          <a
            href="https://masbas.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-orange-500 font-medium hover:underline"
          >
            Created by MasBas
          </a>
        </div>
      </footer>
    </>
  );
}
