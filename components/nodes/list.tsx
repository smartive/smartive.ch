import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const List: FC<Props> = ({ children }) => (
  <ul className="ml-5 list-outside list-disc space-y-2 marker:text-apricot-500">{children}</ul>
);
