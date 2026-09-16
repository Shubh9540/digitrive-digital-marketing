import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import { DigitriveTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { CaseStudyDetailContent } from '@/components/sections/CaseStudyDetailContent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const templateData: DigitriveTemplateData = rawData as unknown as DigitriveTemplateData;
  const caseData = templateData?.categories?.Digitrive?.sections?.CaseStudyDetail?.variants?.[id];
  if (!caseData) return { title: 'Case Study Not Found' };
  return {
    title: `${caseData.title} - DigiTrive`,
    description: caseData.description,
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const templateData: DigitriveTemplateData = rawData as unknown as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return notFound();

  const caseData = sectionData?.CaseStudyDetail?.variants?.[id];
  if (!caseData) return notFound();

  return (
    <main className="bg-[#020914] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      <Breadcrumb data={commonData?.breadcrumbs?.CaseStudyDetailBreadcrumb} />
      <CaseStudyDetailContent data={caseData} />
      <Footer data={commonData?.DigitalFooter} />
    </main>
  );
}
