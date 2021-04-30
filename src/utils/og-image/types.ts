import { BrandColor } from '@smartive/guetzli';

export type FileType = 'png' | 'jpeg';

export interface ParsedRequest {
  debug: boolean;
  fileType: FileType;
  text: string;
  theme: BrandColor;
  md: boolean;
  fontSize: string;
  width: number;
  height: number;
}
