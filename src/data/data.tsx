import { CarOverviewItem, ChipsOptionI, FooterColumnI, ImportantInfoItemI, SocialMediaI } from "@/types/interface";
import { BsFacebook, BsTwitterX } from "react-icons/bs"
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import MileagePolicyIcons from "@/assets/icons/mileage_policy_icon.svg"
import FuelPolicyIcons from "@/assets/icons//fuel_policy_icon.svg"
import DepositPolicyIcons from "@/assets/icons/deposit_policy_icon.svg"
import RentalPolicyIcons from "@/assets/icons/rental_policy_icon.svg"
import PaymentImportantIofIcon from "@/assets/icons/payment_important_info_icon.svg"
import MinimumAgeImportantIofIcon from "@/assets/icons/minimum_age_important_info_icon.svg"
import MinimumDrivingExperienceImportantIofIcon from "@/assets/icons/minimum_driving_experience_important_info_icon.svg"
import RequiredDocumentImportantIofIcon from "@/assets/icons/required_document_important_info_icon.svg"
import { RentalPolicyItemT } from "@/types/types";

export const inventoryCategoryList: ChipsOptionI[] = [
    {
        label: "All",
        value: "ALL"
    },
    {
        label: "Daily",
        value: "DAILY"
    },
    {
        label: "Weekly",
        value: "WEEKLY"
    },
    {
        label: "Monthly",
        value: "MONTHLY"
    },
    {
        label: "Lease",
        value: "LEASE"
    },
];

export const carCarInfoList = [
    {
        img: "https://img.freepik.com/premium-vector/car-seat-vector-icon_733406-588.jpg",
        text: "4 Seat"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYmO0Msi3_ybGUD38peEOQh7LXLjEadl8xQ&s",
        text: "2 luggage bag"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVXd1D1kJubVrp1FwIxWwPv-UR4F9fRiRlw&s",
        text: "210 km/rental"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2Yiph5yn6uoQeJ0nuMyh6sQ9Y-zKESpiEg&s",
        text: "Automatic"
    },
    {
        img: "https://www.flaticon.com/free-icon/calendar_10156100",
        text: "Min. 03 days rental"
    }
]



export const carRentalLlocationList: ChipsOptionI[] = [
    {
        label: "UAE",
        value: "UAE"
    },
    {
        label: "India",
        value: "INDIA"
    },
    {
        label: "UK",
        value: "UK"
    },
    {
        label: "KSA",
        value: "KSA"
    },
    {
        label: "Kuwait",
        value: "KUWAIT"
    },
    {
        label: "Qatar",
        value: "QATAR"
    },
    {
        label: "Turkey",
        value: "TURKEY"
    },
]



export const socialMediaInfoList: SocialMediaI[] = [
    {
        icon: <BsFacebook />,
        link: "https://facebook.com" // or any appropriate URL
    },
    {
        icon: <BsTwitterX />,
        link: "https://facebook.com" // or any appropriate URL
    },
    {
        icon: <FaLinkedinIn />,
        link: "https://facebook.com" // or any appropriate URL
    },
    {
        icon: <FaYoutube />,
        link: "https://facebook.com" // or any appropriate URL
    },
    {
        icon: <FaInstagram />,
        link: "https://facebook.com" // or any appropriate URL
    }
];


export const footerColumnData: FooterColumnI[] = [
    {
        title: "Company",
        links: [
            {
                text: "About Us",
                href: "#"
            },
            {
                text: "Career",
                href: "#"
            },
            {
                text: "Privacy Policy",
                href: "#"
            },
            {
                text: "Terms & Conditions",
                href: "#"
            }
        ]
    },
    {
        title: "Quick Links",
        links: [
            {
                text: "Login/Register",
                href: "#"
            },
            {
                text: "Partnership",
                href: "#"
            },
            {
                text: "Offers",
                href: "#"
            },
            {
                text: "FAQ’s",
                href: "#"
            }
        ]
    },
    {
        title: "Services",
        links: [
            {
                text: "Airport Cabs Services",
                href: "#"
            },
            {
                text: "Railway Station Cab Services",
                href: "#"
            },
            {
                text: "Outstation Cabs Services",
                href: "#"
            },
            {
                text: "Workplace Commute services",
                href: "#"
            }
        ]
    },

]


export const featureHighlightArr: string[] = [
    "Hassle-Free bookings",
    "Best Cab Offers",
    "24x7 Customer Support",
    "Free Cancellation",
];



