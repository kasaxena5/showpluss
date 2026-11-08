import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <li>
      <Image src={image} alt="" width={30} height={30} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
