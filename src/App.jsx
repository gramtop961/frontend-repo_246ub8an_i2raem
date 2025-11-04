import { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero";
import AboutServices from "./components/AboutServices";
import TemplateShowcase from "./components/TemplateShowcase";
import ContactFooter from "./components/ContactFooter";

const translations = {
  id: {
    cta: "Konsultasi Gratis",
    viewTemplates: "Lihat Template",
    viewDemo: "Lihat Demo",
    heroTitle: "Jasa Pembuatan Website Profesional",
    heroSubtitle:
      "Basscode Studio membantu bisnis Anda memiliki website modern, cepat, dan berfokus pada hasil.",
    aboutTitle: "Tentang Basscode Studio",
    aboutDesc:
      "Kami adalah digital agency yang fokus pada pembuatan website: landing page, company profile, restoran, sekolah, dan lainnya. Kami mengutamakan desain minimalis, performa, dan pengalaman pengguna.",
    quickFact: "Desain modern • Optimasi SEO • Performa cepat",
    serviceLanding: "Landing Page",
    serviceLandingDesc: "Konversi tinggi untuk campaign dan penjualan.",
    serviceCompany: "Company Profile",
    serviceCompanyDesc: "Profil perusahaan profesional dan terpercaya.",
    serviceRestaurant: "Website Restoran",
    serviceRestaurantDesc: "Menu online, reservasi, dan integrasi WhatsApp.",
    serviceSchool: "Website Sekolah / Edukasi",
    serviceSchoolDesc: "Informasi akademik dan publikasi kegiatan.",
    servicePortfolio: "Personal Portfolio",
    servicePortfolioDesc: "Tunjukkan karya dan pencapaian Anda.",
    serviceSaaS: "Startup / SaaS",
    serviceSaaSDesc: "Landing dan halaman produk untuk SaaS.",
    showcaseTitle: "Template Showcase",
    showcaseDesc:
      "Pilih kategori yang sesuai dengan kebutuhan Anda. Semua template dapat disesuaikan dengan brand dan konten bisnis Anda.",
    tempCafe: "Cafe / Restaurant",
    tempCafeDesc: "Tampilan elegan untuk restoran dan kafe modern.",
    tempLanding: "Landing Page",
    tempLandingDesc: "Fokus pada pesan dan CTA yang jelas.",
    tempCompany: "Company Profile",
    tempCompanyDesc: "Tampil profesional untuk meningkatkan kredibilitas.",
    tempPortfolio: "Personal Portfolio",
    tempPortfolioDesc: "Portofolio bersih dan atraktif.",
    tempSchool: "Website Sekolah / Edukasi",
    tempSchoolDesc: "Informasi sekolah, berita, dan galeri.",
    tempSaaS: "Website Startup / SaaS",
    tempSaaSDesc: "Tampilkan value produk dan fitur unggulan.",
    contactTitle: "Form Kerja Sama / Pemesanan",
    contactDesc:
      "Isi formulir berikut. Kami akan menghubungi Anda melalui WhatsApp dengan rincian yang Anda kirim.",
    formName: "Nama",
    formEmail: "Email",
    formCompany: "Perusahaan (opsional)",
    formBudget: "Estimasi Budget",
    formMessage: "Pesan",
    sendWhatsApp: "Kirim ke WhatsApp",
  },
  en: {
    cta: "Free Consultation",
    viewTemplates: "View Templates",
    viewDemo: "View Demo",
    heroTitle: "Professional Website Development Services",
    heroSubtitle:
      "Basscode Studio helps your business get a modern, fast website that drives results.",
    aboutTitle: "About Basscode Studio",
    aboutDesc:
      "We are a digital agency focused on building websites: landing pages, company profiles, restaurants, schools, and more. We prioritize minimal design, performance, and user experience.",
    quickFact: "Modern design • SEO optimization • Fast performance",
    serviceLanding: "Landing Page",
    serviceLandingDesc: "High conversion for campaigns and sales.",
    serviceCompany: "Company Profile",
    serviceCompanyDesc: "Professional and trustworthy company site.",
    serviceRestaurant: "Restaurant Website",
    serviceRestaurantDesc: "Online menu, reservations, WhatsApp integration.",
    serviceSchool: "School / Education Website",
    serviceSchoolDesc: "Academic info and activity publications.",
    servicePortfolio: "Personal Portfolio",
    servicePortfolioDesc: "Showcase your works and achievements.",
    serviceSaaS: "Startup / SaaS",
    serviceSaaSDesc: "Landing and product pages for SaaS.",
    showcaseTitle: "Template Showcase",
    showcaseDesc:
      "Choose the category that fits your needs. All templates can be customized to your brand and content.",
    tempCafe: "Cafe / Restaurant",
    tempCafeDesc: "Elegant look for modern restaurants and cafes.",
    tempLanding: "Landing Page",
    tempLandingDesc: "Focused on clear messaging and CTA.",
    tempCompany: "Company Profile",
    tempCompanyDesc: "Look professional to boost credibility.",
    tempPortfolio: "Personal Portfolio",
    tempPortfolioDesc: "Clean and attractive portfolio.",
    tempSchool: "School / Education Website",
    tempSchoolDesc: "School information, news, and gallery.",
    tempSaaS: "Startup / SaaS Website",
    tempSaaSDesc: "Show product value and key features.",
    contactTitle: "Collaboration / Order Form",
    contactDesc:
      "Fill in the form below. We'll contact you via WhatsApp with the details you sent.",
    formName: "Name",
    formEmail: "Email",
    formCompany: "Company (optional)",
    formBudget: "Estimated Budget",
    formMessage: "Message",
    sendWhatsApp: "Send to WhatsApp",
  },
};

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "id");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("color-scheme", "light");
    }
  }, [theme]);

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Hero
        t={t}
        lang={lang}
        theme={theme}
        onToggleLang={() => setLang((p) => (p === "id" ? "en" : "id"))}
        onToggleTheme={() => setTheme((p) => (p === "dark" ? "light" : "dark"))}
      />
      <AboutServices t={t} />
      <TemplateShowcase t={t} />
      <ContactFooter t={t} />
    </div>
  );
}
