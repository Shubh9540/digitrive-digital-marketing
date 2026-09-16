import React from 'react';
import Image from 'next/image';
import { FaRegUser, FaBezierCurve, FaMobileAlt } from 'react-icons/fa';


const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaRegUser': return <FaRegUser className="w-5 h-5" />;
    case 'FaBezierCurve': return <FaBezierCurve className="w-5 h-5" />;
    case 'FaMobileAlt': return <FaMobileAlt className="w-5 h-5" />;
    default: return null;
  }
};

export const ServiceDetailPageContent = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-10">
      
      {/* Hero Image */}
      <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: '400px' }}>
        <Image 
          src={data.heroImage}
          alt={data.overview.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Service Overview */}
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white relative inline-block pb-3">
            {data.overview.title}
            <span className="absolute bottom-0 left-0 w-16 h-[3px] bg-[#00e5ff]"></span>
          </h2>
        </div>
        <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
          {data.overview.text1}
        </p>
        <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
          {data.overview.text2}
        </p>
      </div>

      {/* Service Center */}
      <div className="flex flex-col gap-6 pt-4 mt-4 border-t border-[#102a4c]">
        <div>
          <h2 className="text-2xl font-bold text-white relative inline-block pb-3">
            {data.serviceCenter.title}
            <span className="absolute bottom-0 left-0 w-16 h-[3px] bg-[#00e5ff]"></span>
          </h2>
        </div>
        <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
          {data.serviceCenter.text}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {data.serviceCenter.features.map((feature: any) => (
            <div key={feature.id} className="bg-[#08152c] rounded-xl p-6 border border-[#102a4c] transition-colors hover:border-[#00e5ff]/50">
              <div className="w-12 h-12 rounded-full bg-[#0c1f40] flex items-center justify-center text-[#00e5ff] mb-4 border border-[#1a3861]">
                {renderIcon(feature.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Grid Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {data.serviceCenter.bottomGrid.map((item: any) => (
            <div key={item.id} className="flex flex-col gap-4">
              <div className="w-full h-40 rounded-xl overflow-hidden relative">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-md font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
