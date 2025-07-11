import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import { BlogPost } from '@/components/Blog';
import { ArticleJsonLd } from '@/components/JsonLd';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Inlägg hittades inte',
      description: 'Det begärda blogginlägget kunde inte hittas.',
    };
  }

  const publishedTime = new Date(post.frontmatter.date).toISOString();
  const title = `${post.frontmatter.title} | Anpassad Webb`;
  const description = post.frontmatter.description;
  const url = `/blogg/${params.slug}`;
  const ogImage = post.frontmatter.thumbnail || post.frontmatter.image;

  return {
    title,
    description,
    authors: [{ name: post.frontmatter.author }],
    keywords: post.frontmatter.tags,
    openGraph: {
      title: post.frontmatter.title,
      description,
      type: 'article',
      publishedTime,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
      images: ogImage ? [
        {
          url: ogImage,
          alt: post.frontmatter.imageAlt || post.frontmatter.title,
          width: 1200,
          height: 630,
        }
      ] : undefined,
      url,
      siteName: 'Anpassad Webb',
      locale: 'sv_SE',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return notFound();
  }
  
  return (
    <>
      <ArticleJsonLd
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        author={post.frontmatter.author}
        datePublished={new Date(post.frontmatter.date).toISOString()}
        url={`/blogg/${params.slug}`}
        image={post.frontmatter.image}
        keywords={post.frontmatter.tags}
      />
      <BlogPost post={post} />
    </>
  );
}
