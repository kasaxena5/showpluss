import Image from "next/image";

type TravelServiceCardProps = {
  title: string;
  image: string;
};

export default function TravelServiceCard({ title, image }: TravelServiceCardProps) {
  return (
    <li className="travel-card">
      <Image className="travel-card-image" src={image} alt="" width={100} height={80} />
      <h3 className="travel-card-title">{title}</h3>
    </li>
  );
}
