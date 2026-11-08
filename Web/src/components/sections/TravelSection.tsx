import TravelServiceCard from "@/components/cards/TravelServiceCard";
import { ASSETS } from "@/constants/assets";
import { SECTION_IDS } from "@/constants/routes";

export default function TravelSection() {
  return (
    <section id={SECTION_IDS.travel}>
      <h2>Travel, lodging and currency exchange in one place</h2>
      <p>
        Show Pluss Expos is a one stop shop for our clients in all their travel,
        lodging and currency exchange requirements in all parts of the world.
        The company aims at providing travel and hospitality services to inbound
        and outbound business travellers. This includes arranging an entire
        spectrum of services, including hotel stay, domestic and international
        ticketing, visa assistance, as well as sightseeing tours.
      </p>
      <p>
        We understand the diversity of each traveler&rsquo;s requirements and
        expectations and this forms the very basis of our philosophy.
      </p>
      <ul>
        <TravelServiceCard
          title="Hotel Stay"
          image={ASSETS.illustrations.travel.hotelStay}
        />
        <TravelServiceCard
          title="Domestic and International Ticketing"
          image={ASSETS.illustrations.travel.ticketing}
        />
        <TravelServiceCard
          title="Visa Assistance"
          image={ASSETS.illustrations.travel.visaAssistance}
        />
        <TravelServiceCard
          title="Sightseeing Tours"
          image={ASSETS.illustrations.travel.sightseeingTours}
        />
      </ul>
    </section>
  );
}
