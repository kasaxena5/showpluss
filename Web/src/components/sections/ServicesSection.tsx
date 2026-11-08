import ServiceCard from "@/components/cards/ServiceCard";
import { ASSETS } from "@/constants/assets";
import { SECTION_IDS } from "@/constants/routes";

export default function ServicesSection() {
  return (
    <section id={SECTION_IDS.services}>
      <h2>Our Services</h2>
      <ul>
        <ServiceCard
          title="International exhibitions"
          description="Representation of international exhibitions worldwide."
          image={ASSETS.illustrations.services.internationalExhibitions}
        />
        <ServiceCard
          title="Assisting Indian exhibitors and visitor delegations"
          description="To trade fairs overseas, and vice versa."
          image={ASSETS.illustrations.services.exhibitorDelegations}
        />
        <ServiceCard
          title="Travel assistance"
          description="Hotels, tickets, visas and tours for business travellers, handled for you."
          image={ASSETS.illustrations.services.travelAssistance}
        />
        <ServiceCard
          title="Trade fair logistics"
          description="Shipping and handling for your stand and products, so everything arrives on time."
          image={ASSETS.illustrations.services.tradeFairLogistics}
        />
        <ServiceCard
          title="Design & construction"
          description="Exhibition space designed and built in India and overseas."
          image={ASSETS.illustrations.services.designConstruction}
        />
        <ServiceCard
          title="Design & construction"
          description="Exhibition space designed and built in India and overseas."
          image={ASSETS.illustrations.services.travelDelegations}
        />
      </ul>
    </section>
  );
}
