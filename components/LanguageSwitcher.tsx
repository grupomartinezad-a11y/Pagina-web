"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: (typeof routing.locales)[number]) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-xs font-semibold shadow-sm"
      role="group"
      aria-label={t("switch")}
    >
      {routing.locales.map((code) => {
        const isActive = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchTo(code)}
            disabled={isPending || isActive}
            aria-pressed={isActive}
            className={`min-w-[36px] rounded-full px-3 py-1.5 transition ${
              isActive
                ? "bg-brand-600 text-white shadow"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {code === "en" ? t("enShort") : t("esShort")}
          </button>
        );
      })}
    </div>
  );
}
