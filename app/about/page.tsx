import { Metadata } from 'next';
import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { CounterSection } from '@/components/sections/CounterSection';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'About Us - Digitrive',
  description: 'Learn more about Digitrive and our digital marketing services.',
};

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  const templateData: DigitriveTemplateData = rawData as unknown as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      
      <Breadcrumb data={commonData?.breadcrumbs?.AboutBreadcrumb} />
      <AboutUs data={sectionData.AboutUs?.variants?.DigitalAbout1} hideButton={true} />
      <CounterSection data={sectionData.Counter?.variants?.DigitalCounter1} />
      <WhyChooseUsSection data={sectionData.WhyChooseUs?.variants?.DigitalWhyChooseUs1} />

      <Footer data={commonData?.DigitalFooter} />
    </main>
  );
}
