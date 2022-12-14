import ScrollContainer from "react-indiana-drag-scroll";

export const Gallery2 = () => {
  return (
    <>
      <h3 className="text-black text-3xl font-bold mt-14">
        Browse by property type
      </h3>
      <ScrollContainer
        horizontal
        className="flex gap-6 mt-16 max-w-[1312px] overflow-hidden"
      >
        <div className="min-w-[310px] min-h-[200px]">
          <img
            className="w-[310px] h-[200px] object-cover rounded-lg brightness-75"
            src="https://source.unsplash.com/random/landscape/?hotel"
            alt=""
          />
          <p className="mt-[-40px] ml-4 text-white text-2xl font-medium drop-shadow">
            Hotels
          </p>
        </div>
        <div className="min-w-[310px] min-h-[200px]">
          <img
            className="w-[310px] h-[200px] object-cover rounded-lg brightness-75"
            src="https://source.unsplash.com/random/landscape/?apartments"
            alt=""
          />
          <p className="mt-[-40px] ml-4 text-white text-2xl font-medium drop-shadow">
            Apartments
          </p>
        </div>
        <div className="min-w-[310px] min-h-[200px]">
          <img
            className="w-[310px] h-[200px] object-cover rounded-lg brightness-75"
            src="https://source.unsplash.com/random/landscape/?resorts"
            alt=""
          />
          <p className="mt-[-40px] ml-4 text-white text-2xl font-medium drop-shadow">
            Resorts
          </p>
        </div>
        <div className="min-w-[310px] min-h-[200px]">
          <img
            className="w-[310px] h-[200px] object-cover rounded-lg brightness-75"
            src="https://source.unsplash.com/random/landscape/?villas"
            alt=""
          />
          <p className="mt-[-40px] ml-4 text-white text-2xl font-medium drop-shadow">
            Villas
          </p>
        </div>
      </ScrollContainer>
      <div className="mt-20">
        <img
          className="w-[1126px] h-[395px] object-cover rounded-2xl brightness-75"
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=
          rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
        />
        <div className="absolute ml-20 mt-[-300px]">
          <h3 className="text-white text-5xl font-bold w-[678px]">
            Plan your trip with travel expert
          </h3>
          <p className="text-white text-3xl mt-4">
            Our professional advisors can craft your perfect itinerary
          </p>
        </div>
      </div>
    </>
  );
};
