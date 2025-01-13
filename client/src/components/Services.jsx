import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row w-full justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-black text-lg">{title}</h3>
        <p className="mt-1 text-gray text-sm md:w-9/12">
          {subtitle}
        </p>
      </div>
    </div>
  );

const Services = () => {
    return(
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-black font-medium text-3xl sm:text-5xl py-2">
                        Services that we
                        <br />
                        continue to improve
                    </h1>
                    <p className="text-left my-2 text-gray-500 font-normal md:w-9/12 w-11/12 text-base">
                        The best choice for buying and selling your crypto assets, with the
                        various super friendly services we offer
                    </p>
                </div>

                <div className="w-full flex-1 flex flex-col justify-start items-center">
                    {/*since we extracted const ServiceCard on top we can duplicate and use it as many times as we want*/}
                    <ServiceCard
                    color="bg-black"
                    title="Security gurantee"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                    />
        
                    <ServiceCard
                    color="bg-black"
                    title="Best exchange rates"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Minimal exchange rate possible. So in every transaction you make, you get the best deals, every time."
                    />
        
                    <ServiceCard
                    color="bg-black"
                    title="Fastest transactions"
                    icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle="Our Transactions are not only secure but quick as well. Send it anytime, anywhere."
                    />
                </div>
    </div>
  </div>
        )
}
export default Services;