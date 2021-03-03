import { FC } from 'react';

type Props = {
  className?: string;
};

export const Clock: FC<Props> = ({ className = '' }) => (
  <svg className={className} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.992 0.627197C3.576 0.627197 0 4.2112 0 8.6272C0 13.0432 3.576 16.6272 7.992 16.6272C12.416 16.6272 16 13.0432 16 8.6272C16 4.2112 12.416 0.627197 7.992 0.627197ZM8 15.0272C4.464 15.0272 1.6 12.1632 1.6 8.6272C1.6 5.0912 4.464 2.2272 8 2.2272C11.536 2.2272 14.4 5.0912 14.4 8.6272C14.4 12.1632 11.536 15.0272 8 15.0272ZM8.4 4.6272H7.2V9.4272L11.4 11.9472L12 10.9632L8.4 8.8272V4.6272Z"
      fill="currentColor"
    />
  </svg>
);
