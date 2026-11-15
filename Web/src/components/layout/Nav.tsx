import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/constants/assets";
import { ROUTES } from "@/constants/routes";
import "@/styles/nav.css";

export default function Nav() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link href={ROUTES.home} className="navbar-brand">
        <Image
          className="navbar-logo"
          src={ASSETS.brand.symbol}
          alt=""
          width={50}
          height={57}
        />
        <span>Show Pluss Expo</span>
      </Link>
      <ul className="navbar-links">
        <li>
          <Link href={ROUTES.sections.about} className="navbar-link">About Us</Link>
        </li>
        <li>
          <Link href={ROUTES.sections.services} className="navbar-link">Services</Link>
        </li>
        <li>
          <Link href={ROUTES.sections.designProjects} className="navbar-link">Design &amp; Projects</Link>
        </li>
        <li>
          <Link href={ROUTES.sections.travel} className="navbar-link">Travel</Link>
        </li>
        <li>
          <Link href={ROUTES.sections.contact} className="navbar-cta">Get in touch</Link>
        </li>
      </ul>
    </nav>
  );
}
