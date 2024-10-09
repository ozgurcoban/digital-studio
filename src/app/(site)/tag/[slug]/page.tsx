import { POSTS_QUERYResult } from '../../../../../sanity.types';
import { client, sanityFetch } from '@/sanity/lib/client';
import { Posts } from '@/components/Posts';
import { POSTS_BY_TAG_QUERY } from '@/sanity/lib/queries';

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const tags = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "tag" && defined(slug.current)]{
      "slug": slug.current
    }`,
  );

  return tags.map((tag) => ({
    slug: tag.slug,
  }));
}

const SingleTagPage = async ({ params }: PageProps) => {
  const { slug } = params;

  const posts = await sanityFetch<POSTS_QUERYResult>({
    query: POSTS_BY_TAG_QUERY,
    params: { slug },
  });

  return (
    <div>
      <h1 className="text-4xl uppercase">#{slug} #tags</h1>
      <Posts posts={posts} />
    </div>
  );
};
export default SingleTagPage;
