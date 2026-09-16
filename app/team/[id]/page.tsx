import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { TeamDetailContent } from '@/components/sections/TeamDetailContent';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function TeamDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const templateData = rawData as DigitriveTemplateData;
  const sectionData = templateData.categories.Digitrive.sections;
  const commonData = templateData.common;

  // Use optional chaining carefully since TeamDetail might not exist in old JSONs
  const memberData = sectionData.TeamDetail?.variants?.[id];

  if (!memberData) {
    notFound();
  }

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      
      {/* Dynamic Breadcrumb for Team Detail page */}
      <Breadcrumb data={commonData.breadcrumbs?.TeamDetailBreadcrumb} />

      {/* Team Member Detail Content */}
      <TeamDetailContent data={memberData} />

      <Footer data={commonData.DigitalFooter} />
    </main>
  );
}
