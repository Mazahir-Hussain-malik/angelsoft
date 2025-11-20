import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  return (
    <div className="group bg-white rounded-lg p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-lg  transition-all duration-300 h-full flex flex-col relative overflow-hidden">
      {/* Default State Content */}
      <div className="relative z-0 flex flex-col h-full rounded-lg p-6 sm:p-7 md:p-8">
        <div className="mb-4 w-16 h-16 sm:w-20 sm:h-20 relative">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
            />
          </div>

        <h3 className="text-base sm:text-lg font-bold text-[#937C39] mb-2 sm:mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">
          {description}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-95 transition-opacity duration-300 rounded-lg z-10 flex flex-col justify-center items-start p-6 sm:p-7 md:p-8 pointer-events-none group-hover:pointer-events-auto">
        <div className="hover:border-white border border-dashed border-transparent rounded-lg p-4 w-full h-full flex flex-col justify-center items-start">
          <div className="mb-4 w-16 h-16 sm:w-20 sm:h-20 relative">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain brightness-0 invert opacity-70"
            />
          </div>

          <h3 className="text-lg font-bold text-white mb-3 sm:mb-4">
            {title}
          </h3>

          <p className="text-white text-sm leading-relaxed opacity-90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
