import { motion } from "framer-motion";

const templates = (t) => [
  {
    title: t.tempCafe,
    desc: t.tempCafeDesc,
    url: "https://example.com/demo-cafe",
  },
  {
    title: t.tempLanding,
    desc: t.tempLandingDesc,
    url: "https://example.com/demo-landing",
  },
  {
    title: t.tempCompany,
    desc: t.tempCompanyDesc,
    url: "https://example.com/demo-company",
  },
  {
    title: t.tempPortfolio,
    desc: t.tempPortfolioDesc,
    url: "https://example.com/demo-portfolio",
  },
  {
    title: t.tempSchool,
    desc: t.tempSchoolDesc,
    url: "https://example.com/demo-school",
  },
  {
    title: t.tempSaaS,
    desc: t.tempSaaSDesc,
    url: "https://example.com/demo-saas",
  },
];

export default function TemplateShowcase({ t }) {
  return (
    <section id="templates" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
        >
          {t.showcaseTitle}
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">{t.showcaseDesc}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates(t).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60 p-5 hover:shadow-lg transition flex flex-col"
            >
              <div className="aspect-video rounded-md bg-gray-100 dark:bg-gray-700 mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-orange-100 dark:from-blue-900/30 dark:to-orange-900/20" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex-1">{item.desc}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {t.viewDemo}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
