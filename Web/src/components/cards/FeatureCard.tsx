type FeatureCardProps = {
  text: string;
};

export default function FeatureCard({ text }: FeatureCardProps) {
  return (
    <li className="feature-card">
      <span className="feature-card-icon" aria-hidden="true">+</span>
      <span>{text}</span>
    </li>
  );
}
