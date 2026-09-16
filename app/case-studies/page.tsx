import { Metadata } from 'next';
import rawData from '@/data/templates.json';
import { DigitriveTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Case Studies - DigiTrive',
  description: 'Explore our case studies to see how DigiTrive has helped businesses grow through data-driven digital marketing strategies.',
};

export const dynamic = 'force-dynamic';

export default function CaseStudiesPage() {
  const templateData: DigitriveTemplateData = rawData as unknown as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return null;

  return (
    <main className="bg-[#020914] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      <Breadcrumb data={commonData?.breadcrumbs?.CaseStudiesBreadcrumb} />
      <CaseStudies data={sectionData.CaseStudies?.variants?.DigitalCaseStudies1} hideButton centerHeading />
      <Footer data={commonData?.DigitalFooter} />
    </main>
  );
}
