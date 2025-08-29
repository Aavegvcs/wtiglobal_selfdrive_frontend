import Section from "@/component/section";
import BannerImg from "@/assets/images/bannerImg.svg";
import Container from "@/component/layout/Container";
import Image from "next/image";
import { bgColors } from "@/constant/colors";

const Banner = () => {
  return (
    <>
      <Section bgColor={bgColors.bgGray} className="">
        <Container>
          <Image src={BannerImg} alt="" />
        </Container>
      </Section>
    </>
  );
};

export default Banner;
