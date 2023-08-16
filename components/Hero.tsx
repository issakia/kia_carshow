"use client";

import Image from "next/image";

import { CustomButton } from "../components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          سامانه ثبت نام خودروی ایثارگران
        </h1>

        <p className="hero__subtitle">
          این سامانه به درخواست جمعی از آزادگان و جانبازان و ایثارگران طراحی گردید و وابسته به هیچ نهاد دولتی  نمی باشد!
        </p>
        <div className='home__text-container'>
          <p>قابل توجه مراجعین محترم</p>
        </div>
        <p className="home__text-container">
         این سایت صرفا در خدمت جامعه ایثارگران عزیز می باشد ! 
        </p>
        <h1 className="home__text-container">
          سامانه در دست ساخت می باشد
        </h1>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
