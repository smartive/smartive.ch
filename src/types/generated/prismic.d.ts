export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTime: any;
  /** Raw JSON value */
  Json: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type Dini_M = _Document & _Linkable & {
  __typename?: 'Dini_m';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
};

/** A connection to a list of items. */
export type Dini_MConnectionConnection = {
  __typename?: 'Dini_mConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Dini_MConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Dini_MConnectionEdge = {
  __typename?: 'Dini_mConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Dini_M;
};

export type Dini_Mm = _Document & _Linkable & {
  __typename?: 'Dini_mm';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  body?: Maybe<Array<Dini_MmBody>>;
  text?: Maybe<Scalars['Json']>;
  titel?: Maybe<Scalars['Json']>;
};

export type Dini_MmBody = Dini_MmBodyYolo;

export type Dini_MmBodyYolo = {
  __typename?: 'Dini_mmBodyYolo';
  fields?: Maybe<Array<Dini_MmBodyYoloFields>>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Dini_MmBodyYoloPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type Dini_MmBodyYoloFields = {
  __typename?: 'Dini_mmBodyYoloFields';
  sadfghj?: Maybe<_Linkable>;
};

export type Dini_MmBodyYoloPrimary = {
  __typename?: 'Dini_mmBodyYoloPrimary';
  sdrftghj?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type Dini_MmConnectionConnection = {
  __typename?: 'Dini_mmConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Dini_MmConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Dini_MmConnectionEdge = {
  __typename?: 'Dini_mmConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Dini_Mm;
};

export type Meta = {
  __typename?: 'Meta';
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The tags of the document. */
  tags: Array<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
};

export type Page = _Document & _Linkable & {
  __typename?: 'Page';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  body?: Maybe<Array<PageBody>>;
};

export type PageBody = PageBodyCards | PageBodyContact | PageBodyCustomer_Logos | PageBodyHero_Image | PageBodyNewsletter | PageBodyPage_Header | PageBodyTestimonial;

export type PageBodyCards = {
  __typename?: 'PageBodyCards';
  fields?: Maybe<Array<PageBodyCardsFields>>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PageBodyCardsPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type PageBodyCardsFields = {
  __typename?: 'PageBodyCardsFields';
  background?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Json']>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linklabel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PageBodyCardsPrimary = {
  __typename?: 'PageBodyCardsPrimary';
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PageBodyContact = {
  __typename?: 'PageBodyContact';
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PageBodyContactPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type PageBodyContactPrimary = {
  __typename?: 'PageBodyContactPrimary';
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portrait?: Maybe<Scalars['Json']>;
  text?: Maybe<Scalars['String']>;
};

export type PageBodyCustomer_Logos = {
  __typename?: 'PageBodyCustomer_logos';
  fields?: Maybe<Array<PageBodyCustomer_LogosFields>>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PageBodyCustomer_LogosPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type PageBodyCustomer_LogosFields = {
  __typename?: 'PageBodyCustomer_logosFields';
  logo?: Maybe<Scalars['Json']>;
};

export type PageBodyCustomer_LogosPrimary = {
  __typename?: 'PageBodyCustomer_logosPrimary';
  title?: Maybe<Scalars['String']>;
};

export type PageBodyHero_Image = {
  __typename?: 'PageBodyHero_image';
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PageBodyHero_ImagePrimary>;
  type?: Maybe<Scalars['String']>;
};

export type PageBodyHero_ImagePrimary = {
  __typename?: 'PageBodyHero_imagePrimary';
  image?: Maybe<Scalars['Json']>;
};

export type PageBodyNewsletter = {
  __typename?: 'PageBodyNewsletter';
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PageBodyNewsletterPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type PageBodyNewsletterPrimary = {
  __typename?: 'PageBodyNewsletterPrimary';
  title?: Maybe<Scalars['String']>;
};

export type PageBodyPage_Header = {
  __typename?: 'PageBodyPage_header';
  fields?: Maybe<Array<PageBodyPage_HeaderFields>>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PageBodyPage_HeaderPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type PageBodyPage_HeaderFields = {
  __typename?: 'PageBodyPage_headerFields';
  link?: Maybe<Scalars['String']>;
  linklabel?: Maybe<Scalars['String']>;
};

export type PageBodyPage_HeaderPrimary = {
  __typename?: 'PageBodyPage_headerPrimary';
  intro?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['String']>;
};

export type PageBodyTestimonial = {
  __typename?: 'PageBodyTestimonial';
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PageBodyTestimonialPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type PageBodyTestimonialPrimary = {
  __typename?: 'PageBodyTestimonialPrimary';
  credit?: Maybe<Scalars['String']>;
  portrait?: Maybe<Scalars['Json']>;
  quote?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type PageConnectionConnection = {
  __typename?: 'PageConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type PageConnectionEdge = {
  __typename?: 'PageConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Pageheader = _Document & _Linkable & {
  __typename?: 'Pageheader';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  intro?: Maybe<Scalars['Json']>;
  linkgroup?: Maybe<Array<PageheaderLinkgroup>>;
  title?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type PageheaderConnectionConnection = {
  __typename?: 'PageheaderConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PageheaderConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type PageheaderConnectionEdge = {
  __typename?: 'PageheaderConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Pageheader;
};

export type PageheaderLinkgroup = {
  __typename?: 'PageheaderLinkgroup';
  link?: Maybe<_Linkable>;
};

export type Project = _Document & _Linkable & {
  __typename?: 'Project';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  lead?: Maybe<Scalars['Json']>;
  links?: Maybe<Array<ProjectLinks>>;
  teaser_image?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type ProjectConnectionConnection = {
  __typename?: 'ProjectConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProjectConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type ProjectConnectionEdge = {
  __typename?: 'ProjectConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Project;
};

export type ProjectLinks = {
  __typename?: 'ProjectLinks';
  link?: Maybe<_Linkable>;
};

export type Query = {
  __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  allDini_mms: Dini_MmConnectionConnection;
  allDini_ms: Dini_MConnectionConnection;
  allPageheaders: PageheaderConnectionConnection;
  allPages: PageConnectionConnection;
  allProjects: ProjectConnectionConnection;
  allSeedss: SeedsConnectionConnection;
  page?: Maybe<Page>;
  project?: Maybe<Project>;
  seeds?: Maybe<Seeds>;
};


export type Query_AllDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortDocumentsBy>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAllDini_MmsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortDini_Mmy>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereDini_Mm>;
};


export type QueryAllDini_MsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortDini_My>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAllPageheadersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortPageheadery>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WherePageheader>;
};


export type QueryAllPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortPagey>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAllProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortProjecty>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereProject>;
};


export type QueryAllSeedssArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortSeedsy>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereSeeds>;
};


export type QueryPageArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryProjectArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QuerySeedsArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
};

export type Seeds = _Document & _Linkable & {
  __typename?: 'Seeds';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  body?: Maybe<Array<SeedsBody>>;
  text?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type SeedsBody = SeedsBodyYolo;

export type SeedsBodyYolo = {
  __typename?: 'SeedsBodyYolo';
  fields?: Maybe<Array<SeedsBodyYoloFields>>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<SeedsBodyYoloPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type SeedsBodyYoloFields = {
  __typename?: 'SeedsBodyYoloFields';
  sadfghj?: Maybe<_Linkable>;
};

export type SeedsBodyYoloPrimary = {
  __typename?: 'SeedsBodyYoloPrimary';
  sdrftghj?: Maybe<Scalars['Json']>;
  title1?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type SeedsConnectionConnection = {
  __typename?: 'SeedsConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SeedsConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type SeedsConnectionEdge = {
  __typename?: 'SeedsConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Seeds;
};

export enum SortDini_Mmy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC'
}

export enum SortDini_My {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortPageheadery {
  IntroAsc = 'intro_ASC',
  IntroDesc = 'intro_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortPagey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortProjecty {
  LeadAsc = 'lead_ASC',
  LeadDesc = 'lead_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortSeedsy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type WhereDini_Mm = {
  /** text */
  text_fulltext?: InputMaybe<Scalars['String']>;
  /** titel */
  titel_fulltext?: InputMaybe<Scalars['String']>;
};

export type WherePageheader = {
  /** intro */
  intro_fulltext?: InputMaybe<Scalars['String']>;
  linkgroup?: InputMaybe<WherePageheaderLinkgroup>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

export type WherePageheaderLinkgroup = {
  /** link */
  link?: InputMaybe<Scalars['String']>;
};

export type WhereProject = {
  /** lead */
  lead_fulltext?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<WhereProjectLinks>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

export type WhereProjectLinks = {
  /** link */
  link?: InputMaybe<Scalars['String']>;
};

export type WhereSeeds = {
  /** text */
  text_fulltext?: InputMaybe<Scalars['String']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: '_DocumentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: _Document;
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: '_ExternalLink';
  _linkType?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: '_FileLink';
  _linkType?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: '_ImageLink';
  _linkType?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']>;
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
};

export type PrismicPageQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type PrismicPageQuery = { __typename?: 'Query', page?: { __typename?: 'Page', body?: Array<{ __typename: 'PageBodyCards', primary?: { __typename?: 'PageBodyCardsPrimary', title?: string | null, description?: string | null } | null, fields?: Array<{ __typename?: 'PageBodyCardsFields', image?: any | null, title?: string | null, label?: string | null, description?: string | null, link?: string | null, linklabel?: string | null, background?: string | null }> | null } | { __typename: 'PageBodyContact', primary?: { __typename?: 'PageBodyContactPrimary', portrait?: any | null, text?: string | null, email?: string | null, phone?: string | null } | null } | { __typename: 'PageBodyCustomer_logos', primary?: { __typename?: 'PageBodyCustomer_logosPrimary', title?: string | null } | null, fields?: Array<{ __typename?: 'PageBodyCustomer_logosFields', logo?: any | null }> | null } | { __typename: 'PageBodyHero_image', primary?: { __typename?: 'PageBodyHero_imagePrimary', image?: any | null } | null } | { __typename: 'PageBodyNewsletter', primary?: { __typename?: 'PageBodyNewsletterPrimary', title?: string | null } | null } | { __typename: 'PageBodyPage_header', primary?: { __typename?: 'PageBodyPage_headerPrimary', title?: string | null, intro?: any | null } | null, fields?: Array<{ __typename?: 'PageBodyPage_headerFields', linklabel?: string | null, link?: string | null }> | null } | { __typename: 'PageBodyTestimonial', primary?: { __typename?: 'PageBodyTestimonialPrimary', quote?: string | null, credit?: string | null, portrait?: any | null } | null }> | null } | null };


declare module '*/prismic.ts' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const PrismicPage: DocumentNode;

  export default defaultDocument;
}
    