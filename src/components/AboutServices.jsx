import { motion } from "framer-motion";
import { Rocket, Building2, Salad, School, User, Briefcase } from "lucide-react";

const services = (t) => [
  { icon: Rocket, title: t.serviceLanding, desc: t.serviceLandingDesc },
  { icon: Building2, title: t.serviceCompany, desc: t.serviceCompanyDesc },
  { icon: Salad, title: t.serviceRestaurant, desc: t.serviceRestaurantDesc },
  { icon: School, title: t.serviceSchool, desc: t.serviceSchoolDesc },
  { icon: User, title: t.servicePortfolio, desc: t.servicePortfolioDesc },
  { icon: Briefcase, title: t.serviceSaaS, desc: t.serviceSaaSDesc },
];

export default function AboutServices({ t }) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {t.aboutTitle}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
              {t.aboutDesc}
            </p>
            <div className="mt-6 inline-flex items-center rounded-md bg-orange-500 text-white px-4 py-2 text-sm font-medium">
              {t.quickFact}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {services(t).map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60 p-5 hover:shadow-md transition"
              >
                <div className="h-10 w-10 rounded-md bg-blue-900/10 text-blue-900 dark:text-blue-200 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
