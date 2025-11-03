import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const footerLinks = [
    {
      title: 'دسترسی سریع',
      links: [
        { label: 'معرفی', href: '#introduction' },
        { label: 'داستان ما', href: '#story' },
        { label: 'ملزومات اداری', href: '#office-supplies' },
        { label: 'پت‌شاپ', href: '#pet-shop' },
      ],
    },
    {
      title: 'خدمات',
      links: [
        { label: 'تأمین محصولات', href: '#office-supplies' },
        { label: 'واردات عمده', href: '#pet-shop' },
        { label: 'برندینگ اختصاصی', href: '#philosophy' },
        { label: 'همکاری B2B', href: '#introduction' },
      ],
    },
  ];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, text: 'info@sahandapex.com' },
    { icon: <Phone className="w-5 h-5" />, text: '+98 21 1234 5678' },
    { icon: <MapPin className="w-5 h-5" />, text: 'تهران، ایران' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground" dir="rtl">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-accent">Sahand Apex</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              گروه سهند اپکس با مدیریت سهند رنجبری‌پور، تامین‌کننده و واردکننده محصولات B2B در حوزه ملزومات اداری و پت‌شاپ برای کسب‌وکارها.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  {item.icon}
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <p>
              &copy; {new Date().getFullYear()} Sahand Apex. تمامی حقوق محفوظ است.
            </p>
            <p>
              — گروه <strong className="text-accent">Sahand Apex</strong> به مدیریت <strong className="text-primary-foreground">سهند رنجبری‌پور</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
