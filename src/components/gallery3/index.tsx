import ScrollContainer from "react-indiana-drag-scroll";

export const Gallery3 = () => {
  return (
    <>
      <h3 className="text-black text-3xl font-bold mt-20">
        Connect with other travelers in our community
      </h3>
      <ScrollContainer
        horizontal
        className="flex gap-6 mt-16 max-w-[1312px] overflow-hidden"
      >
        <div className="min-w-[310px] min-h-[200px] p-6 shadow-lg rounded-lg">
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
        <div className="min-w-[310px] min-h-[200px] p-6 shadow-lg rounded-lg">
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
        <div className="min-w-[310px] min-h-[200px] p-6 shadow-lg rounded-lg">
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
        <div className="min-w-[310px] min-h-[200px] p-6 shadow-lg rounded-lg">
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
      </ScrollContainer>
    </>
  );
};
