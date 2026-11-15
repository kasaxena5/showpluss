import TravelServiceCard from "@/components/cards/TravelServiceCard";
import { ASSETS } from "@/constants/assets";
import { SECTION_IDS } from "@/constants/routes";
import "@/styles/travel.css";

export default function TravelSection() {
  return (
    <section id={SECTION_IDS.travel} className="travel" aria-labelledby="travel-heading">
      <div className="travel-content">
        <div className="travel-intro">
          <h2 id="travel-heading" className="travel-heading">
            Travel, lodging and currency exchange{" "}
            <span className="travel-heading-highlight">in one place</span>
          </h2>
          <div className="travel-description">
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
          </div>
        </div>
        <ul className="travel-services">
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
      </div>
    </section>
  );
}
