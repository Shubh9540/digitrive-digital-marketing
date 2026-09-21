import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { IndustryDetailSidebar } from '@/components/sections/IndustryDetailSidebar';
import { IndustryDetailContent } from '@/components/sections/IndustryDetailContent';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function IndustryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const templateData = rawData as DigitriveTemplateData;
  const sectionData = templateData.categories.Digitrive.sections;
  const commonData = templateData.common;

  const industryData = sectionData.IndustryDetail?.variants?.[id];

  if (!industryData) {
    notFound();
  }

  // Generate dynamic breadcrumb based on industry title
  const breadcrumbData = {
    ...(commonData.breadcrumbs?.IndustryDetailBreadcrumb || { title: 'Industry Detail', paths: [], bgImage: '' }),
    title: industryData.title,
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Industries We Serve', url: '/industries' },
      { label: industryData.title }
    ]
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      
      {/* Dynamic Breadcrumb for Industry Detail page */}
      <Breadcrumb data={breadcrumbData} />

      {/* Main Page Layout (Sidebar + Content) */}
      <section className="bg-[#020914] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-start">
            
            {/* Left Sidebar (30% width) */}
            <div className="w-full lg:w-1/3 flex-shrink-0 lg:sticky lg:top-32 h-fit">
              <IndustryDetailSidebar data={industryData.sidebar} currentId={id} />
            </div>
            
            {/* Right Main Content (70% width) */}
            <div className="w-full lg:w-2/3">
              <IndustryDetailContent data={industryData} />
            </div>

          </div>
        </div>
      </section>

      <Footer data={commonData.DigitalFooter} />
    </main>
  );
}
