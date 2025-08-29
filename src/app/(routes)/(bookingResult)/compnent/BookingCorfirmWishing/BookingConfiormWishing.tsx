import { textColors } from "@/constant/colors"


interface BookingConfiormWishingProps {
    text: string
}

const BookingConfiormWishing = ({ text }: BookingConfiormWishingProps) => {
    return (
        <div>
            <h4 className={`${textColors.lightBlack} font-semibold text-xl`}>{text}</h4>
        </div>
    )
}

export default BookingConfiormWishing