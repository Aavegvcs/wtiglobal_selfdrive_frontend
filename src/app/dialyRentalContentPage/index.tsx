import Banner from "@/app/HomePage/components/Banner";
import CarSegment from "@/app/HomePage/components/CarCategoryClass";
import InventoryHome from "@/app/HomePage/components/InventoryHome";
import CarRentalLocation from "@/app/HomePage/components/CarRentalLocation";
import GetInTouch from "@/app/HomePage/components/GetInTouch";
import OfficeAddesses from "@/app/HomePage/components/OfficeAddesses";
import FAQHome from "@/app/HomePage/components/FAQHome";
// import HowRentalWork from "@/app/HomePage/components/HowRentalWork";

const DialyRentalContentPage = () => {
    return (
        <>
            <Banner />
            <CarSegment />
            <InventoryHome />
            {/* <HowRentalWork /> */}
            <CarRentalLocation />
            <GetInTouch />
            <OfficeAddesses />
            <FAQHome />
        </>
    )
}

export default DialyRentalContentPage