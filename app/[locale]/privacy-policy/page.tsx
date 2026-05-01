import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Link, routing } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "privacy" });
  return {
    title: t("title"),
    description: t("intro"),
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("privacy");
  const tNav = await getTranslations("nav");

  const sections = [
    { title: t("sections.whatTitle"), body: t("sections.whatBody") },
    { title: t("sections.whenTitle"), body: t("sections.whenBody") },
    { title: t("sections.howTitle"), body: t("sections.howBody") },
    {
      title: t("sections.deleteServerTitle"),
      body: t("sections.deleteServerBody"),
    },
    {
      title: t("sections.deleteLocalTitle"),
      body: t("sections.deleteLocalBody"),
    },
    { title: t("sections.cookiesTitle"), body: t("sections.cookiesBody") },
    {
      title: t("sections.cookiesUseTitle"),
      body: t("sections.cookiesUseBody"),
    },
    {
      title: t("sections.thirdPartyTitle"),
      body: t("sections.thirdPartyBody"),
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 sm:py-20">
        <nav className="mb-8 text-sm">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-brand-700 hover:text-brand-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {tNav("home")}
          </Link>
        </nav>

        <header className="mb-10 border-b border-slate-200 pb-8">
          <span className="section-eyebrow">{tNav("privacy")}</span>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {t("intro")}
          </p>
        </header>

        <div className="space-y-8">
          {sections.map((s) => (
            <article key={s.title}>
              <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                {s.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
