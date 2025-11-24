import newsOffersImg1 from "../../assets/images/footer/footer-right-icon-1.svg";
import newsOffersImg2 from "../../assets/images/footer/footer-right-icon-2.svg";

import bottomImg1 from "../../assets/images/footer/bottom-icon-1.svg"
import bottomImg2 from "../../assets/images/footer/bottom-icon-2.svg"
import bottomImg3 from "../../assets/images/footer/bottom-icon-3.svg"
import bottomImg4 from "../../assets/images/footer/bottom-icon-4.svg"
import bottomImg5 from "../../assets/images/footer/bottom-icon-5.svg"

import { FaStar } from "react-icons/fa";
import { TiStarHalf } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10 px-[3%]">
     <div className="container mx-auto grid gap-16">
       <div className="top flex items-center justify-between flex-col-reverse md:flex-row gap-12 md:gap-0">
        <div className="links grid grid-cols-1 sm:grid-cols-3 w-2/3 gap-10 sm:gap-0">
          <div className="flex-center flex-col gap-8">
            <h4 className="text-2xl uppercase">About</h4>
            <div className="flex-center flex-col gap-3 text-slate-800">
              <a href="" className="text-sm">About Us</a>
              <a href="" className="text-sm">Design</a>
              <a href="" className="text-sm">Sustainability</a>
              <a href="" className="text-sm">We plant trees</a>
              <a href="" className="text-sm">Our Story</a>
              <a href="" className="text-sm">Awards</a>
            </div>
          </div>
          <div className="flex-center flex-col gap-8">
            <h4 className="text-2xl uppercase">Help</h4>
            <div className="flex-center flex-col gap-3 text-slate-800">
              <a href="" className="text-sm">Holiday Offers FAQ</a>
              <a href="" className="text-sm">FAQ</a>
              <a href="" className="text-sm">Warranty</a>
              <a href="" className="text-sm">Shipments</a>
              <a href="" className="text-sm">Returns & Claims</a>
              <a href="" className="text-sm">Contact us</a>
            </div>
          </div>
          <div className="flex justify-start items-center flex-col gap-8">
            <h4 className="text-2xl uppercase">More</h4>
            <div className="flex-center flex-col gap-3 text-slate-800">
              <a href="" className="text-sm">Where to find us</a>
              <a href="" className="text-sm">Woodendot Family</a>
              <a href="" className="text-sm">Press</a>
              <a href="" className="text-sm">Affiliates</a>
              <a href="" className="text-sm">Video Lifestyle</a>
            </div>
          </div>
        </div>
        <div className="news-offers grid gap-6">
          <p className="text-sm">Don’t miss any news and exclusive offers!</p>
          <button className="bg-white border w-full">Newsletter subscription</button>
          <div className="new-offers_images flex items-center justify-evenly">
            <img src={newsOffersImg1} alt="footer-img fsc branch" />
            <img src={newsOffersImg2} alt="one tree planted word on img" />
          </div>
          <div className="new-offers_stars flex-center gap-3">
            <div className="flex-center gap-1">
              <FaStar size={24} className="p-1 bg-green-500 text-white" />
              <FaStar size={24} className="p-1 bg-green-500 text-white" />
              <FaStar size={24} className="p-1 bg-green-500 text-white" />
              <FaStar size={24} className="p-1 bg-green-500 text-white" />
              <TiStarHalf size={24} className="bg-green-500 text-white h-full" />
            </div>
            <div className="flex-center gap-1">
              <FaStar size={24} className="text-green-500" />
              TrustPilot
            </div>
          </div>
        </div>
      </div>
      <div className="bottom flex items-center justify-between flex-col lg:flex-row gap-6">
        <p className="text-xs">
          © Copyright – WOODENDOT 2021
        </p>
        <div className="flex-center gap-4 flex-wrap">
          <img src={bottomImg1} alt="payment company icon" />
          <img src={bottomImg2} alt="payment company icon" />
          <img src={bottomImg3} alt="payment company icon" />
          <img src={bottomImg4} alt="payment company icon" />
          <img src={bottomImg5} alt="payment company icon" />
        </div>
        <p className="text-xs">Terms & Conditions | Privacy Policy & Cookies</p>
      </div>
     </div>
    </footer>
  );
};

export default Footer;
