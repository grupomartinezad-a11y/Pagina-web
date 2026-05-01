import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

const serviceKeys = ["ppc", "smm", "content"] as const;

const icons: Record<(typeof serviceKeys)[number], ReactNode> = {
  ppc: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  smm: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  content: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <line x1="2" y1="2" x2="9.586" y2="9.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
};

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="bg-slate-50">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{t("title")}</span>
          <h2 className="section-title">{t("title")}</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {serviceKeys.map((key) => (
            <article
              key={key}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                {icons[key]}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {t(`items.${key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
