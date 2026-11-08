import ServiceCard from "@/components/cards/ServiceCard";
import CategoryChip from "@/components/chips/CategoryChip";
import CountryFlag from "@/components/flags/CountryFlag";
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
      <h3>Product segments we cater to</h3>
      <ul aria-label="Product categories">
        <CategoryChip label="Plastics, Printing & Packaging" />
        <CategoryChip label="Building Material & Construction Equipments" />
        <CategoryChip label="Engineering" />
        <CategoryChip label="ICT & Telecom" />
        <CategoryChip label="Oil & Gas" />
        <CategoryChip label="Energy" />
        <CategoryChip label="Health & Pharma" />
        <CategoryChip label="Food Processing & Packaging" />
        <CategoryChip label="Housewares" />
        <CategoryChip label="Home Furnishings & Textiles" />
        <CategoryChip label="Food & Drink" />
        <CategoryChip label="Apparel" />
        <CategoryChip label="Beauty & Cosmetics" />
        <CategoryChip label="Fashion Accessories" />
        <CategoryChip label="Leather" />
        <CategoryChip label="Gifts & Handicrafts" />
        <CategoryChip label="Food Ingredients" />
      </ul>
      <h3>Exhibition design and management worldwide</h3>
      <p>
        We keep professional relationships with a large number of international
        and domestic trade associations, chambers of commerce and business
        councils. From the first event brief to full on-site support, our team
        gives you guidance, advice and a complete, professional service.
      </p>
      <ul aria-label="Countries and regions">
        <CountryFlag label="India" image={ASSETS.countries.india} />
        <CountryFlag label="China" image={ASSETS.countries.china} />
        <CountryFlag label="Japan" image={ASSETS.countries.japan} />
        <CountryFlag label="Australia" image={ASSETS.countries.australia} />
        <CountryFlag label="Singapore" image={ASSETS.countries.singapore} />
        <CountryFlag label="Vietnam" image={ASSETS.countries.vietnam} />
        <CountryFlag label="Sri Lanka" image={ASSETS.countries.sriLanka} />
        <CountryFlag label="Middle East" image={ASSETS.countries.middleEast} />
        <CountryFlag label="Turkey" image={ASSETS.countries.turkey} />
        <CountryFlag label="CIS Region" image={ASSETS.countries.cisRegion} />
        <CountryFlag label="Africa" image={ASSETS.countries.africa} />
        <CountryFlag label="Europe" image={ASSETS.countries.europe} />
        <CountryFlag label="USA" image={ASSETS.countries.usa} />
      </ul>
    </section>
  );
}
