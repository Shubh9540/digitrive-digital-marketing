export interface BreadcrumbData {
  title: string;
  paths: { label: string; url?: string }[];
  bgImage: string;
}

export interface TopBarData {
  phone?: string;
  email?: string;
  address?: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface HeaderData {
  image: string;
  imageAlt: string;
  navLinks: { id: string; label: string; url?: string; subLinks?: any[] }[];
  contactButton: { text: string; url: string; icon?: string };
}

export interface DigitalFooterData {
  logo: string;
  logoAlt?: string;
  tagline: string;
  description: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  followUsText: string;
  socialLinks: { id: string; icon: string; url: string }[];
  columns: { id: string; title: string; links: { id: string; label: string; url: string }[] }[];
  copyright: string;
  bottomLinks: { id: string; label: string; url: string }[];
}

export interface DigitalAboutUsData {
  image: string;
  image1: string;
  image2: string;
  experienceYears: string;
  experienceText1: string;
  experienceText2: string;
  subtitle: string;
  title: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  features: { id: string; icon: string; title: string; description: string }[];
  buttonUrl: string;
  buttonText: string;
}

export interface DigitalBlogData {
  subtitle: string;
  title: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  footerButtonUrl: string;
  footerButtonText: string;
  blogs: {
    id: string;
    image: string;
    date: string;
    day: string;
    month: string;
    author: string;
    comments: string;
    title: string;
    categoryIcon: string;
    category: string;
    excerpt: string;
    linkUrl: string;
    linkText: string;
    url: string;
  }[];
}

export interface DigitalCaseStudiesData {
  subtitle: string;
  title: string;
  titlePart1: string;
  titlePart2: string;
  titlePart3: string;
  description: string;
  buttonUrl: string;
  buttonText: string;
  studies: {
    id: string;
    number: string;
    image: string;
    category: string;
    industry: string;
    title: string;
    description: string;
    linkUrl: string;
    linkText: string;
    url: string;
  }[];
}

export interface CaseStudySection {
  id: string;
  number: string;
  title: string;
  text: string;
  icon?: string;
  iconLabel?: string;
  hasIconImage?: boolean;
  iconImage?: string;
  bullets?: { id: string; text: string }[];
  metrics?: { id: string; value: string; label: string; icon: string }[];
}

export interface CaseStudyDetailData {
  tag: string;
  title: string;
  titleHighlight: string;
  description: string;
  heroImage: string;
  client: string;
  industry: string;
  duration: string;
  websiteUrl: string;
  websiteText: string;
  sections: CaseStudySection[];
}

export interface DigitalCounterData {
  counters: {
    id: string;
    icon: string;
    value: number;
    number?: string;
    suffix: string;
    title: string;
    subtitle: string;
  }[];
}

export interface DigitalHeroData {
  subtitle: string;
  title: string;
  titlePart1: string;
  titlePart2: string;
  heading2: string;
  description: string;
  buttonUrl: string;
  buttonText: string;
  button1: { text: string; url: string };
  button2: { text: string; url: string };
  metrics: { id: string; value: string; label: string }[];
  bgImage: string;
  floatingIcons: { id: string; icon: string; delay: string; y: string; x: string; label: string }[];
}

export interface MissionVisionSectionData {
  subtitle: string;
  title: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  description: string;
  overlayText: string;
  number: string;
  features: { id: string; icon: string; title: string; description: string }[];
  image: string;
}

export interface ProjectDetailData {
  heroImage: string;
  meta: { client: string; category: string; date: string; location: string };
  overview: { title: string; text1: string; text2?: string };
  middleImages: { image1: string; image2: string };
  conclusionText: string;
  facts: { title: string; text: string; list: { id: string; text: string }[] };
}

export interface ProjectsGridData {
  projects: {
    id: string;
    image: string;
    category: string;
    title: string;
    url: string;
  }[];
}

export interface DigitalServicesData {
  subtitle: string;
  title?: string;
  titlePart1?: string;
  titlePart2?: string;
  description: string;
  image: string;
  services: {
    id: string;
    icon: string;
    title: string;
    description: string;
    url?: string;
    linkUrl: string;
    linkText: string;
    number: string;
  }[];
}

export interface PricingFeatureData {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface PricingPlanData {
  id: string;
  icon: string;
  name: string;
  description: string;
  price: string;
  priceSuffix: string;
  isPopular?: boolean;
  popularBadgeText?: string;
  features: { id: string; text: string; isIncluded: boolean }[];
  buttonText: string;
  buttonUrl: string;
}

export interface PricingData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  topFeatures: PricingFeatureData[];
  plans: PricingPlanData[];
}

export interface BlogDetailData {
  id: string;
  category: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  author: {
    name: string;
    date: string;
    readTime: string;
    image: string;
  };
  heroImage: string;
  content: string[];
  blockquote: string;
  whyItMatters: {
    subtitle: string;
    title: string;
    description: string;
    grid: { id: string; icon: string; title: string; text: string }[];
  };
  bestPractices: {
    title: string;
    list: { id: string; icon: string; text: string }[];
  };
  conclusion: string[];
}

export interface DigitalTeamData {
  subtitle: string;
  title: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  footerText: string;
  footerButtonUrl: string;
  footerButtonText: string;
  members: {
    id: string;
    image: string;
    name: string;
    role: string;
    linkedinUrl: string;
    profileUrl: string;
    specialtyIcon: string;
    specialtyTitle: string;
    experience: string;
    socials: { icon: string; url: string }[];
  }[];
}

export interface TeamDetailData {
  id: string;
  name: string;
  role: string;
  image: string;
  experienceBadge: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    website: string;
    bloodGroup: string;
    age: string;
    address: string;
  };
  biography: string;
  skills: {
    id: string;
    name: string;
    percentage: string;
  }[];
  skillDescription: string;
}

