"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "submitting" | "success" | "error";

const initial = {
  name: "",
  email: "",
  phone: "",
  address: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [data, setData] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof typeof initial, string>>>({});

  const validate = () => {
    const next: typeof errors = {};
    if (!data.name.trim()) next.name = t("required");
    if (!data.email.trim()) {
      next.email = t("required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = t("invalidEmail");
    }
    if (!data.message.trim()) next.message = t("required");
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setData(initial);
    } catch {
      setStatus("error");
    }
  };

  const onChange = (key: keyof typeof initial) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label={t("name")}
          required
          value={data.name}
          onChange={onChange("name")}
          placeholder={t("namePlaceholder")}
          error={errors.name}
        />
        <Field
          id="email"
          type="email"
          label={t("email")}
          required
          value={data.email}
          onChange={onChange("email")}
          placeholder={t("emailPlaceholder")}
          error={errors.email}
        />
        <Field
          id="phone"
          type="tel"
          label={t("phone")}
          value={data.phone}
          onChange={onChange("phone")}
          placeholder={t("phonePlaceholder")}
        />
        <Field
          id="address"
          label={t("address")}
          value={data.address}
          onChange={onChange("address")}
          placeholder={t("addressPlaceholder")}
        />
        <div className="sm:col-span-2">
          <Field
            id="subject"
            label={t("subject")}
            value={data.subject}
            onChange={onChange("subject")}
            placeholder={t("subjectPlaceholder")}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="input-label">
            {t("message")} <span className="text-brand-600">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={data.message}
            onChange={onChange("message")}
            placeholder={t("messagePlaceholder")}
            className={`input-field resize-y ${
              errors.message ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""
            }`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-red-600">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? t("submitting") : t("submit")}
        </button>

        <div className="min-h-[1.5rem] text-sm" aria-live="polite">
          {status === "success" && (
            <p className="font-medium text-emerald-600">{t("success")}</p>
          )}
          {status === "error" && (
            <p className="font-medium text-red-600">{t("error")}</p>
          )}
        </div>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="input-label">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`input-field ${
          error ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : ""
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
