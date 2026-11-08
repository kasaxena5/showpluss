import ContactForm from "@/components/forms/ContactForm";
import { EXTERNAL_LINKS } from "@/constants/external-links";
import { SECTION_IDS } from "@/constants/routes";

export default function ContactSection() {
  return (
    <section id={SECTION_IDS.contact}>
      <h2>Ready to exhibit, visit or build your stand?</h2>
      <h3>Give us a call!</h3>
      <p>
        <a href={EXTERNAL_LINKS.contact.phone}>+91 9873000564</a>
      </p>
      <h3>Show Pluss Expos</h3>
      <address>
        A-83, Pocket D
        <br />
        Okhla Phase II, Okhla Industrial Area
        <br />
        New Delhi, Delhi 110020
      </address>
      <h3>Email</h3>
      <ul>
        <li>
          General queries:{" "}
          <a href={EXTERNAL_LINKS.contact.generalQueries}>info@showpluss.com</a>
        </li>
        <li>
          Sales: <a href={EXTERNAL_LINKS.contact.sales}>sales@showpluss.com</a>
        </li>
        <li>
          Projects:{" "}
          <a href={EXTERNAL_LINKS.contact.projects}>projects@showpluss.com</a>
        </li>
      </ul>
      <ContactForm />
    </section>
  );
}
