import React from "react";

export default function Contactform() {
  return (
    <form
      method="POST"
      className="contact-form"
      name="contact-form"
      data-netlify="true"
      netlify
      onSubmit="submit"
      id="contact-form"
      netlify-honeypot="bot-field"
      action="/success/"
    >
      <fieldset className="form-fields">
        <legend className="form-heading hero-form-wobble">Get in Touch</legend>

        <input type="hidden" name="form-name" value="contact-form" />

        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="form-input"
          placeholder="Name"
          required
          id="name"
        />

        <label htmlFor="business" className="form-label">
          Business
        </label>
        <input
          type="text"
          name="business"
          className="form-input"
          placeholder="Business"
          id="business"
        />

        <label htmlFor="email-address" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          name="email-address"
          className="form-input"
          placeholder="email@emailaddress.com"
          required
          id="email-address"
        />

        <label htmlFor="phone-number" className="form-label">
          Phone Number
        </label>
        <input
          type="number"
          name="phone-number"
          className="form-input"
          placeholder="phone number"
          required
          id="phone-number"
        />

        <label htmlFor="message-content" className="form-label">
          Message
        </label>
        <textarea
          className="form-message"
          name="message-content"
          cols="30"
          rows="10"
          id="message-content"
          required
          placeholder="Enter your message..."
        />
      </fieldset>

      <div className="form-button-container">
        <button
          name="submit-button"
          className="orange-link"
          id="submit-button"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
