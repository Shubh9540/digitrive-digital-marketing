import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { PricingSection } from '@/components/sections/PricingSection';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function PricingPage() {
  const templateData = rawData as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !sectionData.Pricing) {
    notFound();
  }

  // Use dynamic breadcrumb since Pricing is its own section
  const breadcrumbData = {
    ...(commonData.breadcrumbs?.PricingBreadcrumb || { title: 'Pricing Plans', paths: [], bgImage: '/banner/breadcrumb.jpg' }),
    title: 'Pricing Plans',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Pricing' }
    ]
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      <Breadcrumb data={breadcrumbData} />
      <PricingSection data={sectionData.Pricing?.variants?.DigitrivePricing1} />
      <Footer data={commonData.DigitalFooter} />
    </main>
  );
}
