import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const Serif: FC<Props> = ({ children }) => <em className="font-serif font-normal italic">{children}</em>;
