"use client";
import ChipsFilter from "@/component/ChipsFilter/ChipsFilter";
import Container from "@/component/layout/Container";
import Section from "@/component/section";
import SectionHeading from "@/component/SectionHeading";
import { bgColors, textColors } from "@/constant/colors";
import { inventoryCategoryList } from "@/data/data";
import { useGetInvertory } from "@/app/HomePage/hooks/useGetInventory";
import InventoryCarList from "@/app/HomePage/components/InventoryHome/InventoryCarList";

const InventoryHome = () => {
  const { selected, onSelectHandler } = useGetInvertory();
  return (
    <Section bgColor={bgColors.bgGray}>
      <Container>
        <div className="flex flex-col justify-center w-full tex">
          <SectionHeading
            heading="Discover WTI’s Top-Rated Rides"
            description="Explore our most popular car rental options — trusted by thousands across India for daily, weekly, and long-term needs."
            fontSize="text-4xl"
            textColor={textColors.textDarkBlue}
          />
          <ChipsFilter
            chipsOptionList={inventoryCategoryList}
            selectedChips={selected}
            onSelect={onSelectHandler}
          />
          <InventoryCarList />
        </div>
      </Container>
    </Section>
  );
};

export default InventoryHome;
