import { Metadata } from 'next';
import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { CounterSection } from '@/components/sections/CounterSection';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Why Choose Us - Digitrive',
  description: 'Learn why clients choose Digitrive for their digital marketing needs.',
};

export const dynamic = 'force-dynamic';

export default function WhyChooseUsPage() {
  const templateData: WanderlyTemplateData = rawData as unknown as WanderlyTemplateData;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      
      <Breadcrumb data={commonData?.breadcrumbs?.WhyChooseUsBreadcrumb} />
      
      <WhyChooseUsSection data={sectionData.WhyChooseUs?.variants?.DigitalWhyChooseUs1} />
      <Testimonials data={sectionData.Testimonials?.variants?.DigitalTestimonials1} />
      <CounterSection data={sectionData.Counter?.variants?.DigitalCounter1} />

      <Footer data={commonData?.DigitalFooter} />
    </main>
  );
}