export interface DigitalTestimonialsData {
  subtitle: string;
  title: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  testimonials: {
    id: string;
    text: string;
    name: string;
    role: string;
    rating: number;
    image: string;
    reviewText: string;
    location: string;
  }[];
}

export interface DigitalWhyChooseUsData {
  subtitle: string;
  title: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  customersText: string;
  mainImage: string;
  teamImages: string[];
  teamRedirectUrl: string;
  badgePercentage: string;
  badgeText: string;
  features: { id: string; title: string; description: string; icon: string }[];
  images: string[];
}

export interface IndustriesGridData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  description: string;
  stats: {
    id: string;
    icon: string;
    value: string;
    label: string;
  }[];
  signatureText: string;
  industries: {
    id: string;
    icon: string;
    image: string;
    title: string;
    description: string;
    url: string;
    linkText: string;
  }[];
}

export interface IndustryDetailData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroText: string;
  heroButtonUrl: string;
  heroButtonText: string;
  handwritingText: string;
  
  sidebar: {
    industriesLinks: { id: string; label: string; url: string; isActive?: boolean }[];
    contactCard: {
      titlePart1: string;
      titleHighlight: string;
      titlePart2: string;
      subtitle: string;
      phone: string;
      pdfButtonText: string;
      pdfUrl: string;
    };
    promoCard: {
      titlePart1: string;
      titlePart2: string;
      subtitle: string;
    };
  };

  overview: {
    title: string;
    titleHighlight: string;
    text1: string;
    text2: string;
  };

  serviceCenter: {
    title: string;
    titleHighlight: string;
    text: string;
    features: {
      id: string;
      image: string;
      title: string;
      text: string;
    }[];
  };

  faq: {
    title: string;
    titleHighlight: string;
    text: string;
    questions: {
      id: string;
      question: string;
      answer: string;
    }[];
  };
}

export interface ServiceDetailData {
  heroImage: string;
  overview: { title: string; text1: string; text2?: string };
  serviceCenter: { title: string; text: string; features: any[]; bottomGrid: any[] };
  sidebar: { services: any[]; contact: any };
}

