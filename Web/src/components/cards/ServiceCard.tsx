import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <li className="service-card">
      <Image className="service-card-image" src={image} alt="" width={144} height={144} />
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
      </div>
    </li>
  );
}
