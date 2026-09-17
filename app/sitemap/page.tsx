import { Metadata } from 'next';
import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SitemapPageContent } from '@/components/sections/SitemapPageContent';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Sitemap - Digitrive',
  description: 'Navigate through Digitrive website easily using our sitemap.',
};

export const dynamic = 'force-dynamic';

export default function SitemapPage() {
  const templateData: DigitriveTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return null;

  return (
    <main className="bg-[#0b111f] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      <Breadcrumb data={commonData?.breadcrumbs?.SitemapBreadcrumb} />
      <SitemapPageContent data={sectionData.Sitemap?.variants?.DigitalSitemap1} />
      <Footer data={commonData?.DigitalFooter} />
    </main>
  );
}
