import { DigitriveTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { BlogDetailContent } from '@/components/sections/BlogDetailContent';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const templateData = rawData as DigitriveTemplateData;
  const sectionData = templateData?.categories?.Digitrive?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !sectionData.BlogDetail || !sectionData.BlogDetail.variants[id]) {
    notFound();
  }

  const blogData = sectionData.BlogDetail.variants[id];

  const breadcrumbData = {
    ...(commonData.breadcrumbs?.BlogDetailBreadcrumb || { title: blogData.title + blogData.titleHighlight, paths: [], bgImage: '/banner/breadcrumb.jpg' }),
    title: blogData.title + blogData.titleHighlight,
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Blog', url: '/blog' },
      { label: blogData.title + blogData.titleHighlight }
    ]
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.DigitriveTopBar1} />
      <Header data={sectionData.Header?.variants?.DigitriveHeader1} />
      <Breadcrumb data={breadcrumbData} />
      <BlogDetailContent data={blogData} />
      <Footer data={commonData.DigitalFooter} />
    </main>
  );
}
