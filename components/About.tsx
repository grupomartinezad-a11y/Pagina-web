import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">{t("title")}</span>
            <h2 className="section-title">{t("title")}</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t("description")}
            </p>
            <div className="mt-8">
              <a href="#services" className="btn-secondary">
                {t("cta")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-br from-brand-200 to-brand-400 opacity-50 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white shadow-2xl shadow-brand-900/20">
              <div className="grid grid-cols-2 gap-6">
                <Stat value="+200" label="Campaigns delivered" />
                <Stat value="98%" label="Client satisfaction" />
                <Stat value="x3" label="Average ROI uplift" />
                <Stat value="24/7" label="Performance tracking" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
      <div className="text-3xl font-bold tracking-tight">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-100">
        {label}
      </div>
    </div>
  );
}
