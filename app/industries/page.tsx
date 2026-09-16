import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { IndustriesGridSection } from '@/components/sections/IndustriesGridSection';

export default function IndustriesPage() {
  const templateData = rawData as DigitriveTemplateData;
  const sectionData = templateData.categories.Digitrive.sections;
  const commonData = templateData.common;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      
      <Breadcrumb data={commonData.breadcrumbs?.IndustriesBreadcrumb} />

      <IndustriesGridSection data={sectionData.IndustriesGrid?.variants?.DigitriveIndustriesGrid1} />

      <Footer data={commonData.DigitalFooter} />
    </main>
  );
}
