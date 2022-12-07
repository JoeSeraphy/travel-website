import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Gallery = () => {
  const carousel = useRef();
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  return (
    <>
      <h3 className="text-white text-3xl font-bold mt-14">
        Top Vocation Destinations
      </h3>
      <div ref={carousel} className="overflow-hidden">
        <motion.div
          className="mt-8 flex w-[1312px]"
          drag="x"
          whileTap={{ cursor: "grabbing" }}
          dragConstraints={{ right: 0, left: -width }}
        >
          <div className="pr-6">
            <img
              className="w-[310px] h-[200px] object-cover rounded-lg brightness-75"
              src="https://source.unsplash.com/random/landscape/?miami"
              alt=""
            />
            <p className="absolute mt-[-40px] ml-4 text-white text-2xl font-medium drop-shadow">
              Miami
            </p>
          </div>
          <div className="pr-6">
            <img
              className="w-[310px] h-[200px] object-cover rounded-lg brightness-75"
              src="https://source.unsplash.com/random/landscape/?tokyo"
              alt=""
            />
            <p className="absolute mt-[-40px] ml-4 text-white text-2xl font-medium drop-shadow">
              Tokyo
            </p>
          </div>
          <div className="pr-6">
            <img
              className="w-[310px] h-[200px] object-cover rounded-lg brightness-75"
              src="https://source.unsplash.com/random/landscape/?paris"
              alt=""
            />
            <p className="absolute mt-[-40px] ml-4 text-white text-2xl font-medium drop-shadow">
              Paris
            </p>
          </div>
          <div className="pr-6">
            <img
              className="w-[310px] h-[200px] object-cover rounded-lg brightness-75"
              src="https://source.unsplash.com/random/landscape/?rio-de-janeiro"
              alt=""
            />
            <p className="absolute mt-[-40px] ml-4 text-white text-2xl font-medium drop-shadow">
              Rio de Janeiro
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};
