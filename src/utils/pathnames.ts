type PageRecordParent = {
  slug: string;
  parent?: PageRecordParent | null;
};

export type PageRecord = {
  id: string;
  slug: string;
  parent?: PageRecordParent | null;
};

export type LinkableRecords = 'BlogpostRecord' | 'OfferRecord' | 'ProjectRecord' | 'TopicRecord' | 'PageRecord' | undefined;

const buildPathByParents = (page: PageRecord) => {
  const path: string[] = [];
  while (page) {
    path.unshift(page.slug);
    page = page.parent as PageRecord;
  }

  return '/' + path.join('/');
};

export const generatePathForRecord = ({
  slug,
  type,
  parent,
}: {
  slug: string | null;
  type: LinkableRecords;
  parent?: PageRecord | null;
}): string => {
  let pagePath = `/${slug}`;
  if (type === 'PageRecord' && parent) {
    const path = buildPathByParents(parent);
    pagePath = `${path}/${slug}`;
  }

  switch (type) {
    case 'BlogpostRecord':
      return `/blog/${slug}`;
    case 'OfferRecord':
      return `/angebot/${slug}`;
    case 'ProjectRecord':
      return `/projekte/${slug}`;
    case 'TopicRecord':
      return `/t/${slug}`;
    case 'PageRecord':
      return pagePath;
    default:
      return '';
  }
};
