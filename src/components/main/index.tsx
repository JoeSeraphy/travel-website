import { Categories } from "../categories";
import { Gallery } from "../gallery";
import { Gallery2 } from "../gallery2";
import { Gallery3 } from "../gallery3";
import { Offers } from "../offers";
import { Search } from "../search";

export const Main = () => {
  return (
    <>
      <section className="max-w-[1366px] m-auto px-[120px] pt-[125px]">
        <Search />
        <Categories />
        <Gallery />
      </section>
      <div className="bg-gradient-to-t from-white to-white/160 mt-[-150px] h-[120px]"></div>
      <section className="max-w-[1366px] m-auto px-[120px] pt-[125px]">
        <Offers />
        <Gallery2 />
        <Gallery3 />
      </section>
    </>
  );
};
