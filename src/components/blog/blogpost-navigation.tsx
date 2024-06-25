import { PostNavigationDocument } from '@/graphql/generated';
import { LANG_STRINGS, Language } from '@/utils/const';
import { queryDatoCMS } from '@/utils/query-dato-cms';
import { draftMode } from 'next/headers';
import { FC } from 'react';
import { Link } from '../nodes';

type Props = {
  currentPostPublished: string;
  language: Language;
};

export const BlogpostNavigation: FC<Props> = async ({ currentPostPublished, language }) => {
  const { previousPost, nextPost } = await queryDatoCMS({
    document: PostNavigationDocument,
    variables: { date: currentPostPublished },
    includeDrafts: draftMode().isEnabled,
  });

  return (
    <div className="my-12 grid max-w-[1000px] grid-flow-row gap-4 text-center md:grid-cols-[1fr,1fr,1fr] lg:my-48">
      <div>
        {previousPost[0] && (
          <Link href={`/blog/${previousPost[0].slug}`} title={`Blogpost '${previousPost[0].title}' lesen`}>
            {LANG_STRINGS[language].previous}
          </Link>
        )}
      </div>
      <div>
        <Link href="/blog" title={LANG_STRINGS[language].back} color="cornflower">
          {LANG_STRINGS[language].back}
        </Link>
      </div>
      <div>
        {nextPost[0] && (
          <Link href={`/blog/${nextPost[0].slug}`} title={`Blogpost '${nextPost[0].title}' lesen`} color="mint">
            {LANG_STRINGS[language].next}
          </Link>
        )}
      </div>
    </div>
  );
};
