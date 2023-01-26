import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";

import { slider } from "../../../constants/variable";
import Button from "../button/Button";
import { SDescroption } from "./Slider.style";

const Slider = () => {
  return (
    <Carousel
      // autoPlay
      showThumbs={false}
      interval={6000}
      showStatus={false}
      infiniteLoop={true}
    >
      {slider.map((item) => (
        <div key={item.title} className="h-[220px] lg:h-[700px]">
          <img src={item.image} alt={item.title} />
          <SDescroption>
            <h2 className="text-2xl lg:text-4xl font-bold text-white">{item.title}</h2>
            <p className="my-2 text-white">{item.contents}</p>
            <Button className="btn btn-sm lg:btn-md mt-3">
              <Link to={item.path}>바로가기</Link>
              <HiArrowSmRight className="h-5 w-5 ml-1"/>
            </Button>
          </SDescroption>
        </div>
      ))}
    </Carousel>
  );
};
export default Slider;
