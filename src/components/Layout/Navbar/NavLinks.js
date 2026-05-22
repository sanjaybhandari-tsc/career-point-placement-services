import NavItem from "./NavItem";

const links = [
  { label: "Hiring Solution", href: "/hiring-solutions" },
  { label: "About", href: "/about-us" },
  { label: "Industries", href: "/industries" },
  // {label:"Get in touch", href:"/getIn-Touch" },
  {
    label: "Services",
    dropdown: true,
    children: [
      { label: "Permanent Hiring", href: "/services/permanent-hirings" },
      { label: "Contract Staffing", href: "/services/contract-hiring" },
      { label: "Executive Search", href: "/services/executive-search" },
      { label: "RPO", href: "/services/rpo" },
    ],
  },
];

export default function NavLinks({
  mobile = false,
  openNavLink,
  setOpenNavLink,
  closeMenu,
}) {
  return (
    <div
      className={
        // mobile ? "flex flex-col w-full" : "hidden md:flex gap-2 lg:gap-4 xl:gap-6"
        mobile ? "flex flex-col w-full" : "flex gap-2 lg:gap-4 xl:gap-6"
      }
    >
      {links.map((item, index) => (
        <NavItem
          key={item.label}
          item={item}
          mobile={mobile}
          isOpen={openNavLink === index}
          onToggle={() => setOpenNavLink(index === openNavLink ? null : index)}
          closeAll={closeMenu}
        />
      ))}
    </div>
  );
}
