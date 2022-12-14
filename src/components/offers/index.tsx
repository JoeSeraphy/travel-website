import ScrollContainer from "react-indiana-drag-scroll";

export const Offers = () => {
  return (
    <>
      <h3 className="text-black text-3xl font-bold">Offers</h3>
      <ScrollContainer
        horizontal
        className="flex gap-6 mt-16 max-w-[1312px] overflow-hidden"
      >
        <div className="min-w-[688px] min-h-[256px] flex w-1/2 py-6 px-4 rounded-2xl shadow-xl">
          <img
            className="w-[310px] h-[210px] object-cover rounded-lg"
            src="https://source.unsplash.com/random/landscape/?airplane"
          />
          <div className="grid justify-between pl-4">
            <span className="text-base font-normal text-gray-600 mb-[-32px]">
              Domestic Flights
            </span>
            <p className="text-2xl font-medium text-gray-800">
              Huge savings on flight with trxvl.
            </p>
            <span className="text-base font-normal text-gray-600">
              Book domestic flights starting @ just ₹1459
            </span>
            <button className="grid place-center items-center text-white w-32 bg-[#2659C3] px-6 rounded-3xl">
              Book Now
            </button>
          </div>
        </div>
        <div className="min-w-[688px] min-h-[256px] flex w-1/2 py-6 px-4 rounded-2xl shadow-xl">
          <img
            className="w-[310px] h-[210px] object-cover rounded-lg"
            src="https://source.unsplash.com/random/landscape/?hotel"
          />
          <div className=" grid justify-between pl-4">
            <span className="text-base font-normal text-gray-600 mb-[-32px]">
              International Hotels
            </span>
            <p className="text-2xl font-medium text-gray-800">
              Enjoy upto 20% off on International Hotels
            </p>
            <span className="text-base font-normal text-gray-600">
              Make the most of this deal on your first booking with trxvl.
            </span>
            <button className="grid place-center items-center text-white w-32 bg-[#2659C3] px-6 rounded-3xl">
              Book Now
            </button>
          </div>
        </div>
      </ScrollContainer>
    </>
  );
};
