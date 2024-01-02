import { imgDesktop } from "../assets/images";

export function Hero() {
  return (
    <main className="">
      <div className="flex flex-row border border-black">
        <div>
          <img src={imgDesktop} width={500} />
          <div className="flex flex-row">
            <h1>
              The Bright <br /> Future of <br /> Web 3.0?
            </h1>
            <div className="">
              <p>
                We dive into next evolution of the web that <br />
                claims to put the power og the platforms back <br />
                into the hands of the people. But is it really <br />
                fulfilling its promise?
              </p>
              <button className="bg-orange-500 text-white">Read More</button>
            </div>
          </div>
        </div>
        <div className="bg-black w-60">
          <h1 className="text-yellow-50">New</h1>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
