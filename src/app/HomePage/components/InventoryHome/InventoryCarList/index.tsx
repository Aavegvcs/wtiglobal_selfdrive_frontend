import InventryCarCard from "@/common/InventryCarCard";
import { CarInvertoryI } from "@/types/interface";

export type InventoryCarListProps = {
  inventryList: CarInvertoryI[]
  bookNowHandler: (vehicle_id: string) => void
}

const InventoryCarList = ({ inventryList ,bookNowHandler }: InventoryCarListProps) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {Array.isArray(inventryList) && inventryList.map((el, i) => {
        return <InventryCarCard key={i} inventryCard={el} bookNowHandler = {bookNowHandler}/>;
      })}
    </div>
  );
};

export default InventoryCarList;
