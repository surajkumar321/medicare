// import React from "react";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Youtube,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
//   Send,
//   Stethoscope,
//   Activity,
// } from "lucide-react";
// import logo from "../../assets/logo.png";
// import { footerStyles } from "../../assets/dummyStyles";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { name: "Home", href: "/" },
//     { name: "Doctors", href: "/doctors" },
//     { name: "Services", href: "/services" },
//     { name: "Contact", href: "/contact" },
//     { name: "Appointments", href: "/appointments" },
//   ];

//   const services = [
//     { name: "Blood Pressure Check", href: "/services" },
//     { name: "Blood Sugar Test", href: "/services" },
//     { name: "Full Blood Count", href: "/services" },
//     { name: "X-Ray Scan", href: "/services" },
//     { name: "Blood Sugar Test", href: "/services" },
//   ];

//   const socialLinks = [
//     {
//       Icon: Facebook,
//       color: footerStyles.facebookColor,
//       name: "Facebook",
//       href: "https://www.facebook.com/people/Hexagon-Digital-Services/61567156598660/",
//     },
//     {
//       Icon: Twitter,
//       color: footerStyles.twitterColor,
//       name: "Twitter",
//       href: "https://www.linkedin.com/company/hexagondigtial-services/",
//     },
//     {
//       Icon: Instagram,
//       color: footerStyles.instagramColor,
//       name: "Instagram",
//       href: "http://instagram.com/hexagondigitalservices?igsh=MWp2NG1oNTlibWVnZA%3D%3D",
//     },
//     {
//       Icon: Linkedin,
//       color: footerStyles.linkedinColor,
//       name: "LinkedIn",
//       href: "https://www.linkedin.com/company/hexagondigtial-services/",
//     },
//     {
//       Icon: Youtube,
//       color: footerStyles.youtubeColor,
//       name: "YouTube",
//       href: "https://youtube.com/@hexagondigitalservices?si=lxEFYNCP42t6AoDJ",
//     },
//   ];

//   return (
//     <footer className={footerStyles.footerContainer}>
//       {/* Floating Medical Icons */}
//       <div className={footerStyles.floatingIcon1}>
//         <Stethoscope className={footerStyles.stethoscopeIcon} />
//       </div>

//       <div
//         className={footerStyles.floatingIcon2}
//         style={{ animationDelay: "3s" }}
//       >
//         <Activity className={footerStyles.activityIcon} />
//       </div>

//       {/* Main Footer Content */}
//       <div className={footerStyles.mainContent}>
//         <div className={footerStyles.gridContainer}>
//           {/* Company Info & Logo */}
//           <div className={footerStyles.companySection}>
//             <div className={footerStyles.logoContainer}>
//               <div className={footerStyles.logoWrapper}>
//                 <div className={footerStyles.logoImageContainer}>
//                   <img
//                     src={logo}
//                     alt="MedBook Logo"
//                     className={footerStyles.logoImage}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <h2 className={footerStyles.companyName}>MediCare</h2>
//                 <p className={footerStyles.companyTagline}>
//                   Healthcare Solutions
//                 </p>
//               </div>
//             </div>

//             <p className={footerStyles.companyDescription}>
//               Your trusted partner in healthcare innovation. We're committed to
//               providing exceptional medical care with cutting-edge technology
//               and compassionate service.
//             </p>

//             <div className={footerStyles.contactContainer}>
//               <div className={footerStyles.contactItem}>
//                 <div className={footerStyles.contactIconWrapper}>
//                   <Phone className={footerStyles.contactIcon} />
//                 </div>
//                 <span className={footerStyles.contactText}>+91 9198829569</span>
//               </div>
//               <div className={footerStyles.contactItem}>
//                 <div className={footerStyles.contactIconWrapper}>
//                   <Mail className={footerStyles.contactIcon} />
//                 </div>
//                 <span className={footerStyles.contactText}>
//                   surajdharmraj7@gmail.com
//                 </span>
//               </div>
//               <div className={footerStyles.contactItem}>
//                 <div className={footerStyles.contactIconWrapper}>
//                   <MapPin className={footerStyles.contactIcon} />
//                 </div>
//                 <span className={footerStyles.contactText}>prayagraj, India</span>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className={footerStyles.linksSection}>
//             <h3 className={footerStyles.sectionTitle}>Quick Links</h3>
//             <ul className={footerStyles.linksList}>
//               {quickLinks.map((link, index) => (
//                 <li key={link.name} className={footerStyles.linkItem}>
//                   <a
//                     href={link.href}
//                     className={footerStyles.quickLink}
//                     aria-label={link.name}
//                     style={{ animationDelay: `${index * 60}ms` }}
//                   >
//                     <div className={footerStyles.quickLinkIconWrapper}>
//                       <ArrowRight className={footerStyles.quickLinkIcon} />
//                     </div>
//                     <span>{link.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div className={footerStyles.linksSection}>
//             <h3 className={footerStyles.sectionTitle}>Our Services</h3>
//             <ul className={footerStyles.linksList}>
//               {services.map((service, index) => (
//                 <li key={service.name}>
//                   <a href={service.href} className={footerStyles.serviceLink}>
//                     <div className={footerStyles.serviceIcon} />
//                     <span>{service.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter & Social */}
//           <div className={footerStyles.newsletterSection}>
//             <h3 className={footerStyles.newsletterTitle}>Stay Connected</h3>
//             <p className={footerStyles.newsletterDescription}>
//               Subscribe for health tips, medical updates, and wellness insights
//               delivered to your inbox.
//             </p>

