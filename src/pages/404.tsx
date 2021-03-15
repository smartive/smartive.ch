import Image from 'next/image';
import { LinkList } from '../compositions/link-list';
import { Heading3 } from '../elements/heading-3';

export default function Custom404() {
  return (
    <div className="grid grid-flow-row justify-items-center my-32">
      <div className="relative hidden md:block h-120 w-full">
        <Image src="/images/broccoli-404.svg" alt="Broccoli" priority layout="fill" />
      </div>
      <div className="relative block md:hidden h-36 w-full">
        <Image src="/images/broccoli-404.svg" alt="Broccoli" priority layout="fill" />
      </div>
      <Heading3 as="h1" className="mt-16 text-center">
        Ooops, scheint als ob es hier nichts zu sehen gibt...
      </Heading3>
      <Heading3 as="p">Du könntest stattdessen:</Heading3>
      <LinkList
        links={[
          { label: 'Unsere Projekte ansehen', href: '/projekte' },
          { label: 'In unserem Blog stöbern ', href: '/blog' },
        ]}
      />
    </div>
  );
}
