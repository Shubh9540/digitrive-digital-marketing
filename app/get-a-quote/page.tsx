import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { QuotePageContent } from '@/components/sections/QuotePageContent';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function QuotePage() {
  const templateData = rawData as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !sectionData.Quote) {
    notFound();
  }

  const breadcrumbData = {
    ...(commonData.breadcrumbs?.QuoteBreadcrumb || { title: 'Get a Quote', paths: [], bgImage: '/banner/breadcrumb.jpg' }),
    title: 'Get a Quote',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Get a Quote' }
    ]
  };

  return (
    <main className="bg-[#020914] min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      <Breadcrumb data={breadcrumbData} />
      <QuotePageContent data={sectionData.Quote?.variants?.DigitalQuote1} />
      <Footer data={commonData.DigitalFooter} />
    </main>
  );
}
