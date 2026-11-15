import Image from "next/image";

type CountryFlagProps = {
  label: string;
  image: string;
};

export default function CountryFlag({ label, image }: CountryFlagProps) {
  return (
    <li className="country-flag">
      <Image className="country-flag-image" src={image} alt="" width={84} height={56} />
      <span className="country-flag-label">{label}</span>
    </li>
  );
}
