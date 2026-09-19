import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import { DigitriveTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailSidebar } from '@/components/sections/ServiceDetailSidebar';
import { ServiceDetailPageContent } from '@/components/sections/ServiceDetailPageContent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const templateData: DigitriveTemplateData = rawData as unknown as DigitriveTemplateData;
  const serviceData = templateData?.categories?.Digitrive?.sections?.ServiceDetail?.variants?.[id as keyof typeof templateData.categories.Digitrive.sections.ServiceDetail.variants];

  if (!serviceData) {
    return { title: 'Service Not Found' };
  }

  const serviceTitle = (serviceData as any)?.title || 'Service Details';

  return {
    title: `${serviceTitle} - Digitrive`,
    description: `Details about ${serviceTitle} services we offer.`,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const templateData: DigitriveTemplateData = rawData as unknown as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return notFound();

  const serviceData = sectionData.ServiceDetail?.variants?.[id as keyof typeof sectionData.ServiceDetail.variants];

  if (!serviceData) {
    return notFound();
  }

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />

      <Breadcrumb data={commonData?.breadcrumbs?.ServiceDetailBreadcrumb} />

      <section className="bg-[var(--color-bg-main)] py-12 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Sidebar (Sticky) */}
            <div className="w-full lg:w-1/3 xl:w-1/4">
              <div className="sticky top-32 h-fit">
                <ServiceDetailSidebar data={serviceData.sidebar} />
              </div>
            </div>

            {/* Right Main Content */}
            <div className="w-full lg:w-2/3 xl:w-3/4">
              <ServiceDetailPageContent data={serviceData} />
            </div>
          </div>
        </div>
      </section>

      <Footer data={commonData?.DigitalFooter} />
    </main>
  );
}
