import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{t("title")}</span>
          <h2 className="section-title">{t("title")}</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <aside className="lg:col-span-2">
            <div className="rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-7 text-white shadow-xl shadow-brand-900/20">
              <h3 className="text-lg font-semibold">{t("infoTitle")}</h3>
              <p className="mt-2 text-sm text-brand-100">
                Social Digital Pro 2024 SAS
              </p>

              <ul className="mt-6 space-y-5 text-sm">
                <InfoRow
                  label={t("addressLabel")}
                  value={t("address")}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  }
                />
                <InfoRow
                  label={t("emailLabel")}
                  value={t("email")}
                  href={`mailto:${t("email")}`}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  }
                />
                <InfoRow
                  label={t("phoneLabel")}
                  value={t("phone")}
                  href={`tel:${t("phone").replace(/\s/g, "")}`}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  }
                />
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
}) {
  const content = (
    <span className="text-brand-50 transition group-hover:text-white">
      {value}
    </span>
  );
  return (
    <li className="group flex items-start gap-4">
      <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-100">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-200">
          {label}
        </span>
        {href ? (
          <a href={href} className="block">
            {content}
          </a>
        ) : (
          content
        )}
      </span>
    </li>
  );
}
