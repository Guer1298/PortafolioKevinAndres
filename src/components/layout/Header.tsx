import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { navigationItems } from "../../data/navigation.data";
import clsx from "clsx";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navigationItems.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(navigationItems[index].href);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx("header", {
        "header--scrolled": scrolled,
      })}
    >
      <Container>
        <nav className="nav">
          {/* Logo */}
          <div className="nav__logo">KevinAndrés</div>

          {/* Navigation */}
          <ul className="nav__links">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={clsx("nav__link", {
                    "nav__link--active": active === item.href,
                  })}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="nav__cta">
            <a href="#contact">
              <Button size="sm">Contact</Button>
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;