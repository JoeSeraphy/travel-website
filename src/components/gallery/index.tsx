import ScrollContainer from "react-indiana-drag-scroll";

export const Gallery = () => {
  return (
    <>
      <h3 className="text-white text-3xl font-bold mt-14">
        Top Vocation Destinations
      </h3>

      <ScrollContainer
        horizontal
        className="flex gap-6 mt-16 max-w-[1312px] overflow-hidden"
      >
        <div className="min-w-[310px] min-h-[200px]">
          <img
            className="w-[310px] h-[200px] object-cover rounded-lg brightness-75"
            src="https://source.unsplash.com/random/landscape/?miami"
            alt=""
          />
          <p className="mt-[-40px] ml-4 text-white text-2xl font-medium drop-shadow">
            Miami
          </p>
        </div>
        <div className="min-w-[310px] min-h-[200px]">
          <img
            className="w-[310px] h-[200px] object-cover rounded-lg brightness-75"
            src="https://source.unsplash.com/random/landscape/?tokyo"
            alt=""
          />
          <p className="mt-[-40px] ml-4 text-white text-2xl font-medium drop-shadow">
            Tokyo
          </p>
        </div>
        <div className="min-w-[310px] min-h-[200px]">
          <img
            className="w-[310px] h-[200px] object-cover rounded-lg brightness-75"
            src="https://source.unsplash.com/random/landscape/?paris"
            alt=""
          />
          <p className="mt-[-40px] ml-4 text-white text-2xl font-medium drop-shadow">
            Paris
          </p>
        </div>
        <div className="min-w-[310px] min-h-[200px]">
          <img
            className="w-[310px] h-[200px] object-cover rounded-lg brightness-75"
            src="https://source.unsplash.com/random/landscape/?rio-de-janeiro"
            alt=""
          />
          <p className="mt-[-40px] ml-4 text-white text-2xl font-medium drop-shadow">
            Rio de Janeiro
          </p>
        </div>
      </ScrollContainer>
    </>
  );
};
