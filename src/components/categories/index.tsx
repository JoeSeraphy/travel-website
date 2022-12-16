import ScrollContainer from "react-indiana-drag-scroll";

export const Categories = () => {
  return (
    <>
      <h3 className="text-white text-3xl font-bold mt-10">Top categories</h3>
      <ScrollContainer>
        <div className="flex gap-x-10 mt-8 justify-between">
          <div className="h-[82px] grid items-center justify-center hover:border-b-2">
            <img
              className="mx-auto"
              src="src/assets/icons/beaches.svg"
              alt="Beaches"
            />
            <p className="text-white/40 py-2 hover:text-white">Beaches</p>
          </div>
          <div className="h-[82px] grid items-center justify-center hover:border-b-2">
            <img
              className="mx-auto"
              src="src/assets/icons/deserts.svg"
              alt="Deserts"
            />
            <p className="text-white/40 py-2 hover:text-white">Deserts</p>
          </div>
          <div className="h-[82px] grid items-center justify-center hover:border-b-2">
            <img
              className="mx-auto"
              src="src/assets/icons/mountains.png"
              alt="Mountains"
            />
            <p className="text-white/40 py-2 hover:text-white">Mountains</p>
          </div>
          <div className="h-[82px] grid items-center justify-center hover:border-b-2">
            <img
              className="mx-auto"
              src="src/assets/icons/cities.svg"
              alt="Iconec Cities"
            />
            <p className="text-white/40 py-2 hover:text-white">Iconic Cities</p>
          </div>
          <div className="h-[82px] grid items-center justify-center hover:border-b-2">
            <img
              className="mx-auto"
              src="src/assets/icons/houseboats.svg"
              alt="Houseboats"
            />
            <p className="text-white/40 py-2 hover:text-white">Houseboats</p>
          </div>
          <div className="h-[82px] grid items-center justify-center hover:border-b-2">
            <img
              className="mx-auto"
              src="src/assets/icons/countryside.svg"
              alt="Countryside"
            />
            <p className="text-white/40 py-2 hover:text-white">Countryside</p>
          </div>
          <div className="h-[82px] grid items-center justify-center hover:border-b-2">
            <img
              className="mx-auto"
              src="src/assets/icons/camping.svg"
              alt="Camping"
            />
            <p className="text-white/40 py-2 hover:text-white">Camping</p>
          </div>
          <div className="h-[82px] grid items-center justify-center hover:border-b-2">
            <img
              className="mx-auto"
              src="src/assets/icons/castles.svg"
              alt="Castles"
            />
            <p className="text-white/40 py-2 hover:text-white">Castles</p>
          </div>
          <div className="h-[82px] grid items-center justify-center hover:border-b-2">
            <img
              className="mx-auto"
              src="src/assets/icons/skiing.svg"
              alt="Skiing"
            />
            <p className="text-white/40 py-2 hover:text-white">Skiing</p>
          </div>
          <div className="h-[82px] grid items-center justify-center hover:border-b-2">
            <img
              className="mx-auto"
              src="src/assets/icons/tropical.svg"
              alt="Tropical"
            />
            <p className="text-white/40 py-2 hover:text-white">Tropical</p>
          </div>
        </div>
      </ScrollContainer>
    </>
  );
};
