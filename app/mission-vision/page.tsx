import { Metadata } from 'next';
import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { MissionSection } from '@/components/sections/MissionSection';
import { VisionSection } from '@/components/sections/VisionSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Mission & Vision - Digitrive',
  description: 'Learn about the mission and vision driving our digital innovation.',
};

export const dynamic = 'force-dynamic';

export default function MissionVisionPage() {
  const templateData: DigitriveTemplateData = rawData as unknown as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      
      <Breadcrumb data={commonData?.breadcrumbs?.MissionVisionBreadcrumb} />
      
      <MissionSection data={sectionData.Mission?.variants?.DigitalMission1} />
      <VisionSection data={sectionData.Vision?.variants?.DigitalVision1} />
      
      {/* Testimonials section as requested */}
      <Testimonials data={sectionData.Testimonials?.variants?.DigitalTestimonials1} />

      <Footer data={commonData?.DigitalFooter} />
    </main>
  );
}
