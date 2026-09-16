import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { FaqSection } from '@/components/sections/FaqSection';

export const dynamic = 'force-dynamic';

export default function FaqPage() {
  const templateData = rawData as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !sectionData.Faq) {
    return <div>FAQ data not found.</div>;
  }

  const breadcrumbData = {
    ...(commonData.breadcrumbs?.FaqBreadcrumb || { title: 'FAQ', paths: [], bgImage: '/banner/breadcrumb.jpg' }),
    title: 'FAQ',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'FAQ' }
    ]
  };

  return (
    <main className="bg-[#020914] min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      <Breadcrumb data={breadcrumbData} />
      <FaqSection data={sectionData.Faq?.variants?.DigitalFaq1} />
      <Footer data={commonData.DigitalFooter} />
    </main>
  );
}