//             {/* Newsletter form */}
//             <div className={footerStyles.newsletterForm}>
//               {/* Mobile newsletter */}
//               <div className={footerStyles.mobileNewsletterContainer}>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className={footerStyles.emailInput}
//                   aria-label="Email"
//                 />
//                 <button className={footerStyles.mobileSubscribeButton}>
//                   <Send className={footerStyles.mobileButtonIcon} />
//                   Subscribe
//                 </button>
//               </div>

//               {/* Desktop newsletter */}
//               <div className={footerStyles.desktopNewsletterContainer}>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className={footerStyles.desktopEmailInput}
//                   aria-label="Email"
//                 />
//                 <button className={footerStyles.desktopSubscribeButton}>
//                   <Send className={footerStyles.desktopButtonIcon} />
//                   <span className={footerStyles.desktopButtonText}>
//                     Subscribe
//                   </span>
//                 </button>
//               </div>

//               {/* Social icons */}
//               <div className={footerStyles.socialContainer}>
//                 {socialLinks.map(({ Icon, color, name, href }, index) => (
//                   <a
//                     key={name}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={footerStyles.socialLink}
//                     aria-label={name}
//                     style={{ animationDelay: `${index * 120}ms` }}
//                   >
//                     <div className={footerStyles.socialIconBackground} />
//                     <Icon className={`${footerStyles.socialIcon} ${color}`} />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className={footerStyles.bottomSection}>
//           <div className={footerStyles.copyright}>
//             <span>© {currentYear} MediCare Healthcare.</span>
//           </div>

//           <div className={footerStyles.designerText}>
//             <span>Designed by</span>
//             suraj
//           </div>
//         </div>
//       </div>

//       {/* Animation Styles */}
//       <style>{footerStyles.animationStyles}</style>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Doctors", path: "/doctors" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Appointments", path: "/appointments" },
  ];

  const services = [
    "Blood Pressure Check",
    "Blood Sugar Test",
    "Full Blood Count",
    "X-Ray Scan",
  ];

  const socialLinks = [
    { icon: Facebook, link: "#" },
    { icon: Twitter, link: "#" },
    { icon: Instagram, link: "#" },
    { icon: Linkedin, link: "#" },
    { icon: Youtube, link: "#" },
  ];

  return (
    <footer className="relative mt-24 text-white">

      {/* Soft Luxury Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2f28] via-[#0d3b33] to-[#071f1a]"></div>

      {/* Soft Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15),_transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-16">

        {/* LEFT SECTION */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img src={logo} alt="MediCare Logo" className="w-14 h-14" />
            <div>
              <h2 className="text-3xl font-bold tracking-wide">
                MediCare
              </h2>
              <p className="text-emerald-400 text-lg">
                Healthcare Solutions
              </p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-8">
            Delivering trusted healthcare innovation with compassion and
            cutting-edge medical excellence.
          </p>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 9198829569</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>surajdharmraj@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Prayagraj, India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center 
                  bg-white/10 backdrop-blur-sm rounded-full 
                  hover:bg-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.6)]
                  transition duration-300"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-semibold text-emerald-400 mb-8">
            Quick Links
          </h3>

          <ul className="space-y-6">
            {quickLinks.map((item) => (
              <li key={item.name} className="flex items-center gap-3 group">
                <div className="w-8 h-8 flex items-center justify-center 
                bg-white/10 rounded-full 
                group-hover:bg-emerald-500 transition duration-300">
                  <ArrowRight size={14} />
                </div>
                <Link
                  to={item.path}
                  className="text-gray-300 group-hover:text-emerald-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div>
          <h3 className="text-2xl font-semibold text-emerald-400 mb-8">
            Our Services
          </h3>

          <ul className="space-y-6">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-3 group">
                <div className="w-3 h-3 bg-emerald-500 rounded-full group-hover:scale-125 transition"></div>
                <Link
                  to="/services"
                  className="text-gray-300 group-hover:text-emerald-400 transition"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-white/10 py-6 text-center text-sm text-gray-400 backdrop-blur-sm">
        © {currentYear} MediCare Healthcare. All Rights Reserved.
        <div className="mt-2">
          Designed by  {"SURAJ "}
        </div>
      </div>

    </footer>
  );
};

export default Footer;