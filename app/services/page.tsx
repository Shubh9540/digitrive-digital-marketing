import { Metadata } from 'next';
import rawData from '@/data/templates.json';
import { DigitriveTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Services } from '@/components/sections/Services';
import { CounterSection } from '@/components/sections/CounterSection';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Our Services - Digitrive',
  description: 'Explore the wide range of digital services we offer.',
};

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: DigitriveTemplateData = rawData as unknown as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      
      <Breadcrumb data={commonData?.breadcrumbs?.ServicesBreadcrumb} />
      
      <Services data={sectionData.Services?.variants?.DigitalServices1} />
      <CounterSection data={sectionData.Counter?.variants?.DigitalCounter1} />
      
      <Footer data={commonData?.DigitalFooter} />
    </main>
  );
}
