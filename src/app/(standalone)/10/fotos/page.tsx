import { GalleryBlock } from '@/components/blocks/gallery/block';
import { BackButton } from '../elements/back-button';

const Page = () => (
  <>
    <GalleryBlock
      dark
      block={{
        rokkaname: 'party*',
        id: 'party',
      }}
    />
    <BackButton />
  </>
);

export default Page;
