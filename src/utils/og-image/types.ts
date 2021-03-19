import { BrandColor } from '../colors';

export type FileType = 'png' | 'jpeg';

export interface ParsedRequest {
  debug: boolean;
  fileType: FileType;
  text: string;
  theme: BrandColor;
  md: boolean;
  fontSize: string;
  widths: string[];
  heights: string[];
}
