import Image from "next/image";

type CountryFlagProps = {
  label: string;
  image: string;
};

export default function CountryFlag({ label, image }: CountryFlagProps) {
  return (
    <li>
      <Image src={image} alt="" width={30} height={30} />
      <span>{label}</span>
    </li>
  );
}
