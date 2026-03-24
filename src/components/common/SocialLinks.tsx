import clsx from "clsx";
import { contactLinks } from "../../features/contact/contact.data";

type Variant = "default" | "minimal" | "pill";

type SocialLinksProps = {
  variant?: Variant;
  align?: "left" | "center";
};

function SocialLinks({ variant = "default", align = "center" }: SocialLinksProps) {
  return (
    <ul
      className={clsx(
        "social-links",
        `social-links--${variant}`,
        `social-links--${align}`
      )}
    >
      {contactLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="social-link"
          >
            <span className="social-link__icon">
              {getIcon(link.label)}
            </span>

            <span className="social-link__text">
              {link.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;

/* simple icon mapper */
function getIcon(label: string) {
  switch (label.toLowerCase()) {
    case "github":
      return "🐙";
    case "linkedin":
      return "💼";
    case "email":
      return "✉️";
    default:
      return "🔗";
  }
}