export const Footer = () => {
  return (
    <>
      <footer className="mt-36">
        <div className="bg-[url('src/assets/images/bgFooter.png')] bg-no-repeat bg-cover h-[543px]">
          <div className="max-w-[1366px] h-[543px] overflow-y-hidden m-auto">
            <div className="flex  mt-20 ml-32">
              <img src="/src/assets/images/iphone.png" alt="" />
              <div className="w-[772px] ml-20">
                <h2 className="text-white font-bold text-5xl mb-4">
                  Your all-in-one travel app.
                </h2>
                <p className="text-white font-normal text-2xl">
                  Book flights, hotels, trains & rental cars anywhere in the
                  world in just seconds. Get real-time flight updates, travel
                  info, exclusive deals, and 30% more Trip Coins only on the
                  app!
                </p>
                <div>
                  <div className="flex items-center gap-6 mt-8">
                    <p className="backdrop-blur-lg bg-gray-200/40 px-4 py-2 rounded-2xl text-white text-2xl">
                      Mobile
                    </p>
                    <p className="text-white text-2xl">Email</p>
                  </div>
                  <div className="flex items-center">
                    <div className="mt-4">
                      <span className="text-white">
                        Enter your phone number to receive a text with a link to
                        download the app.
                      </span>
                      <div className="flex mt-4 backdrop-blur-lg bg-gray-200/40 w-[462px] px-4 py-2 rounded-2xl">
                        <input
                          className="text-white placeholder:text-white bg-transparent px-4 py-2 outline-none"
                          type="tel"
                          name="phone"
                          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                          placeholder="+55 Mobile number"
                        />
                        <button
                          className="grid place-center bg-white text-base font-bold  text-[#2659C3] px-16 py-2 rounded-3xl ml-8 
                        transition ease-in-out hover:bg-[#2659C3] hover:text-white duration-300"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="ml-12 grid">
                        <div className="w-0.5 h-16 bg-white/60 ml-1"></div>
                        <span className="text-white">or</span>
                        <div className="w-0.5 h-16 bg-white/60 ml-1"></div>
                      </div>
                      <div className="ml-12 grid gap-y-8">
                        <img
                          src="/src/assets/images/googleplay.png"
                          alt="Google play"
                        />
                        <img
                          src="/src/assets/images/appstore.png"
                          alt="App store"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 h-[288px]">
          <div className="max-w-[1366px] m-auto flex pt-10 px-[120px]">
            <img
              className="w-20 relative top-[-48px] mr-32"
              src="./logo2.svg"
              alt="logo"
            />
            <div className="w-[917px] flex justify-between">
              <div className="w-40 grid gap-4 text-white/50 text-sm">
                <p>Seslendirme ve Alt Jazz</p>
                <p>Media Market</p>
                <p>Gillie</p>
                <p>Size Last</p>
              </div>
              <div className="w-40 grid gap-2 text-white/50 text-sm">
                <p>Self Betimes</p>
                <p>Yatırımcı İlişkileri</p>
                <p>Basal Himmler</p>
              </div>
              <div className="w-40 grid gap-2 text-white/50 text-sm">
                <p>Yard Market</p>
                <p>Is İmkanları</p>
                <p>Car Tercihleri</p>
              </div>
              <div className="w-40 grid gap-2 text-white/50 text-sm">
                <p>Hedge Karla</p>
                <p>Mullein Koşulları</p>
                <p>Autumnal Bulgier</p>
              </div>
            </div>
          </div>
          <div className="max-w-[1366px] m-auto flex justify-between items-center mt-5 px-[120px]">
            <div className="border border-slate-500 text-white/60 w-30">
              <p className="px-6 py-2 text-sm">Helmet KOD</p>
            </div>
            <div className="w-40 h-6 flex gap-6">
              <a href="#">
                <img src="/src/assets/images/instagram.png" alt="instagram" />
              </a>
              <a href="#">
                <img src="/src/assets/images/facebook.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="/src/assets/images/twitter.png" alt="twitter" />
              </a>
              <a href="#">
                <img src="/src/assets/images/youtube.png" alt="youtbe" />
              </a>
            </div>
          </div>
          <span className="text-white/60 text-xs m-auto flex justify-center">
            © 1997-2021.
          </span>
        </div>
      </footer>
    </>
  );
};
