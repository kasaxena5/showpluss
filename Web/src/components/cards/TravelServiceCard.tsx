import Image from "next/image";

type TravelServiceCardProps = {
  title: string;
  image: string;
};

export default function TravelServiceCard({ title, image }: TravelServiceCardProps) {
  return (
    <li>
      <Image src={image} alt="" width={30} height={30} />
      <h3>{title}</h3>
    </li>
  );
}
