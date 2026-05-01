import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[-10%] h-[22rem] w-[22rem] rounded-full bg-brand-300/30 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow animate-fade-in">
            {t("eyebrow")}
          </span>
          <h1 className="animate-slide-up text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 animate-slide-up text-base leading-relaxed text-slate-600 sm:text-lg">
            {t("description")}
          </p>
          <div className="mt-10 flex animate-slide-up items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">
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
      </div>
    </section>
  );
}
