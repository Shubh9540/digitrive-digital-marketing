import { Metadata } from 'next';
import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Our Clients - Digitrive',
  description: 'Trusted by growing brands worldwide. Digitrive partners with businesses of all sizes to drive measurable digital marketing results.',
};

export const dynamic = 'force-dynamic';

export default function ClientsPage() {
  const templateData: DigitriveTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return null;

  return (
    <main className="bg-[#0b111f] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      <Breadcrumb data={commonData?.breadcrumbs?.ClientsBreadcrumb} />
      <ClientsSection data={sectionData.Clients?.variants?.DigitalClients1} />
      <Footer data={commonData?.DigitalFooter} />
    </main>
  );
}
