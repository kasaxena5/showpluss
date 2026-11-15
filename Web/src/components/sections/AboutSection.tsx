import { SECTION_IDS } from "@/constants/routes";
import "@/styles/about-services.css";

export default function AboutSection() {
  return (
    <section id={SECTION_IDS.about} className="about" aria-labelledby="about-heading">
      <div className="about-services-content about-intro">
        <h2 id="about-heading" className="about-services-heading">About us</h2>
        <div className="about-services-description">
          <p>
            Show Pluss Expos represents and organises international trade promotions
            to a premium standard, with support from leading Government Agencies,
            Chambers of Commerce, Federations and Trade Associations.
          </p>
          <p>
            We are committed to conceptualising tailored exhibition solutions that
            assist, enlarge and strengthen international trade. Our focus is quality
            service and a lasting commitment to Indian exporters.
          </p>
        </div>
      </div>
    </section>
  );
}
