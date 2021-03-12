import Image from 'next/image';
import { LinkList } from '../compositions/link-list';
import { Heading3 } from '../elements/heading-3';

export default function Custom404() {
  return (
    <div className="grid grid-flow-row justify-items-center my-32">
      <div className="hidden md:block">
        <Image src="/images/broccoli.png" alt="Broccoli" priority width={300} height={300} />
      </div>
      <div className="block md:hidden">
        <Image src="/images/broccoli.png" alt="Broccoli" priority width={200} height={200} />
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
