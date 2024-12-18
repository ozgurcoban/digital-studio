import { POSTS_QUERYResult } from '../../../../../sanity.types';
import { client, sanityFetch } from '@/sanity/lib/client';
import { Posts } from '@/components/Posts';
import { POSTS_BY_TAG_QUERY } from '@/sanity/lib/queries';
import SubHero from '@/components/SubHero';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const tags = await client.fetch<{ slug: string }[]>(
    `*[_type == "tag" && defined(slug.current)]{
      "slug": slug.current
    }`,
  );

  return tags.map((tag) => ({
    slug: tag.slug,
  }));
}

const SingleTagPage = async (props: PageProps) => {
  const params = await props.params;
  const { slug } = params;

  const posts = await sanityFetch<POSTS_QUERYResult>({
    query: POSTS_BY_TAG_QUERY,
    params: { slug },
    tags: [`tag:${params.slug}`],
  });

  const currentTag = posts[0]?.tags?.find((tag) => tag?.slug?.current === slug);
  const currentTagTitle = currentTag?.title;

  return (
    <>
      {/* <SubHero
        title={currentTagTitle}
        textAlign="center"
        description="hitta din favvotag"
        alt="Tags"
      /> */}
      <Posts posts={posts} />
    </>
  );
};
export default SingleTagPage;
