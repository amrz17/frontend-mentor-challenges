import {
  gaming,
  imgDesktop,
  imgMobile,
  retroPc,
  topLaptop,
} from "../assets/images";

export function Hero() {
  return (
    <main className="">
      <div className="flex flex-col mt-20 md:flex-row">
        <div>
          <img
            src={imgDesktop}
            width={650}
            className="md:flex hidden md:px-2"
          />
          <img src={imgMobile} width={400} className="px-4 mb-2 md:hidden" />
          <div className="flex flex-col px-4 md:mt-8 md:px-0 md:flex-row">
            <h1 className="font-extrabold text-4xl lg:text-[3.1rem] lg:leading-[3rem] lg:mr-8 md:flex hidden">
              The Bright <br /> Future of <br /> Web 3.0?
            </h1>
            <h1 className="font-extrabold text-4xl md:hidden">
              The Bright <br /> Future of Web <br /> 3.0?
            </h1>
            <div className="flex flex-col md:mx-auto ">
              <p className="text-Dark-grayish-blue">
                We dive into next evolution of the web that <br />
                claims to put the power og the platforms back <br />
                into the hands of the people. But is it really <br />
                fulfilling its promise?
              </p>
              <button
                className="font-bold text-sm w-48 mt-2 mb-10 p-4 
                bg-Soft-red text-white md:mt-6 md:mb-0 hover:bg-Very-dark-blue"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-6 my-0 mx-auto lg:gap-8 bg-black w-[350px]">
          <div>
            <h1 className="text-2xl font-bold pt-4 text-Soft-orange md:text-4xl md:pt4 lg:pt-8">
              New
            </h1>
            <a href="#">
              <h2 className="hover:text-Soft-orange text-white font-bold mt-4 md:mt-4 lg:mt-10">
                Hydrogen VS Electrics Cars
              </h2>
            </a>
            <p className="text-Grayish-blue text-sm mt-2 mb-4">
              Will hydrogen-fueled cars ever catch up <br /> to EVs?
            </p>
            <hr className="text-Grayish-blue" />
          </div>
          <div>
            <a href="#">
              <h2 className="hover:text-Soft-orange text-white font-bold mt-4">
                The Downsides of AI Artistry
              </h2>
            </a>
            <p className="text-Grayish-blue text-sm mt-2 mb-4">
              What are the possible adverse effects of <br /> on-demand AI image
              generation?
            </p>
            <hr className="text-Grayish-blue" />
          </div>
          <div>
            <a href="#">
              <h2 className="hover:text-Soft-orange text-white font-bold mt-4">
                Is VC Funding Drying Up?
              </h2>
            </a>
            <p className="text-Grayish-blue text-sm mt-2 mb-10">
              Private funding by VC firms is down 50% <br /> YOY. We take a look
              at what that means.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-10 items-center mr-6 md:mr-0 gap-6">
        <div className="flex gap-6 mt-10 md:mt-0">
          <img src={retroPc} width={110} />
          <div>
            <h1 className="text-Grayish-blue text-4xl font-bold">01</h1>
            <a href="#">
              <h2 className="hover:text-Soft-red font-bold text-Very-dark-blue mt-2 md:mt-0">
                Reviving Retro PCs
              </h2>
            </a>
            <p className="text-Dark-grayish-blue text-sm mt-2">
              What happens when old PCs <br /> are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <img src={topLaptop} width={110} />
          <div>
            <h1 className="text-Grayish-blue text-4xl font-bold">02</h1>
            <a href="#">
              <h2 className="hover:text-Soft-red font-bold text-Very-dark-blue mt-2 md:mt-0">
                Top 10 Laptops of 2022
              </h2>
            </a>
            <p className="text-Dark-grayish-blue text-sm mt-2">
              Our best picks for various <br /> needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex gap-6 mb-10 md:mb-0">
          <img src={gaming} width={110} />
          <div>
            <h1 className="text-Grayish-blue text-4xl font-bold">03</h1>
            <a href="#">
              <h2 className="hover:text-Soft-red font-bold text-Very-dark-blue mt-2 md:mt-0">
                The Growth of Gaming
              </h2>
            </a>
            <p className="text-Dark-grayish-blue text-sm mt-2">
              How the pandemic has <br /> sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
