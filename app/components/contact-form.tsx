"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const projectType = String(data.get("projectType") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(
      `[Fangs Dev Project Inquiry] ${projectType} — ${name}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Project type: ${projectType}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
    );

    setStatus("Your message is ready. Opening your email app…");
    window.location.href = `mailto:fang@fangs.dev?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="company">Company / team</label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
          />
        </div>
        <div className="field">
          <label htmlFor="projectType">I&apos;m interested in</label>
          <select id="projectType" name="projectType" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            <option value="Website development">Website development</option>
            <option value="App development">App development</option>
            <option value="Website + App">Website + App</option>
            <option value="Other collaboration">Other collaboration</option>
          </select>
        </div>
      </div>

      <div className="field field-message">
        <label htmlFor="message">Tell us about the project</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What are you creating, improving, or rethinking?"
          required
        />
      </div>

      <div className="form-submit">
        <p aria-live="polite">{status}</p>
        <button type="submit">
          Send an inquiry
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}
