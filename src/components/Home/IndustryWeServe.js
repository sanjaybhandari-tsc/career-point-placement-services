import Image from "next/image";

function IndustryWeServe() {
  const industries = [
    {
      src: "/images/homepage/Industry1.webp",
      alt: "Manufacturing",
      label: "Manufacturing",
      className:
        "col-span-2 row-span-1 rounded-tl-[80px] md:rounded-tl-[150px]",
    },
    {
      src: "/images/homepage/Industry2.svg",
      alt: "Pharmaceutical",
      label: "Pharmaceutical",
      className: "col-span-1 row-span-2",
    },
    {
      src: "/images/homepage/Industry3.webp",
      alt: "BFSI",
      label: "BFSI",
      className: "col-span-1 row-span-2",
    },
    {
      src: "/images/homepage/Industry4.webp",
      alt: "FMCG",
      label: "FMCG",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/homepage/Industry5.webp",
      alt: "Building Material",
      label: "Building Material",
      className:
        "col-span-2 row-span-1 rounded-br-[80px] md:rounded-br-[150px]",
    },
  ];

  return (
    <div className="h-[100vh] md:h-[130vh] w-full flex flex-col items-center justify-center gap-6 md:gap-12 lg:gap-15 px-4 py-7 md:py-10 md:py-15 overflow-hidden">
      <div className="text-center max-w-[90%] md:w-[70%] flex flex-col gap-2 md:gap-3 lg:gap-4 shrink-0">
        <h3 className="heading !font-bold">
          <span className="text-[#0277BD]">Industries </span>
          <span>We Serve</span>
        </h3>
        <p className="content font-[500] w-full text-sm md:text-base">
          Delivering top talent to organizations across fast-growing industries,
          helping businesses build skilled teams that drive innovation and
          long-term growth.
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-3 gap-1.5 md:gap-2 lg:gap-3 w-full max-w-[95%] md:max-w-[90%] mx-auto flex-1 min-h-0">
        {industries.map(({ src, alt, label, className }) => (
          <div key={alt} className={`${className} overflow-hidden relative`}>
            <div className="relative group w-full h-full">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#039BE685] to-[#1E40AF85] flex items-center justify-center lg:opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white subheading-smaller md:heading md:!font-bold !font-semibold text-center px-2">
                  {label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndustryWeServe;
