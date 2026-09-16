export interface TopBarData {
  phone?: string;
  phoneIcon?: string;
  email?: string;
  emailIcon?: string;
  address?: string;
  addressIcon?: string;
  workingHours?: string;
  workingHoursIcon?: string;
  socialTitle?: string;
  socialLinks?: {
    id: string;
    icon: string;
    url: string;
  }[];
}

export interface LinkItem {
  id: string;
  label: string;
  url?: string;
  subLinks?: {
    id: string;
    label: string;
    url: string;
  }[];
}

export interface HeaderData {
  image: string;
  imageAlt: string;
  navLinks: LinkItem[];
  contactBox?: {
    title: string;
    phone: string;
    icon: string;
  };
  contactButton?: {
    text: string;
    url: string;
    icon?: string;
  };
}

export interface BreadcrumbPath {
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  paths: BreadcrumbPath[];
  bgImage: string;
}

export interface HeroSlide {
  id: string;
  bgImage: string;
  subtitleText: string;
  subtitleSuffix: string;
  titleLine1: string;
  titleLine2Highlight: string;
  titleLine2Text: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
}

export interface HeroSliderData {
  slides: HeroSlide[];
}

export interface DestinationCard {
  id: string;
  image: string;
  city: string;
  tourCount: string;
  url: string;
}

export interface DestinationGridData {
  subtitle: string;
  subtitleSuffix?: string;
  title: string;
  description: string;
  destinations: DestinationCard[];
  viewAllButton: {
    text: string;
    url: string;
  };
}

export interface AboutFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutListItem {
  id: string;
  text: string;
}

export interface AboutUsData {
  image1: string;
  image2: string;
  image3?: string;
  experienceYears?: string;
  experienceText1?: string;
  experienceText2?: string;
  subtitle: string;
  title: string;
  titleCursive?: string;
  description: string;
  features: AboutFeature[];
  listItems?: AboutListItem[];
  button: {
    text: string;
    url: string;
  };
}

export interface TourCard {
  id: string;
  image: string;
  title: string;
  rating: number;
  ratingText: string;
  price: string;
  priceSuffix: string;
  buttonText: string;
  buttonUrl: string;
}

export interface TourPackageCategory {
  id: string;
  title: string;
  icon: string;
}

export interface TourPackageItem {
  id: string;
  image: string;
  title: string;
  rating: number;
  ratingText: string;
  price: string;
  priceSuffix: string;
  url: string;
}

export interface TourPackagesPageData {
  sidebar: {
    title: string;
    categories: TourPackageCategory[];
    helpBox: {
      title: string;
      description: string;
      phone: string;
      buttonText: string;
      buttonUrl: string;
    };
  };
  tours: TourPackageItem[];
}

export interface TourDetailBasicInfo {
  destination: string;
  duration: string;
  startPoint: string;
  endPoint: string;
  tourType: string;
  bestTimeToVisit: string;
  tourCategory: string;
  language: string;
  tourDifficulty: string;
}

export interface TourDetailDayPlan {
  id: string;
  dayNumber: number;
  title: string;
  description: string;
}

export interface TourDetailLocation {
  id: string;
  name: string;
  description: string;
}

export interface TourDetailWhyWanderly {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TourDetailData {
  id: string;
  title: string;
  location: string;
  duration: string;
  mainImage: string;
  topGallery: string[];
  description: string[];
  highlights: string[];
  basicInfo: TourDetailBasicInfo;
  included: string[];
  excluded: string[];
  tourPlan: TourDetailDayPlan[];
  mapImage: string;
  locations: TourDetailLocation[];
  bottomGallery: string[];
  
  sidebar: {
    formTitle: string;
    formSubtitle: string;
    whyWanderlyTitle: string;
    whyWanderlyFeatures: TourDetailWhyWanderly[];
    helpBox: {
      title: string;
      description: string;
      phone: string;
      buttonText: string;
    };
  };
}

export interface ToursData {
  bgImage: string;
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  tours: TourCard[];
  viewAllButton: {
    text: string;
    url: string;
  };
}

export interface ServiceCard {
  id: string;
  title: string;
  image: string;
  icon: string;
  linkText: string;
  linkUrl: string;
  fullDescription?: string;
  features?: string[];
  benefitImage?: string;
  detailContent?: ServiceDetailContentData;
}

export interface ServiceSliderData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  description: string;
  services: ServiceCard[];
}

