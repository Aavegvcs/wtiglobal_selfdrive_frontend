import Container from "@/component/layout/Container";
import Section from "@/component/section";
import DividerVertical from "@/component/ui/DividerVertical/DividerVertical";
import { bgColors } from "@/constant/colors";
import ContactForm from "@/app/HomePage/components/GetInTouch/ContactForm";
import ContactInfoPanel from "@/app/HomePage/components/GetInTouch/ContactInfoPanel";

const GetInTouch = () => {
  return (
    <Section bgColor={bgColors.bgFogWhite}>
      <Container>
        <div className={`grid grid-cols-[1fr_1px_1fr] gap-8 rounded-[20px] p-10 shadow-[0px_4px_20px_0px_#0000001F] ${bgColors.bgWhite}`}>
          <ContactInfoPanel />
          <DividerVertical color={bgColors.bgDarkGray} />
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
};

export default GetInTouch;
