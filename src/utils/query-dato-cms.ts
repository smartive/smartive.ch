import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';

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
  if (!process.env.NEXT_DATOCMS_API_TOKEN) {
    throw new Error('Missing NEXT_DATOCMS_API_TOKEN');
  }

  const headers: HeadersInit = {
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
    next: { tags, revalidate: includeDrafts ? 0 : 3600 },
    method: 'POST',
    headers,
    body: JSON.stringify({ query: print(document), variables }),
  });

  if (!response.ok) {
    const body = await response.text();

    throw new Error(`DatoCMS request failed: ${response.status}\n${body}`);
  }

  const body = (await response.json()) as { data: TResult } | { errors: unknown[] };

  if ('errors' in body) {
    throw new Error(`Invalid GraphQL request: ${body.errors}`); // eslint-disable-line @typescript-eslint/restrict-template-expressions
  }

  return body.data;
}
