import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/constants/assets";
import { EXTERNAL_LINKS } from "@/constants/external-links";
import { ROUTES } from "@/constants/routes";

export default function Footer() {
  return (
    <footer>
      <Link href={ROUTES.home}>
        <Image
          src={ASSETS.brand.symbol}
          alt=""
          width={50}
          height={57}
        />
        <span>Show Pluss Expo</span>
      </Link>
      <nav aria-label="Social media">
        <ul>
          <li>
            <a href={EXTERNAL_LINKS.facebook}>Facebook</a>
          </li>
          <li>
            <a href={EXTERNAL_LINKS.twitter}>Twitter</a>
          </li>
          <li>
            <a href={EXTERNAL_LINKS.linkedIn}>LinkedIn</a>
          </li>
          <li>
            <a href={EXTERNAL_LINKS.instagram}>Instagram</a>
          </li>
        </ul>
      </nav>
      <small>&copy; Show Pluss Expos. All rights reserved.</small>
    </footer>
  );
}