export interface ServiceGridItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  url: string;
}

export interface ServicesData {
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  services: ServiceGridItem[];
  viewAllButton: {
    text: string;
    url: string;
  };
}

export interface ServicesGridSectionData {
  subtitle?: string;
  titlePart1?: string;
  titleHighlight?: string;
  titlePart2?: string;
  description?: string;
  services: ServiceCard[];
}

export interface ServiceDetailSidebarData {
  servicesTitle: string;
  servicesList: {
    id: string;
    title: string;
    url: string;
  }[];
  contactBox: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    buttonText: string;
    buttonUrl: string;
    licensedText: string;
    licensedSubtext: string;
  };
}

export interface ServiceDetailContentData {
  image: string;
  title: string;
  titleHighlight?: string;
  description1: string;
  description2: string;
  features: string[];
  bottomCards: {
    id: string;
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface WanderlyServiceDetail {
  id: string;
  tagline: string;
  title: string;
  description: string;
  topFeatures: {
    icon: string;
    title: string;
    description: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
    features: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  process: {
    title: string;
    steps: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  included: {
    title: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  sidebar: {
    image: string;
    form: {
      title: string;
      subtitle: string;
    };
    helpBox: {
      title: string;
      subtitle: string;
      phone: string;
    };
    relatedServicesTitle: string;
  };
}


export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  subtitleSuffix?: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2?: string;
  description: string;
  features: WhyChooseUsFeature[];
  buttonText: string;
  buttonLink: string;
  image1: string;
  image2: string;
  logo: string;
  overlayTitle: string;
  overlaySubtitle: string;
  overlayBottomText: string;
}

export interface PartnerBrand {
  id: string;
  name: string;
  image: string;
}

export interface PartnerSliderData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  bgImage: string;
  brands: PartnerBrand[];
}

export interface CallToActionData {
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  description: string;
  bgImage: string;
  phone: string;
  phoneIcon: string;
  phoneLink?: string;
  buttonText: string;
  buttonLink: string;
}

export interface MissionVisionData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  description: string;
  centerImage: string;
  mission: {
    title: string;
    icon: string;
    description1: string;
    description2: string;
    points: { id: string; text: string }[];
  };
  vision: {
    title: string;
    icon: string;
    description1: string;
    description2: string;
    points: { id: string; text: string }[];
  };
}

export interface WhyWeExistData {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface CoreValueItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface CoreValuesData {
  title?: string;
  items: CoreValueItem[];
}

export interface AwardItem {
  id: string;
  year: string;
  image: string;
  title: string;
  organization: string;
  color: string;
}

export interface AwardsData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  description: string;
  subheading: string;
  items: AwardItem[];
}

export interface RecognizedByData {
  title: string;
  description: string;
  icon: string;
  logos: { id: string; image: string }[];
}

export interface TravelAdvantageItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TravelAdvantagesData {
  title: string;
  items: TravelAdvantageItem[];
}

export interface TravelProcessStep {
  id: string;
  icon: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface TravelProcessData {
  title: string;
  steps: TravelProcessStep[];
}

export interface WhatMakesUsDifferentData {
  title: string;
  image: string;
  items: string[];
}

export interface TeamMemberSkill {
  name: string;
  percentage: number;
}

export interface TeamMemberExperience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface TeamMemberAchievement {
  title: string;
  description: string;
  icon: string;
}

export interface WanderlyTeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  socialLinks: { icon: string; url: string }[];
  experience: string;
  specialization: string;
  languages: string;
  nationality: string;
  bio: string;
  about: string;
  skills: TeamMemberSkill[];
  experienceTimeline: TeamMemberExperience[];
  achievements: TeamMemberAchievement[];
  contact: { phone: string; email: string; location: string };
}

export interface TeamGridData {
  subtitle: string;
  title: string;
  description: string;
  members: WanderlyTeamMember[];
}

export interface CounterItem {
  id: string;
  icon: string;
  number: number;
  label: string;
  suffix?: string;
}

export interface CounterData {
  counters: CounterItem[];
}

export interface SocialLink {
  id: string;
  icon: string;
  url: string;
}

export interface TeamSkill {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  roleBadge?: string;
  image: string;
  experience?: string;
  about?: string;
  email?: string;
  phone?: string;
  location?: string;
  socialLinks?: SocialLink[];
  skills?: TeamSkill[];
}

export interface TeamSliderData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  description: string;
  members: TeamMember[];
}

export interface BlogContentSection {
  id: string;
  title?: string;
  paragraphs: string[];
  image?: string;
}

export interface EcoInitiative {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogItem {
  id: string;
  date: string;
  image: string;
  category: string;
  categoryIcon: string;
  title: string;
  excerpt: string;
  linkText: string;
  linkUrl: string;
  author?: string;
  authorRole?: string;
  introduction?: string;
  sections?: BlogContentSection[];
  quote?: {
    text: string;
    author: string;
  };
  ecoInitiativesTitle?: string;
  ecoInitiativesDescription?: string;
  ecoInitiatives?: EcoInitiative[];
}

export interface BlogsData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  description: string;
  blogs: BlogItem[];
  viewAllText?: string;
  viewAllLink?: string;
}

export interface BlogSidebarData {
  recentPostsTitle: string;
  recentPosts: BlogItem[];
  helpBox: {
    icon: string;
    title: string;
    subtitle: string;
    logo: string;
    phoneText: string;
    phoneNumber: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface BlogPageData {
  subtitle: string;
  title: string;
  description: string;
  blogs: BlogItem[];
  sidebar: BlogSidebarData;
}

export interface BlogDetailData {
  blog: {
    id: string;
    image: string;
    author: string;
    date: string;
    title: string;
    paragraphs: string[];
    blockquote: {
      text: string;
      author: string;
    };
    bottomParagraphs: string[];
  };
  sidebar: {
    recentPostsTitle: string;
    recentPosts: {
      id: string;
      title: string;
      date: string;
      image: string;
      url: string;
    }[];
    ctaBox: {
      titlePart1: string;
      titlePart2: string;
      description: string;
      buttonText: string;
      buttonUrl: string;
    };
  };
}

export interface FooterData {
  topSection: {
    callTitle: string;
    phone: string;
    callSubtext: string;
    subscribeTitle: string;
    subscribeSubtext: string;
    emailPlaceholder: string;
  };
  middleSection: {
    logo: string;
    description: string;
    socialLinks: { id: string; icon: string; url: string }[];
    exploreTitle: string;
    exploreLinks: { id: string; label: string; url: string }[];
    contactTitle: string;
    address: string;
    phoneLines: string[];
    email: string;
    workingHours: string[];
    recentPostsTitle: string;
    recentPosts: { id: string; title: string; date: string; image: string; url: string }[];
  };
  bottomSection: {
    copyright: string;
    bottomLinks: { id: string; label: string; url: string }[];
    paymentImage: string;
  };
}
export interface RepairProcessItem {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface RepairProcessData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  steps: RepairProcessItem[];
  bannerIcon: string;
  bannerTitle: string;
  bannerText: string;
}

export interface OurExpertiseItem {
  id: string;
  image: string;
  title: string;
}

export interface OurExpertiseData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  items: OurExpertiseItem[];
}


export interface BookRepairBenefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface BookRepairData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  formTitle1: string;
  formTitle2: string;
  brandPlaceholder: string;
  modelPlaceholder: string;
  issuePlaceholder: string;
  conditionPlaceholder: string;
  brands: string[];
  models: string[];
  issues: string[];
  conditions: string[];
  agreeText: string;
  buttonText: string;
  whyBookTitle: string;
  whyBookBenefits: BookRepairBenefit[];
  helpTitle: string;
  helpPhone: string;
  helpEmail: string;
  helpAddress: string;
}


export interface PricingItem {
  id: string;
  icon: string;
  serviceName: string;
  estimatedCost: string;
}

export interface PricingData {
  title: string;
  infoTextPart1: string;
  infoTextPart2: string;
  tableHeaders: {
    service: string;
    cost: string;
  };
  services: PricingItem[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
  repairedDevice?: string;
}

export interface PartnerLogo {
  id: string;
  image: string;
  name: string;
}

export interface PartnerData {
  subtitle?: string;
  titlePart1?: string;
  titleHighlight?: string;
  description?: string;
  logos: PartnerLogo[];
}

export interface ContactOfficeInfo {
  image: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  hours: string;
}

export interface ContactFormData {
  subtitle: string;
  title: string;
  description: string;
  formTitle: string;
  formSubtitle: string;
  officeInfo: ContactOfficeInfo;
}

export interface ContactAssistanceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ContactAssistanceData {
  subtitle: string;
  title: string;
  cards: ContactAssistanceCard[];
}

export interface TestimonialsData {
  subtitle?: string;
  title?: string;
  titlePart1?: string;
  titleHighlight?: string;
  description?: string;
  testimonials: TestimonialItem[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface GalleryVideo {
  id: string;
  thumbnail: string;
  videoUrl: string;
  title: string;
  duration: string;
  date?: string;
  views?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQPageData {
  subtitle: string;
  title: string;
  description: string;
  mainImage: string;
  smallImage: string;
  contactBox: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
  faqs: FAQItem[];
}

export interface PhotoGalleryData {
  subtitle?: string;
  titlePart1?: string;
  titleHighlight?: string;
  description?: string;
  photos: GalleryImage[];
}

export interface VideoGalleryData {
  videos: GalleryVideo[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  categoryName: string;
  questions: FaqItem[];
}

export interface FaqSidebar {
  contactBox: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonUrl: string;
  };
  businessHours: {
    title: string;
    weekdays: string;
    weekdaysTime: string;
    weekend: string;
    weekendTime: string;
    emergencyText: string;
    emergencyPhone: string;
  };
}

export interface FaqData {
  subtitle?: string;
  titlePart1?: string;
  titleHighlight?: string;
  description?: string;
  categories: FaqCategory[];
  sidebar: FaqSidebar;
}

export interface LegalSection {
  id: string;
  icon: string;
  title: string;
  content: string;
}

export interface LegalSidebar {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  address: string;
  buttonText: string;
  buttonLink: string;
}

export interface LegalData {
  title: string;
  introText: string;
  sections: LegalSection[];
  sidebar: LegalSidebar;
  effectiveDate?: string;
}

export interface NotFoundFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NotFoundData {
  errorCode: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText: string;
  secondaryButtonUrl: string;
  image: string;
  features: NotFoundFeature[];
}

export interface SitemapLink {
  id: string;
  label: string;
  url: string;
}

export interface SitemapCategory {
  id: string;
  title: string;
  icon: string;
  links: SitemapLink[];
}

export interface SitemapData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2?: string;
  description: string;
  heading: string;
  links: SitemapLink[];
  categories: SitemapCategory[];
}

export interface CareerBenefit {

  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CareerJob {
  id: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  postedOn: string;
  excerpt: string;
  applyButtonText: string;
  payRange?: string;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
  whyJoinUs: string[];
  image: string;
}

export interface CareersData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  description: string;
  benefits: CareerBenefit[];
  openPositionsTitle: string;
  openPositionsDescription: string;
  jobs: CareerJob[];
  footerText: string;
  footerEmail: string;
  sidebar: {
    title: string;
    perks: {
      id: string;
      icon: string;
      text: string;
    }[];
    image: string;
    quote: string;
  };
}

export interface CareerDetailData {
  job: CareerJob;
  applyForm: {
    title: string;
    fields: {
      fullName: string;
      email: string;
      phone: string;
      coverLetter: string;
      resumeLabel: string;
      submitButton: string;
    };
  };
  aboutBox: {
    title: string;
    stats: {
      id: string;
      icon: string;
      value: string;
      label: string;
    }[];
  };
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  detail1: string;
  detail2: string;
}

export interface ContactData {
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  contactInfoTitle: string;
  contactInfoItems: ContactInfoItem[];
  formTitle: string;
  formDescription: string;
  formPlaceholders: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };
  formButtonText: string;
  mapBox: {
    mapEmbedUrl?: string;
    bgImage: string;
    title: string;
    address: string;
    buttonText: string;
    buttonUrl: string;
  };
}


export interface EnquirySidebarItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface EnquiryHelpBox {
  title: string;
  description: string;
  phone: string;
  buttonText: string;
  buttonLink: string;
}

export interface EnquiryData {
  subtitle?: string;
  title: string;
  description: string;
  whyTravelWithUsTitle: string;
  sidebarItems: EnquirySidebarItem[];
  helpBox: EnquiryHelpBox;
}

export interface WanderlyTemplateData {
  common: {
    globalUI: {
      loading: string;
      notFound: {
        title: string;
        subtitle: string;
        description: string;
        homeButtonText: string;
        exploreButtonText: string;
        homeButtonUrl: string;
        exploreButtonUrl: string;
      };
    };
    breadcrumbs?: {
      AboutBreadcrumb: BreadcrumbData;
      [key: string]: BreadcrumbData;
    };
    Footer?: FooterData;
    DigitalFooter?: DigitalFooterData;
  };
  categories: {
    Wanderly: {
      templateComponents: {
        Wanderly: {
          shared: any;
          pages: {
            [key: string]: {
              components: {
                key: string;
                component: string;
              }[];
            };
          };
        };
      };
      sections: {
        EnquiryContent?: {
          variants: {
            WanderlyEnquiry1: EnquiryData;
          };
        };
        TopBar?: {
          variants: {
            WanderlyTopBar1: TopBarData;
          };
        };
        Header?: {
          variants: {
            WanderlyHeader1: HeaderData;
          };
        };
        AboutBreadcrumb?: {
          variants: {
            WanderlyAboutBreadcrumb1: BreadcrumbData;
          };
        };
        HeroSlider?: {
          variants: {
            WanderlyHeroSlider1: HeroSliderData;
          };
        };
        HeroSection?: {
          variants: {
            DigitalHero1: DigitalHeroData;
          };
        };
        DestinationGrid?: {
          variants: {
            WanderlyDestinationGrid1: DestinationGridData;
          };
        };
        AboutUs?: {
          variants: {
            WanderlyAboutUs1: AboutUsData;
            DigitalAbout1: DigitalAboutUsData;
          };
        };
        ServiceSlider?: {
          variants: {
            WanderlyServiceSlider1: ServiceSliderData;
          };
        };
        Services?: {
          variants: {
            WanderlyServices1?: ServicesData;
            DigitalServices1: DigitalServicesData;
          };
        };
        CaseStudies?: {
          variants: {
            DigitalCaseStudies1: DigitalCaseStudiesData;
          };
        };
        ServiceDetails?: {
          variants: {
            WanderlyServiceDetails1?: {
              services: WanderlyServiceDetail[];
            };
          };
        };
        ServicesGridSection?: {
          variants: {
            WanderlyServicesGridSection1: ServicesGridSectionData;
          };
        };
        ServiceDetailSidebar?: {
          variants: {
            WanderlyServiceDetailSidebar1: ServiceDetailSidebarData;
          };
        };
        ServiceDetailContent?: {
          variants: {
            WanderlyServiceDetailContent1: ServiceDetailContentData;
          };
        };
        WhyChooseUs?: {
          variants: {
            WanderlyWhyChooseUs1: WhyChooseUsData;
            DigitalWhyChooseUs1: DigitalWhyChooseUsData;
          };
        };
        PartnerSlider?: {
          variants: {
            WanderlyPartnerSlider1: PartnerSliderData;
          };
        };
        CallToAction?: {
          variants: {
            WanderlyCallToAction1: CallToActionData;
          };
        };
        Counter?: {
          variants: {
            WanderlyCounter1: CounterData;
            DigitalCounter1: DigitalCounterData;
          };
        };
        Team?: {
          variants: {
            DigitalTeam1: DigitalTeamData;
          };
        };
        TeamSlider?: {
          variants: {
            WanderlyTeamSlider1: TeamSliderData;
          };
        };
        Blogs?: {
          variants: {
            WanderlyBlogs1: BlogsData;
            DigitalBlog1: DigitalBlogData;
          };
        };
        BlogDetailContent?: {
          variants: {
            [key: string]: BlogDetailData;
          };
        };
        BlogPage?: {
          variants: {
            WanderlyBlogPage1: BlogPageData;
          };
        };
        RepairProcess?: {
          variants: {
            WanderlyRepairProcess1: RepairProcessData;
          };
        };
        OurExpertise?: {
          variants: {
            WanderlyOurExpertise1: OurExpertiseData;
          };
        };
        BookRepair?: {
          variants: {
            WanderlyBookRepair1: BookRepairData;
          };
        };
        Pricing?: {
          variants: {
            WanderlyPricing1: PricingData;
          };
        };
        TestimonialsGrid?: {
          variants: {
            WanderlyTestimonialsGrid1: TestimonialsData;
          };
        };
        PhotoGallery?: {
          variants: {
            WanderlyPhotoGallery1: PhotoGalleryData;
          };
        };
        VideoGallery?: {
          variants: {
            WanderlyVideoGallery1: VideoGalleryData;
          };
        };
        FaqSection?: {
          variants: {
            WanderlyFaqSection1: FaqData;
          };
        };
        LegalContent?: {
          variants: {
            WanderlyWarrantyPolicy?: LegalData;
            WanderlyCancellationPolicy?: LegalData;
            WanderlyPrivacyPolicy?: LegalData;
            WanderlyTermsConditions?: LegalData;
            WanderlyRefundPolicy?: LegalData;
            WanderlyPaymentPolicy?: LegalData;
          };
        };
        NotFoundSection?: {
          variants: {
            WanderlyNotFound1: NotFoundData;
          };
        };
        ContactSection?: {
          variants: {
            WanderlyContact1: ContactData;
          };
        };
        CareersSection?: {
          variants: {
            WanderlyCareers1: CareersData;
          };
        };
        CareerDetailContent?: {
          variants: {
            [key: string]: CareerDetailData;
          };
        };
        SitemapSection?: {
          variants: {
            WanderlySitemap1: SitemapData;
          };
        };
        TourPackagesPage?: {
          variants: {
            WanderlyTourPackagesPage1: TourPackagesPageData;
          };
        };
        DestinationsPage?: {
          variants: {
            WanderlyDestinationsPage1: DestinationsPageData;
          };
        };
        GalleryPage?: {
          variants: {
            WanderlyGalleryPage1: GalleryPageData;
          };
        };
        TestimonialsPage?: {
          variants: {
            WanderlyTestimonialsPage1: TestimonialsData;
          };
        };
        FAQPage?: {
          variants: {
            WanderlyFAQPage1: FAQPageData;
          };
        };
        TourDetail?: {
          variants: {
            WanderlyTourDetail1: TourDetailData;
          };
        };
        Tours?: {
          variants: {
            WanderlyTours1: ToursData;
          };
        };
        Testimonials?: {
          variants: {
            WanderlyTestimonials1: TestimonialsData;
            DigitalTestimonials1: DigitalTestimonialsData;
          };
        };
        Mission?: {
          variants: {
            DigitalMission1: MissionVisionSectionData;
          };
        };
        Vision?: {
          variants: {
            DigitalVision1: MissionVisionSectionData;
          };
        };
        Partner?: {
          variants: {
            WanderlyPartner1: PartnerData;
          };
        };
        ContactForm?: {
          variants: {
            WanderlyContactForm1: ContactFormData;
          };
        };
        ContactAssistance?: {
          variants: {
            WanderlyContactAssistance1: ContactAssistanceData;
          };
        };
        CTA?: {
          variants: {
            WanderlyCTA1: CallToActionData;
          };
        };
        MissionVision?: {
          variants: {
            WanderlyMissionVision1: MissionVisionData;
          };
        };
        WhyWeExist?: {
          variants: {
            WanderlyWhyWeExist1: WhyWeExistData;
          };
        };
        CoreValues?: {
          variants: {
            WanderlyCoreValues1: CoreValuesData;
          };
        };
        Awards?: {
          variants: {
            WanderlyAwards1: AwardsData;
          };
        };
        RecognizedBy?: {
          variants: {
            WanderlyRecognizedBy1: RecognizedByData;
          };
        };
        Commitment?: {
          variants: {
            WanderlyCommitment1: CoreValuesData;
          };
        };
        TravelAdvantages?: {
          variants: {
            WanderlyTravelAdvantages1: TravelAdvantagesData;
          };
        };
        TravelProcess?: {
          variants: {
            WanderlyTravelProcess1: TravelProcessData;
          };
        };
        WhatMakesUsDifferent?: {
          variants: {
            WanderlyWhatMakesUsDifferent1: WhatMakesUsDifferentData;
          };
        };
        TeamGrid?: {
          variants: {
            WanderlyTeamGrid1: TeamGridData;
          };
        };
      };
    };
  };
}
export interface DestinationItem {
  id: string;
  title: string;
  image: string;
  url: string;
}

export interface DestinationsPageData {
  domestic: {
    title: string;
    icon: string;
    items: DestinationItem[];
  };
  international: {
    title: string;
    icon: string;
    items: DestinationItem[];
  };
  bottomBanner: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
  sidebar: {
    whyWanderlyTitle: string;
    whyWanderlyFeatures: TourDetailWhyWanderly[];
    helpBox: {
      title: string;
      description: string;
      phone: string;
      buttonText: string;
      buttonUrl: string;
    };
  };
}
export interface GalleryPageData {
  subtitle: string;
  title: string;
  description: string;
  photoGallery: PhotoGalleryData;
  videoGallery: VideoGalleryData;
  bottomBanner: DestinationsPageData['bottomBanner'];
}

export interface FloatingIconData {
  id: string;
  icon: string;
  label: string;
  x: string;
  y: string;
  delay: string;
}

export interface DigitalHeroData {
  bgImage: string;
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  heading2: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  floatingIcons: FloatingIconData[];
}

export interface DigitalFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface DigitalAboutUsData {
  image: string;
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  features: DigitalFeatureItem[];
  buttonText: string;
  buttonUrl: string;
}

export interface DigitalServiceItem {
  id: string;
  icon: string;
  number: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface DigitalServicesData {
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  image: string;
  services: DigitalServiceItem[];
}

export interface DigitalCaseStudyItem {
  id: string;
  number: string;
  image: string;
  title: string;
  industry: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface DigitalCaseStudiesData {
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  titlePart3: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  studies: DigitalCaseStudyItem[];
}

export interface DigitalCounterItem {
  id: string;
  icon: string;
  value: number;
  suffix: string;
  title: string;
  subtitle: string;
}

export interface DigitalCounterData {
  counters: DigitalCounterItem[];
}

export interface DigitalTeamItem {
  id: string;
  image: string;
  name: string;
  role: string;
  isLead?: boolean;
  linkedinUrl: string;
  specialtyIcon: string;
  specialtyTitle: string;
  experience: string;
  profileUrl: string;
}

export interface DigitalTeamData {
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  members: DigitalTeamItem[];
  footerText: string;
  footerButtonText: string;
  footerButtonUrl: string;
}

export interface DigitalWhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface DigitalWhyChooseUsData {
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  features: DigitalWhyChooseUsFeature[];
  teamImages: string[];
  teamRedirectUrl: string;
  customersText: string;
  badgePercentage: string;
  badgeText: string;
  mainImage: string;
}

export interface DigitalBlogItem {
  id: string;
  image: string;
  day: string;
  month: string;
  categoryIcon: string;
  category: string;
  title: string;
  excerpt: string;
  linkText: string;
  linkUrl: string;
}

export interface DigitalBlogData {
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  blogs: DigitalBlogItem[];
  footerButtonText: string;
  footerButtonUrl: string;
}

export interface DigitalFooterData {
  logo: string;
  tagline: string;
  description: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  followUsText: string;
  socialLinks: { id: string; icon: string; url: string }[];
  columns: {
    id: string;
    title: string;
    links: { id: string; label: string; url: string }[];
  }[];
  copyright: string;
  bottomLinks: { id: string; label: string; url: string }[];
}

export interface DigitalTestimonialItem {
  id: string;
  image: string;
  name: string;
  location: string;
  rating: number;
  reviewText: string;
}

export interface DigitalTestimonialsData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2?: string;
  testimonials: DigitalTestimonialItem[];
}

export interface MissionVisionFeature {
  id: string;
  title: string;
}

export interface MissionVisionSectionData {
  id?: string;
  number: string;
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  titleHighlight: string;
  description: string;
  features: MissionVisionFeature[];
  image: string;
  imagePosition: 'left' | 'right';
  overlayText: string;
}
