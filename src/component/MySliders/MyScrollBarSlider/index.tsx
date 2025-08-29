import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import "./index.css";
import Image from "next/image";
import { CarImagesProps } from "@/common/InventryCarCard/CarImages/CarImages";

const MyScrollBarSlider = ({ images }: CarImagesProps) => {

  return (
    <div id="myScrollBarSlider">
      <Swiper
        scrollbar={{
          hide: false,
          draggable: true, // optional: lets user drag the scrollbar
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Scrollbar, Navigation]}
        className="mySwiper"
      >

        {
          Array.isArray(images) && images.map((el, i) => {
            return <SwiperSlide key={i}>
              <div className="relative h-[240px]">
                <Image
                  src={el || "https://drive.yango.com/images/preview/rs:fill:320:200:1/q:80/g:ce/sm:1/ar:1/dpr:2/plain/s3://aggregator-media-me-central-1/746044ee-de23-4d44-ae87-3252886e7730/ec2ef857-de726d3f-94de5ffc-1795c503"}
                  alt=""
                  className="w-full rounded-t-2xl object-cover"

                  fill
                />
              </div>
            </SwiperSlide>

          })
        }

      </Swiper>
    </div>
  );
};

export default MyScrollBarSlider;
