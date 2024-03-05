import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const ListItem: FC<Props> = ({ children }) => <li className="md:max-w-prose">{children}</li>;
