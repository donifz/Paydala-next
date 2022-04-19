import styles from "../styles/Main.module.css";
import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import PaydalaLogo from "../public/PDLOGO.svg";
import Link from "next/link";
import MainTitleCard from "../components/MainComponents/MainTitleCard";
import SecondaryTitlesCard from "../components/MainComponents/SecondaryTitlesCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
  const swipeRef = useRef(null);

  const ref = useRef(null);
  // const scrollHorizonatl = (evt) => {
  //     evt.preventDefault();
  //     if (evt.deltaY < 0) {
  //         ref?.current.scrollLeft -= evt.deltaY + 500;
  //         return;
  //     }
  //     ref?.current.scrollLeft += evt.deltaY + 300;
  // }

  // useEffect(() => {
  //     if (ref.current) {
  //         ref.current.addEventListener("wheel", scrollHorizonatl, true);
  //     }
  //     return () => {
  //         if (ref.current) {
  //             ref.current.removeEventListener("wheel", scrollHorizonatl, true);
  //         }
  //     }

  // }, [])

  return (
    <>
      <div ref={ref} className={styles.wrapperDesktop}>
        <MainTitleCard />
        <Link href={"/Support"}>
          <a>
            <SecondaryTitlesCard
              variant="support"
              title="Техподдержка"
              subtitle="Своевременное техническая поддержка"
              menu={["Плательщикам", "Провайдерам", "Платёжным агентам"]}
            />
          </a>
        </Link>
        <SecondaryTitlesCard
          variant="terminal"
          title="Терминал"
          subtitle="Удобные в использовании"
          menu={["Раздел", "Раздел", "Раздел"]}
        />
        <SecondaryTitlesCard
          variant="kassa"
          title="Касса"
          subtitle="Слогон"
          menu={["Раздел", "Раздел", "Раздел"]}
        />
        <SecondaryTitlesCard
          variant="payment"
          title="Выплаты"
          subtitle="Слогон"
          menu={["Раздел", "Раздел", "Раздел"]}
        />
        <SecondaryTitlesCard
          variant="internet"
          title="Интернет эквайринг"
          subtitle="Слогон"
          menu={["Раздел", "Раздел", "Раздел"]}
        />
        <SecondaryTitlesCard
          variant="agrigation"
          title="Агрегация сервисов"
          subtitle="Слогон"
          menu={["Раздел", "Раздел", "Раздел"]}
        />
      </div>

      <div className={styles.wrapperMobile}>
        <div className={styles.mobileLogo}>
          <Image src={PaydalaLogo} />
        </div>
        <Swiper
          // install Swiper modules
          ref={swipeRef}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={250}
          slidesPerView={2}
          navigation
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <MainTitleCard />
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/Support"}>
              <a>
                <SecondaryTitlesCard
                  variant="support"
                  title="Техподдержка"
                  subtitle="Своевременное техническая поддержка"
                  menu={["Плательщикам", "Провайдерам", "Платёжным агентам"]}
                />
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <SecondaryTitlesCard
              variant="terminal"
              title="Терминал"
              subtitle="Удобные в использовании"
              menu={["Раздел", "Раздел", "Раздел"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecondaryTitlesCard
              variant="kassa"
              title="Касса"
              subtitle="Слогон"
              menu={["Раздел", "Раздел", "Раздел"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecondaryTitlesCard
              variant="payment"
              title="Выплаты"
              subtitle="Слогон"
              menu={["Раздел", "Раздел", "Раздел"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecondaryTitlesCard
              variant="internet"
              title="Интернет эквайринг"
              subtitle="Слогон"
              menu={["Раздел", "Раздел", "Раздел"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecondaryTitlesCard
              variant="agrigation"
              title="Агрегация сервисов"
              subtitle="Слогон"
              menu={["Раздел", "Раздел", "Раздел"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SecondaryTitlesCard
              variant="none"
              title="Агрегация сервисов"
              subtitle="Слогон"
              menu={["Раздел", "Раздел", "Раздел"]}
            />
          </SwiperSlide>
        </Swiper>
        <div className={styles.footer}>
          <div className={styles.copyRight}>© 2022 PayDala</div>{" "}
          <div className="custom-pagination"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
