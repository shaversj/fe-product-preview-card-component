import desktopImage from "./assets/image-product-desktop.jpg";
import mobileImage from "./assets/image-product-mobile.jpg";
import cartImage from "./assets/icon-cart.svg";

function Card() {
  return (
    <div className="centerDiv flex h-screen w-full items-center justify-center bg-cream font-montserrat ">
      <div className="container flex rounded-lg bg-white drop-shadow-md  sm:max-w-[20rem] sm:flex-col lg:max-w-[31rem] lg:flex-row">
        <div className="lg:flex-[50%]">
          <img
            className="image hidden rounded-l-md lg:block"
            src={desktopImage}
            alt=""
          />
          <img
            className="mobileImage hidden rounded-t-md sm:block lg:hidden"
            src={mobileImage}
            alt=""
          />
        </div>
        <div className="textContainer pl-6 pr-6 pt-5 lg:flex-[50%]">
          <span className="font-montserrat text-[.7rem] uppercase tracking-[.2em] text-dark-grayish-blue">
            Perfume
          </span>
          <p className="pt-3 font-fraunces text-[1.7rem] font-semibold leading-none">
            Gabrielle Essence Eau De Parfum
          </p>
          <p className=" pt-4 font-montserrat text-[.72rem] font-medium leading-5 text-dark-grayish-blue">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price flex pt-4 font-fraunces">
            <p className="text-[1.7rem] font-bold text-dark-cyan">$149.99</p>
            <p className="flex items-center pl-4 text-[.7rem] text-dark-grayish-blue line-through">
              $169.99
            </p>
          </div>
          <div className="button-container pt-5">
            <div className="button flex h-10 items-center justify-center rounded-md bg-dark-cyan font-montserrat text-xs font-medium text-white active:bg-darker-cyan sm:mb-4">
              <img className="h-3.05 w-3 " src={cartImage} alt="" />
              <span className="pl-2">Add to Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
