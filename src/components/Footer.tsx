import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1a4jDPwoT2/" ,label: t("footer.social.facebook") },
    { icon: Instagram, href: "https://www.instagram.com/swamiraj1305?igsh=MTc3czRkaXF3cHdmcA==", label: t("footer.social.instagram") },
    //{ icon: Youtube, href: "#", label: t("footer.social.youtube") },
    //{ icon: Twitter, href: "#", label: t("footer.social.twitter") },
  ];

  const quickLinks = [
    { href: "#home", label: t("footer.home") },
    { href: "#about", label: t("footer.about") },
    { href: "#services", label: t("footer.services") },
    { href: "#work", label: t("footer.work") },
    { href: "#contact", label: t("footer.contact") },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/logo1.png" 
                alt="Swamiraj Media Logo" 
                className="w-16 h-16 rounded-lg object-contain"
              />
              <span className="font-bold text-xl">Swamiraj Media</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              {t("footer.brand.tagline")} {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t("footer.contactInfo")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  {t("contact.info.address.value")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+918055981010"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +91 9371657373
                </a>
                <a href="tel:+918055981010"  className="text-primary-foreground/70 hover:text-accent transition-colors">+91 8459217214</a>
              </li>
               {/* <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+918055981010"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +91 8459217214 
                </a>
              </li> */}
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:swamirajmedia@gmail.com"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  swamirajmedia1305@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col md:flex-row  items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Swamiraj Media. {t("footer.rights")}
            </p>
            <a href="https://www.infiinofy.com/" target="_blank">
            <p className="text-primary-foreground/100 text-sm">
              Developed by INFIINOFY</p></a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
