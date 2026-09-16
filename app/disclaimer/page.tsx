import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { LegalPageContent } from '@/components/sections/LegalPageContent';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function DisclaimerPage() {
  const templateData = rawData as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !sectionData.Legal || !sectionData.Legal.variants.Disclaimer) {
    notFound();
  }

  const breadcrumbData = {
    ...(commonData.breadcrumbs?.DisclaimerBreadcrumb || { title: 'Disclaimer', paths: [], bgImage: '/banner/breadcrumb.jpg' }),
    title: 'Disclaimer',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Disclaimer' }
    ]
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      <Breadcrumb data={breadcrumbData} />
      <LegalPageContent data={sectionData.Legal.variants.Disclaimer} />
      <Footer data={commonData.DigitalFooter} />
    </main>
  );
}
