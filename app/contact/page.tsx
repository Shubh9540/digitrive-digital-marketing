import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { ContactSection } from '@/components/sections/ContactSection';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const templateData = rawData as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !sectionData.Contact) {
    notFound();
  }

  const breadcrumbData = {
    ...(commonData.breadcrumbs?.ContactBreadcrumb || { title: 'Contact Us', paths: [], bgImage: '/banner/breadcrumb.jpg' }),
    title: 'Contact Us',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Contact Us' }
    ]
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      <Breadcrumb data={breadcrumbData} />
      <ContactSection data={sectionData.Contact?.variants?.DigitalContact1} />
      <Footer data={commonData.DigitalFooter} />
    </main>
  );
}
