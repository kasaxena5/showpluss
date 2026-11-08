import FeatureCard from "@/components/cards/FeatureCard";
import ProjectCard from "@/components/cards/ProjectCard";
import { ASSETS } from "@/constants/assets";
import { SECTION_IDS } from "@/constants/routes";

export default function DesignProjectsSection() {
  return (
    <section id={SECTION_IDS.designProjects}>
      <h2>Design &amp; Products</h2>
      <p>
        We build customised exhibition stalls tailor-made to your requirements.
        Our in-house team of experienced, trained stall designers creates vivid
        concepts from a detailed understanding of your exhibition objective.
      </p>
      <p>
        Our designers and builders work within your brand guidelines, so your
        stand looks right at every fair. We keep pace with the changing needs of
        our clients and match international standards, providing complete design,
        production and management services to maximise your effectiveness on the
        fairground.
      </p>
      <ul aria-label="Capabilities">
        <FeatureCard text="Latest CAD technology, quality graphics and printing" />
        <FeatureCard text="Skilled, experienced and creative designers" />
        <FeatureCard text="Quality furniture rentals, Timely construction and delivery" />
        <FeatureCard text="Advanced administration and logistics system" />
        <FeatureCard text="Highly skilled workforce" />
        <FeatureCard text="Excellent design development" />
      </ul>
      <ul aria-label="Projects">
        <ProjectCard
          caption="Exhibition stand"
          image={ASSETS.photographs.projectExhibitionStand}
        />
        <ProjectCard
          caption="Custom booth"
          image={ASSETS.photographs.projectExhibitionStand}
        />
        <ProjectCard
          caption="Brand-led design"
          image={ASSETS.photographs.projectExhibitionStand}
        />
        <ProjectCard
          caption="Trade fair build"
          image={ASSETS.photographs.projectExhibitionStand}
        />
        <ProjectCard
          caption="Stand graphics"
          image={ASSETS.photographs.projectExhibitionStand}
        />
        <ProjectCard
          caption="Large-format stand"
          image={ASSETS.photographs.projectExhibitionStand}
        />
      </ul>
    </section>
  );
}
