import { GalleryBlock } from '@/components/blocks/gallery/block';
import { BackButton } from '../elements/back-button';

const Page = () => (
  <>
    <GalleryBlock
      dark
      block={{
        rokkaname: 'fotobox*',
        id: 'fotobox',
      }}
    />
    <BackButton />
  </>
);

export default Page;
