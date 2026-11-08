import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/constants/assets";
import { ROUTES } from "@/constants/routes";

export default function Nav() {
  return (
    <nav aria-label="Main navigation">
      <Link href={ROUTES.home}>
        <Image
          src={ASSETS.brand.symbol}
          alt=""
          width={50}
          height={57}
        />
        <span>Show Pluss Expo</span>
      </Link>
      <ul>
        <li>
          <Link href={ROUTES.sections.about}>About Us</Link>
        </li>
        <li>
          <Link href={ROUTES.sections.services}>Services</Link>
        </li>
        <li>
          <Link href={ROUTES.sections.designProjects}>Design &amp; Projects</Link>
        </li>
        <li>
          <Link href={ROUTES.sections.travel}>Travel</Link>
        </li>
        <li>
          <Link href={ROUTES.sections.contact}>Get in touch</Link>
        </li>
      </ul>
    </nav>
  );
}
