import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../../../../assets/assets/images/image1.jpg";
import img2 from "../../../../assets/assets/images/image 2.png";
import img3 from "../../../../assets/assets/images/images 3.jpg";
import img4 from "../../../../assets/assets/images/image 4.jpg";
import img5 from "../../../../assets/assets/images/image 5.jpg";

const offers = [img1, img2, img3, img4, img5];

export default function OffersSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1, spacing: 10 },
  });

  return (
    <div
      ref={sliderRef}
      className="keen-slider mt-6 rounded-2xl overflow-hidden shadow max-w-5xl w-full mx-auto"
    >
      {offers.map((img, idx) => (
        <div key={idx} className="keen-slider__slide">
          <img
            src={img}
            alt={`Offer ${idx + 1}`}
            className="w-full h-48 object-cover"
          />
        </div>
      ))}
    </div>
  );
}