export interface DigitalFaqPageData {
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  faqs: {
    id: string;
    question: string;
    answer: string;
  }[];
}



export interface DigitalContactData {
  form: {
    subtitle: string;
    titlePart1: string;
    titlePart2: string;
    titlePart3: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submitText: string;
    resetText: string;
  };
  info: {
    subtitle: string;
    title: string;
    description: string;
    details: {
      id: string;
      icon: string;
      title: string;
      text: string;
    }[];
  };
  mapUrl: string;
}

export interface DigitalClientsData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  image: string;
  itemsPerPage: number;
  logos: { id: string; name: string; image: string }[];
}

export interface LegalPageData {
  sections: {
    id: string;
    title: string;
    content: string;
  }[];
}



export interface DigitalQuoteData {
  leftCol: {
    subtitle: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    features: { id: string; icon: string; title: string; text: string }[];
    image: string;
  };
  form: {
    titlePart1: string;
    titlePart2: string;
    description: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    servicePlaceholder: string;
    websitePlaceholder: string;
    messagePlaceholder: string;
    submitText: string;
    secureText: string;
  };
  contact: {
    id: string;
    icon: string;
    title: string;
    text: string;
    subtext: string;
  }[];
}

export interface DigitalNotFoundData {
  image: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  description: string;
  buttonUrl: string;
  buttonText: string;
  buttonIcon: string;
}

// Fallbacks for any others that might be imported to prevent module missing errors
export type HeroSliderData = DigitalHeroData;
export type AboutUsData = DigitalAboutUsData;
export type ServicesData = DigitalServicesData;
export type ProcessData = any;
export type TeamGridData = DigitalTeamData;
export type CounterData = DigitalCounterData;
export type TestimonialsData = DigitalTestimonialsData;
export type BlogsData = DigitalBlogData;
export type ContactData = any;
export type CallToActionData = any;
export type ContactFormData = any;
export type ContactAssistanceData = any;
export type AboutFirmData = any;
export type AboutMissionData = any;
export type AboutApproachData = any;
export type WhyChooseUsData = DigitalWhyChooseUsData;
export interface SitemapLink {
  id: string;
  label: string;
  url: string;
}

export interface SitemapCategory {
  id: string;
  icon: string;
  title: string;
  description: string;
  links: SitemapLink[];
}

export interface DigitalSitemapData {
  categories: SitemapCategory[];
}

export type EnquiryData = any;
export type DigitalProjectsGridData = ProjectsGridData;

export interface DigitriveTemplateData {
  common: {
    TopBar?: { variants: Record<string, TopBarData> };
    breadcrumbs: Record<string, BreadcrumbData>;
    DigitalFooter: DigitalFooterData;
    [key: string]: any;
  };
  categories: {
    Digitrive: {
      sections: {
        Header: { variants: Record<string, HeaderData> };
        TopBar: { variants: Record<string, TopBarData> };
        Services: { variants: Record<string, DigitalServicesData> };
        Counter: { variants: Record<string, DigitalCounterData> };
        ProjectsGrid: { variants: Record<string, ProjectsGridData> };
        ProjectDetail: { variants: Record<string, ProjectDetailData> };
        ServiceDetail: { variants: Record<string, ServiceDetailData> };
        Pricing: { variants: Record<string, PricingData> };
        BlogDetail: { variants: Record<string, BlogDetailData> };
        CaseStudyDetail: { variants: Record<string, CaseStudyDetailData> };
        Faq: { variants: Record<string, DigitalFaqPageData> };
        Contact: { variants: Record<string, DigitalContactData> };
        Legal: { variants: Record<string, LegalPageData> };
        Quote: { variants: Record<string, DigitalQuoteData> };
        NotFound: { variants: Record<string, DigitalNotFoundData> };
        [key: string]: any;
      };
    };
  };
}
