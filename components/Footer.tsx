import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");
  const tSite = useTranslations("site");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 2 4 6v6c0 5 3.5 9.4 8 10 4.5-.6 8-5 8-10V6l-8-4z" />
                </svg>
              </span>
              <span className="text-base font-bold">{tSite("name")}</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">{t("tagline")}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {tNav("contact")}
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${tContact("email")}`}
                  className="text-slate-300 transition hover:text-brand-400"
                >
                  {tContact("email")}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${tContact("phone").replace(/\s/g, "")}`}
                  className="text-slate-300 transition hover:text-brand-400"
                >
                  {tContact("phone")}
                </a>
              </li>
              <li className="text-slate-400">{tContact("address")}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {tNav("privacy")}
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-300 transition hover:text-brand-400"
                >
                  {tNav("privacy")}
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-300 transition hover:text-brand-400"
                >
                  {tNav("about")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-300 transition hover:text-brand-400"
                >
                  {tNav("services")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            &copy; {year}{" "}
            <span className="font-semibold text-white">{t("legal")}</span>
            {" · "}
            <span>{t("nit")}</span>
            {" · "}
            <span>{t("rights")}</span>
          </p>
          <p>
            <a
              href={`mailto:${tContact("email")}`}
              className="text-slate-400 transition hover:text-brand-400"
            >
              {tContact("email")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