export const suggestedLocations = [
    {
        "city": "Dubai",
        "countryCode": "UAE"
    },
    {
        "city": "Ajman",
        "countryCode": "UAE"
    },
    {
        "city": "Sharjah",
        "countryCode": "UAE"
    },
    {
        "city": "Abu Dhabi",
        "countryCode": "UAE"
    },
    {
        "city": "Umm Al Quwain",
        "countryCode": "UAE"
    },
    {
        "city": "Fujairah",
        "countryCode": "UAE"
    },
    {
        "city": "Ras Al-Khaimah",
        "countryCode": "UAE"
    },
    {
        "city": "Al-Ain",
        "countryCode": "UAE"
    }
]


export const filterTabs = [
    {
        text: "Sports cars",
        value: "SPORTS_CARS"
    },
    {
        text: "Luxury",
        value: "LUXURY"
    },
    {
        text: "Standard",
        value: "STANDARD"
    },
    {
        text: "Electric",
        value: "ELECTRIC"
    },
    {
        text: "Economy",
        value: "ECONOMY"
    },
]


export const rentalPolicyList: RentalPolicyItemT[] = [
    {
        icon: MileagePolicyIcons,
        title: "Mileage Policy",
        body: {
            description: "Most rentals include a daily mileage limit (e.g., 250 km/day). Exceeding this incurs additional charges at AED 0.5 per extra km. Some providers offer unlimited mileage or extra mileage package options.",
            postulates: [
                "Planning a long trip? Request a discounted extra mileage package from the rental company in advance to avoid per-km charges."
            ]
        }
    },
    {
        icon: FuelPolicyIcons,
        title: "Fuel Policy",
        body: {
            description: "Return the car with the same fuel level as received to avoid refueling charges.",
            postulates: ["Take a picture of the fuel gauge at pickup and drop-off as proof, and keep the fuel receipt to avoid disputes."]
        }
    },
    {
        icon: DepositPolicyIcons,
        title: "Deposit Policy",
        body: {
            description: "A refundable deposit is held via credit card pre-authorization and refunded within 30 days. Some companies offer a zero-deposit option for a non-refundable fee.",
            postulates: ["Using a debit card, cash or bank transfer? Refunds take longer, require manual processing, and may incur transfer and currency conversion fees. Check with your provider in advance."]
        }
    },
    {
        icon: RentalPolicyIcons,
        title: "Rental Policy",
        body: {
            description: "Car rentals operate on a 24-hour cycle—returning late, even by an hour, may result in a full-day charge. Early contract termination may affect your rental rate.",
            postulates: [" If the rental company is picking up the car, ensure the vehicle is ready and accessible at the agreed time to avoid delays or extra charges."]
        }
    }
]



export const importantInfoData: ImportantInfoItemI[] = [
    {
        icon: PaymentImportantIofIcon,
        id: "payment",
        label: "Payment",
        value: "Credit Card, Debit Card",
        linkText: "other options",
        modalContent: "Other payment options include UPI, Net Banking, etc.",
    },
    {
        icon: MinimumAgeImportantIofIcon,
        id: "minAge",
        label: "Minimum age",
        value: "25 Years Old",
        linkText: "other age",
        modalContent: "Drivers must be at least 25 years old. Age requirements may vary depending on the location and vehicle type.",
    },
    {
        icon: MinimumDrivingExperienceImportantIofIcon,
        id: "drivingExp",
        label: "Minimum driving experience",
        value: "6 months",
        linkText: "less experience?",
        modalContent: "A minimum of 6 months of driving experience is required. If you have less experience, additional conditions may apply.",
    },
    {
        icon: RequiredDocumentImportantIofIcon,
        id: "docs",
        label: "Required documents",
        linkText: "Read More",
        modalContent: "Required documents include your driving license, identity proof (passport, Aadhaar), and a valid credit/debit card.",
    },
];




export const carOverviewData: CarOverviewItem[] = [
    {
        id: "bodyType",
        label: "Body Type",
        value: "Crossover",
        hasModal: true
    },
    {
        id: "salikCharges",
        label: "Salik / Toll Charges",
        value: "AED 5"
    },
    {
        id: "model",
        label: "Model",
        value: "Seltos"
    },
    {
        id: "engineCapacity",
        label: "Engine Capacity",
        value: "1.6 Ltrs"
    },
    {
        id: "doors",
        label: "No. of Doors",
        value: "4"
    },
    {
        id: "fuelType",
        label: "Fuel Type",
        value: "Petrol"
    },
    {
        id: "paymentModes",
        label: "Payment Modes",
        value: "Credit Card, Cash & more",
        hasModal: true
    },
    {
        id: "make",
        label: "Make",
        value: "Kia"
    },
    {
        id: "gearbox",
        label: "Gearbox",
        value: "Auto"
    },
    {
        id: "seatingCapacity",
        label: "Seating Capacity",
        value: "5 passengers"
    },
    {
        id: "bags",
        label: "Fits No. of Bags",
        value: "3"
    },
    {
        id: "color",
        label: "Exterior / Interior Color",
        value: "White / Black"
    }
];
