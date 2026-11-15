export default function ContactForm() {
  return (
    <form className="contact-form" method="post" aria-labelledby="contact-form-heading">
      <h3 id="contact-form-heading" className="contact-form-heading">Online query</h3>
      <div className="contact-form-fields">
        <div className="contact-field">
          <label htmlFor="contact-name">Name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-phone">Phone</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-company">Company name</label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
          />
        </div>
        <div className="contact-field contact-field-wide">
          <label htmlFor="contact-subject">Subject *</label>
          <input id="contact-subject" name="subject" type="text" required />
        </div>
        <div className="contact-field contact-field-wide">
          <label htmlFor="contact-message">Message *</label>
          <textarea id="contact-message" name="message" rows={4} required />
        </div>
      </div>
      <button
        className="contact-submit"
        type="submit"
        disabled
        aria-describedby="contact-form-status"
      >
        Send message
      </button>
      <p id="contact-form-status" className="contact-form-status">
        Message submission is not available yet.
      </p>
    </form>
  );
}
