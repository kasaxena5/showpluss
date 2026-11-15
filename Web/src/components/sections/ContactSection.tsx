import ContactForm from "@/components/forms/ContactForm";
import { EXTERNAL_LINKS } from "@/constants/external-links";
import { SECTION_IDS } from "@/constants/routes";
import "@/styles/contact.css";

export default function ContactSection() {
  return (
    <section id={SECTION_IDS.contact} className="contact" aria-labelledby="contact-heading">
      <div className="contact-content">
        <div className="contact-details">
          <h2 id="contact-heading" className="contact-heading">
            Ready to exhibit, visit or build your stand?
          </h2>
          <h3 className="contact-label">Give us a call!</h3>
          <p className="contact-phone">
            <a href={EXTERNAL_LINKS.contact.phone} className="contact-link">+91 9873000564</a>
          </p>
          <h3 className="contact-label">Show Pluss Expos</h3>
          <address className="contact-address">
            A-83, Pocket D
            <br />
            Okhla Phase II, Okhla Industrial Area
            <br />
            New Delhi, Delhi 110020
          </address>
          <h3 className="contact-label">Email</h3>
          <ul className="contact-emails">
            <li>
              General queries:{" "}
              <a href={EXTERNAL_LINKS.contact.generalQueries} className="contact-link">info@showpluss.com</a>
            </li>
            <li>
              Sales: <a href={EXTERNAL_LINKS.contact.sales} className="contact-link">sales@showpluss.com</a>
            </li>
            <li>
              Projects:{" "}
              <a href={EXTERNAL_LINKS.contact.projects} className="contact-link">projects@showpluss.com</a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
