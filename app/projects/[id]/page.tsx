import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import { DigitriveTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ProjectDetailContent } from '@/components/sections/ProjectDetailContent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: DigitriveTemplateData = rawData as unknown as DigitriveTemplateData;
  const projectData = templateData?.categories?.Digitrive?.sections?.ProjectDetail?.variants?.[id];

  if (!projectData) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `Project Details - Digitrive`,
    description: `Details about our project.`,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const templateData: DigitriveTemplateData = rawData as unknown as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return notFound();

  const projectData = sectionData.ProjectDetail?.variants?.[id];

  if (!projectData) {
    return notFound();
  }

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      
      <Breadcrumb data={commonData?.breadcrumbs?.ProjectDetailBreadcrumb} />
      
      <ProjectDetailContent data={projectData} />
      
      <Footer data={commonData?.DigitalFooter} />
    </main>
  );
}
