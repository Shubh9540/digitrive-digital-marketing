import React from 'react';
import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { CounterSection } from '@/components/sections/CounterSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { BlogSection } from '@/components/sections/BlogSection';

export const dynamic = 'force-dynamic';

export default function Home() {
  // Using WanderlyTemplateData structure as requested to maintain the original JSON format
  const templateData: WanderlyTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div className="text-white p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      <HeroSection data={sectionData.HeroSection?.variants?.DigitalHero1} />
      <AboutUs data={sectionData.AboutUs?.variants?.DigitalAbout1} />
      <Services data={sectionData.Services?.variants?.DigitalServices1} />
      <CaseStudies data={sectionData.CaseStudies?.variants?.DigitalCaseStudies1} />
      <CounterSection data={sectionData.Counter?.variants?.DigitalCounter1} />
      <TeamSection data={sectionData.Team?.variants?.DigitalTeam1} />
      <BlogSection data={sectionData.Blogs?.variants?.DigitalBlog1} />
      
      {/* Footer is rendered at the very end */}
      <Footer data={commonData?.DigitalFooter} />
    </main>
  );
}
