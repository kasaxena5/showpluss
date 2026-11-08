type FeatureCardProps = {
  text: string;
};

export default function FeatureCard({ text }: FeatureCardProps) {
  return (
    <li>
      <span aria-hidden="true">+</span> {text}
    </li>
  );
}
