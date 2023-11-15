import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const Paragraph: FC<Props> = ({ children }) => <p className="my-4 md:max-w-prose lg:my-8">{children}</p>;
