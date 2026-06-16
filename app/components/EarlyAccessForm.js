"use client";

import { useEffect, useId, useState } from "react";
import { countryCodes } from "../lib/content";

const initialState = {
  name: "",
  workEmail: "",
  companyName: "",
  country: "",
  socialProfileUrl: "",
  role: "",
  message: "",
  companyWebsite: ""
};

function getCountryOptions(locale) {
  const displayNames = new Intl.DisplayNames([locale], { type: "region" });

  return countryCodes
    .map((code) => ({
      code,
      label: displayNames.of(code) || code
    }))
    .sort((a, b) => a.label.localeCompare(b.label, locale));
}

export function EarlyAccessForm({ content, locale }) {
  const id = useId();
  const [countryOptions, setCountryOptions] = useState([]);
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const { earlyAccess, form } = content;

  useEffect(() => {
    setCountryOptions(getCountryOptions(locale));
  }, [locale]);

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale })
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || form.errors.generic);
      }

      setStatus("success");
      setValues(initialState);
    } catch (submitError) {
      setStatus("error");
      setError(submitError.message);
    }
  }

  return (
    <form className="access-form" onSubmit={submitForm} noValidate>
      <div className="honeypot-field" aria-hidden="true">
        <label htmlFor={`${id}-companyWebsite`}>{form.hiddenCompanyWebsite}</label>
        <input
          id={`${id}-companyWebsite`}
          name="companyWebsite"
          value={values.companyWebsite}
          onChange={updateField}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor={`${id}-name`}>{form.labels.name}</label>
          <input
            id={`${id}-name`}
            name="name"
            value={values.name}
            onChange={updateField}
            placeholder={form.placeholders.name}
            autoComplete="name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor={`${id}-workEmail`}>{form.labels.workEmail}</label>
          <input
            id={`${id}-workEmail`}
            name="workEmail"
            type="email"
            value={values.workEmail}
            onChange={updateField}
            placeholder={form.placeholders.workEmail}
            autoComplete="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor={`${id}-companyName`}>{form.labels.companyName}</label>
          <input
            id={`${id}-companyName`}
            name="companyName"
            value={values.companyName}
            onChange={updateField}
            placeholder={form.placeholders.companyName}
            autoComplete="organization"
          />
        </div>
        <div className="field">
          <label htmlFor={`${id}-country`}>{form.labels.country}</label>
          <select
            id={`${id}-country`}
            name="country"
            value={values.country}
            onChange={updateField}
            autoComplete="country-name"
          >
            <option value="">{form.placeholders.country}</option>
            {countryOptions.map((country) => (
              <option key={country.code} value={country.code}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor={`${id}-socialProfileUrl`}>{form.labels.socialProfileUrl}</label>
          <input
            id={`${id}-socialProfileUrl`}
            name="socialProfileUrl"
            value={values.socialProfileUrl}
            onChange={updateField}
            placeholder={form.placeholders.socialProfileUrl}
            autoComplete="url"
          />
        </div>
        <div className="field full">
          <label htmlFor={`${id}-role`}>{form.labels.role}</label>
          <select id={`${id}-role`} name="role" value={values.role} onChange={updateField} required>
            <option value="">{form.placeholders.role}</option>
            {form.roles.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor={`${id}-message`}>{form.labels.message}</label>
          <textarea
            id={`${id}-message`}
            name="message"
            value={values.message}
            onChange={updateField}
            placeholder={form.placeholders.message}
          />
        </div>
      </div>
      <button className="button button-cyan form-button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? form.submitting : form.submit}
      </button>
      <div className="form-status" aria-live="polite">
        {status === "success" ? <p className="success-message">{earlyAccess.success}</p> : null}
        {status === "error" ? <p className="error-message">{error}</p> : null}
      </div>
    </form>
  );
}
