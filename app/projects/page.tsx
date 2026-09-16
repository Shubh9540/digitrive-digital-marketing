import { Metadata } from 'next';
import rawData from '@/data/templates.json';
import { DigitriveTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ProjectsGridSection } from '@/components/sections/ProjectsGridSection';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Our Projects - Digitrive',
  description: 'Explore our latest digital solutions and projects.',
};

export default function ProjectsPage() {
  const templateData: DigitriveTemplateData = rawData as unknown as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      
      <Breadcrumb data={commonData?.breadcrumbs?.ProjectsBreadcrumb} />
      
      <ProjectsGridSection data={sectionData.ProjectsGrid?.variants?.DigitriveProjectsGrid1} />
      
      <Footer data={commonData?.DigitalFooter} />
    </main>
  );
}
