'use client';

import { BrandColor, classNames, mapColorToBG, mapColorToLightBG } from '@smartive/guetzli';
import { FC } from 'react';
import { SlackTheme } from './slack-theme';

export const Colors: FC = () => (
  <>
    <div className="mb-8 flex flex-col items-center gap-2 sm:flex-row">
      <SlackTheme />
    </div>
    <ul className="grid gap-8 xl:grid-cols-2">
      <ColorBox
        color="apricot"
        name="Apricot"
        values={[
          { label: 'RGB', content: '248, 147, 90' },
          { label: 'CMYK', content: '0/45/65/0' },
          { label: 'Pantone', content: '1565 C' },
          { label: 'HEX', content: '#F8935A' },
        ]}
      />
      <ColorBox
        color="mint"
        name="Mint"
        values={[
          { label: 'RGB', content: '125, 221, 209' },
          { label: 'CMYK', content: '40/0/25/0' },
          { label: 'Pantone', content: '7471 C' },
          { label: 'HEX', content: '#7DDDD1' },
        ]}
      />
      <ColorBox
        color="cornflower"
        name="Cornflower"
        values={[
          { label: 'RGB', content: '105, 134, 232' },
          { label: 'CMYK', content: '0/45/65/0' },
          { label: 'Pantone', content: '2130 C' },
          { label: 'HEX', content: '#6986E8' },
        ]}
      />
      <ColorBox
        color="gray"
        name="Grau"
        values={[
          { label: 'RGB', content: '248, 247, 245' },
          { label: 'CMYK', content: '0/0/2/5' },
          { label: 'Pantone', content: 'Cool Gray 1 C' },
          { label: 'HEX', content: '#F8F7F5' },
        ]}
      />
      <ColorBox
        color="darkness"
        name="Darkness"
        values={[
          { label: 'RGB', content: '37, 37, 37' },
          { label: 'CMYK', content: '30/30/30/90' },
          { label: 'Pantone', content: 'Black 7 C' },
          { label: 'HEX', content: '#252525' },
        ]}
      />
    </ul>
  </>
);

type BrandColorOrTint = BrandColor | 'gray' | 'darkness';
type ColorBoxProps = {
  color: BrandColorOrTint;
  name: string;
  values: ColorValue[];
};

const ColorBox: FC<ColorBoxProps> = ({ color, name, values }) => (
  <li
    className={classNames(
      'flex h-64 overflow-hidden rounded sm:bg-white-100',
      color === 'gray'
        ? 'rounded-l border-8 border-white-100 bg-white-200 sm:border-0'
        : color === 'darkness'
          ? 'bg-black text-white-200 sm:text-black'
          : mapColorToBG(color),
    )}
  >
    <div
      className={classNames(
        'flex-0 hidden h-64 w-64 sm:block',
        color === 'gray'
          ? 'rounded-l border-4 border-white-100 bg-white-200'
          : color === 'darkness'
            ? 'bg-black'
            : mapColorToBG(color),
      )}
    />
    <div className="p-6">
      <h3 className="mb-2 font-sans text-sm font-bold lg:mb-4 lg:text-lg">{name}</h3>
      <ColorValues values={values} color={color} />
    </div>
  </li>
);

type ColorValue = {
  label: string;
  content: string;
};

const ColorValues: FC<{ values: ColorValue[]; color: BrandColorOrTint }> = ({ values, color }) => (
  <dl className="grid grid-cols-2 gap-x-12 gap-y-4">
    {values.map(({ label, content }) => (
      <div key={label} className="flex flex-col">
        <dt className="mb-1 text-xxs font-bold md:text-xs">{label}</dt>
        <dd
          className={classNames(
            'select-all whitespace-nowrap rounded-[4px] px-[6px] py-[2px] text-sm sm:bg-white-200 md:text-base',
            color === 'gray' ? 'bg-white-200' : color === 'darkness' ? 'bg-apricot-800' : mapColorToLightBG(color),
          )}
        >
          {content}
        </dd>
      </div>
    ))}
  </dl>
);
