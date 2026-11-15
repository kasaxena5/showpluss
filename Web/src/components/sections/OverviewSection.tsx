import { SECTION_IDS } from "@/constants/routes";
import "@/styles/overview.css";

export default function OverviewSection() {
  return (
    <section id={SECTION_IDS.overview} className="overview" aria-labelledby="overview-heading">
      <div className="overview-content">
        <h2 id="overview-heading" className="overview-heading">
          Whether you are exhibiting or visiting,{" "}
          <span className="overview-heading-highlight">we open the door.</span>
        </h2>
        <p className="overview-description">
          We keep professional relationships with a large number of international
          and domestic trade associations, chambers of commerce and business
          councils. From the first event brief to full on-site support, our team
          gives you guidance, advice and a complete, professional service.
        </p>
      </div>
    </section>
  );
}
