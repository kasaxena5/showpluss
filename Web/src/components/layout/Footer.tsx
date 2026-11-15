import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/constants/assets";
import { EXTERNAL_LINKS } from "@/constants/external-links";
import { ROUTES } from "@/constants/routes";
import "@/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Link href={ROUTES.home} className="footer-brand">
        <Image
          className="footer-logo"
          src={ASSETS.brand.symbol}
          alt=""
          width={60}
          height={69}
        />
        <span>Show Pluss Expo</span>
      </Link>
      <nav className="footer-socials" aria-label="Social media">
        <ul className="footer-links">
          <li>
            <a href={EXTERNAL_LINKS.facebook} className="footer-link">Facebook</a>
          </li>
          <li>
            <a href={EXTERNAL_LINKS.twitter} className="footer-link">Twitter</a>
          </li>
          <li>
            <a href={EXTERNAL_LINKS.linkedIn} className="footer-link">LinkedIn</a>
          </li>
          <li>
            <a href={EXTERNAL_LINKS.instagram} className="footer-link">Instagram</a>
          </li>
        </ul>
      </nav>
      <small className="footer-copyright">&copy; Show Pluss Expos. All rights reserved.</small>
    </footer>
  );
}
