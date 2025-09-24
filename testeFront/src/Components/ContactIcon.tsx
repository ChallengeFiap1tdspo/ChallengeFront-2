import React from "react";

interface ContactIconProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  size?: number; 
}

const ContactIcon: React.FC<ContactIconProps> = ({ 
  src, 
  alt, 
  title, 
  description, 
  size = 64 
}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2 bg-white/[1] p-4 rounded-2xl shadow-lg w-40 md:w-44 
                hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
      />
      <h3 className="text-lg font-bold text-[#005b96] text-left">{title}</h3>
      <p className="text-sm text-gray-600 text-left">{description}</p>
    </div>
  );
};

export default ContactIcon;
