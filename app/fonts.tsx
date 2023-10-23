import { IBM_Plex_Serif, Inter } from 'next/font/google';

export const inter = Inter({
  variable: '--sans-font',
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
});

export const ibm_plex = IBM_Plex_Serif({
  variable: '--serif-font',
  weight: '400',
  subsets: ['latin'],
  style: 'italic',
  display: 'swap',
});
