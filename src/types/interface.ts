
export interface ChipsOptionI {
    label: string,
    value: string
}

export interface SocialMediaI {
    icon: React.ReactNode,
    link: string
}

export interface FooterLinkI {
    text: string,
    href: string
}

export interface FooterColumnI {
    title: string
    links: FooterLinkI[]
}

export interface tabsOption {
    href: string,
    text: string
}


export interface ImportantInfoItemI {
    icon: string,
    id: string;
    label: string;
    value?: string;
    linkText?: string;
    iconOnly?: boolean;
    modalContent: string;
}


export interface CarOverviewItem {
  id: string;
  label: string;
  value: string;
  icon?: string; // optional, if using icons
  hasModal?: boolean; // for items like "Credit Card, Cash & more"
}