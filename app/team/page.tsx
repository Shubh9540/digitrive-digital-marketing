import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { TeamSection } from '@/components/sections/TeamSection';
import { CounterSection } from '@/components/sections/CounterSection';

export default function TeamPage() {
  const templateData = rawData as DigitriveTemplateData;
  const sectionData = templateData.categories.Digitrive.sections;
  const commonData = templateData.common;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      
      {/* Dynamic Breadcrumb for Team page */}
      <Breadcrumb data={commonData.breadcrumbs?.TeamBreadcrumb} />

      {/* Team Section (same as Home page) */}
      <TeamSection data={sectionData.Team?.variants?.DigitalTeam1} />
      
      {/* Counter Section */}
      <CounterSection data={sectionData.Counter?.variants?.DigitalCounter1} />

      <Footer data={commonData.DigitalFooter} />
    </main>
  );
}
