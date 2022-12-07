import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface widthProps {}

export const Gallery3 = () => {
  const carousel = useRef();
  const [width, setWidth] = useState<widthProps>();

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  return (
    <>
      <h3 className="text-black text-3xl font-bold mt-20">
        Connect with other travelers in our community
      </h3>
      <div ref={carousel} className="overflow-hidden">
        <motion.div
          className="mt-8 flex gap-x-6 w-[1312px]"
          drag="x"
          whileTap={{ cursor: "grabbing" }}
          dragConstraints={{ right: 0, left: -!width }}
        >
          <div className="p-6 shadow-xl rounded-lg">
            <img
              className="w-[310px] h-[200px] object-cover rounded-lg"
              src="https://source.unsplash.com/random/landscape/?india"
              alt=""
            />
            <div className="grid mt-6">
              <p className="text-2xl font-normal">India</p>
              <span>Travel community</span>
              <span>155,073 travelers</span>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-lg">
            <img
              className="w-[310px] h-[200px] object-cover rounded-lg"
              src="https://source.unsplash.com/random/landscape/?travel"
              alt=""
            />
            <div className="grid mt-6">
              <p className="text-2xl font-normal">Travel Talk</p>
              <span>Travel community</span>
              <span>155,073 travelers</span>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-lg">
            <img
              className="w-[310px] h-[200px] object-cover rounded-lg"
              src="https://source.unsplash.com/random/landscape/?beach"
              alt=""
            />
            <div className="grid mt-6">
              <p className="text-2xl font-normal">Beach</p>
              <span>Travel community</span>
              <span>155,073 travelers</span>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-lg">
            <img
              className="w-[310px] h-[200px] object-cover rounded-lg"
              src="https://source.unsplash.com/random/landscape/?mountains"
              alt=""
            />
            <div className="grid mt-6">
              <p className="text-2xl font-normal">Mountains</p>
              <span>Travel community</span>
              <span>155,073 travelers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
