export default function TestimonialCard({ name, role, image, text }) {
  return (
    <div
      className="
        relative
        bg-white/65
        rounded-2xl
        pt-16 pb-10 px-8 mt-16
        text-center
        flex-shrink-0
        w-[300px]
        sm:w-[340px]
        md:w-[380px]
        lg:w-[400px]
        xl:w-[420px]
        min-h-[430px]
        sm:min-h-[400px]
        md:min-h-[400px]
        lg:min-h-[400px]
        xl:min-h-[400px]
        border border-[#E1EBFF]
        shadow-[inset_0px_4px_4px_0px_#0000000A]
      "
    >
      {/* Avatar */}
      <div className="absolute -top-10 sm:-top-12 md:-top-14 lg:-top-16 left-1/2 -translate-x-1/2 bg-[#039BE6] p-0.5 rounded-full">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-[1.5px] border-[#FBFDFF] shadow-[0px_-2px_8px_0px_#00000014]"
        />
      </div>

      {/* Name & Role */}
      <h3 className="card-heading font-roboto mt-4">{name}</h3>
      <p className="font-inter text-muted">{role}</p>

      {/* Quote + Text */}
      <div className="flex flex-col items-center mt-6">
        <img
          src="/icons/comma.svg"
          alt="quote"
          className="w-8 h-8 sm:w-10 sm:h-10 mb-3"
        />
        <p className="card-content text-center">{text}</p>
      </div>
    </div>
  );
}
