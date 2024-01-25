import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/esm/types';

type Variables = {
  slug?: string;
  topicIds?: string[];
  name?: string;
  date?: string;
};

type Options<TResult = unknown> = {
  document: TypedDocumentNode<TResult, Variables>;
  variables?: Variables;
  includeDrafts?: boolean;
  revalidateTags?: string[];
};

export async function queryDatoCMS<TResult = unknown>({
  document,
  variables,
  includeDrafts,
  revalidateTags,
}: Options<TResult>): Promise<TResult> {
  const headers: GraphQLClientRequestHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Exclude-Invalid': 'true',
    Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true';
  }

  if (process.env.NEXT_DATOCMS_ENVIRONMENT) {
    headers['X-Environment'] = process.env.NEXT_DATOCMS_ENVIRONMENT;
  }

  let tags = revalidateTags ?? [];

  if (variables?.slug) {
    tags = [...tags, variables.slug];
  }

  const response = await fetch('https://graphql.datocms.com/', {
    cache: includeDrafts ? 'no-store' : 'force-cache',
    next: { tags },
    method: 'POST',
    headers,
    body: JSON.stringify({ query: print(document), variables }),
  });

  if (!response.ok) {
    throw new Error(`DatoCMS request failed: ${response.statusText}`);
  }

  const { data } = (await response.json()) as { data: TResult };

  return data;
}
