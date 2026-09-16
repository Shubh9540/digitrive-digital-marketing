import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { BlogGridSection } from '@/components/sections/BlogGridSection';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function BlogPage() {
  const templateData = rawData as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !sectionData.Blogs) {
    notFound();
  }

  // Use dynamic breadcrumb since Blog is its own section
  const breadcrumbData = {
    ...(commonData.breadcrumbs?.BlogBreadcrumb || { title: 'Our Blog', paths: [], bgImage: '/banner/breadcrumb.jpg' }),
    title: 'Our Blog',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Blog' }
    ]
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      <Breadcrumb data={breadcrumbData} />
      <BlogGridSection data={sectionData.Blogs?.variants?.DigitalBlog1} />
      <Footer data={commonData.DigitalFooter} />
    </main>
  );
}
