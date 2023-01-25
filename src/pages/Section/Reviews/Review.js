import React from "react";
import { Navigation, Pagination, EffectCoverflow, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Descriptiontext } from "../../../Components/base/Typography/Descriptiontext";
import { SectionHeader } from "../../../Components/base/Typography/SectionHeader";
import styles from "./styles/styles.module.scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import { TestmonialCard } from "../../../Components/general/ReviewCard/ReviewCard";
import { Testmonials } from "../../../const/texts";

export const Review = () => {
  return (
    <>
      <div className={styles.center}>
        <div className={styles.reviewCard}>
          <SectionHeader title={"Success Stories"} />
          <div className={styles.descriptiontext}>
            <Descriptiontext
              text={
                "These are just some of the thousands of people who’s lives have changed. We can’t show their faces due to our-active protection of user privacy, but we can share their voices."
              }
            />
          </div>

          <Swiper
            className={styles.swiperStyle}
            navigation
            loop
            effect={"coverflow"}
            grabCursor={true}
            // centeredSlides={true}
            spaceBetween={120}
            slidesPerView={2.75}
            coverflowEffect={{
              scale: 0.9,
              rotate: 2,
              stretch: 100,
              depth: 100,
              modifier: 1.5,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Navigation, Thumbs]}
            breakpoints={{
              500: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2.2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 2.8,
              },
            }}
          >
            {Testmonials.map((item, val) => (
              <SwiperSlide key={val}>
                <TestmonialCard key={item.id} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <br />
        </div>
      </div>
    </>
  );
};
