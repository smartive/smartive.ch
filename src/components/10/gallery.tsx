import { FC, useCallback, useEffect, useRef, useState } from 'react';
import NextImage from 'next/legacy/image';
import Gallery from 'react-photo-gallery-next';
import Glider from 'glider-js';
import 'glider-js/glider.min.css';
import { Photo, rokkaLoader } from '../../services/cloud-storage';

type Props = {
  photos: Photo[];
};

export const SmartGallery: FC<Props> = ({ photos }) => {
  const gliderListRef = useRef(null);

  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const showViewer = currentImage !== null;

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(null);
  };

  useEffect(() => {
    let glider;
    let handleCloseAndArrow;
    if (showViewer && gliderListRef.current) {
      glider = new Glider(gliderListRef.current, {
        slidesToShow: 1,
        draggable: false,
        slidesToScroll: 1,
        scrollLock: true,
        arrows: {
          prev: '.glider-prev-test',
          next: '.glider-next-test',
        },
      });

      handleCloseAndArrow = (e) => {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowLeft') {
          glider.scrollItem(glider.getCurrentSlide() - 1);
        } else if (e.key === 'ArrowRight') {
          glider.scrollItem(glider.getCurrentSlide() + 1);
        }
      };
      window.addEventListener('keydown', handleCloseAndArrow);

      glider.scrollItem(currentImage);
      glider.refresh(true);
    }
    return () => {
      glider && glider.destroy();
      handleCloseAndArrow && window.removeEventListener('keydown', handleCloseAndArrow);
    };
  }, [currentImage]);

  return (
    <>
      <div className={'sm:px-2 md:px-8 bg-black md:pb-8'}>
        <Gallery
          photos={photos}
          onClick={openLightbox}
          renderImage={({ photo, index, onClick }) => {
            return (
              <NextImage
                key={'image-' + photo.key}
                src={photo.src}
                width={photo.width}
                height={photo.height}
                onClick={(event) => onClick(event, { index })}
                className={'cursor-pointer'}
                loader={rokkaLoader}
              ></NextImage>
            );
          }}
        />
      </div>
      {showViewer ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 w-screen h-screen">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-black outline-none focus:outline-none">
                <div className="p-6 flex-none w-full h-full">
                  <button
                    type="button"
                    className="absolute lg:top-3 lg:right-2.5 right-6 top-10 text-white-200 bg-transparent rounded-full text-sm p-1.5 ml-auto inline-flex items-center hover:bg-white-200/50 hover:text-white-100 z-50"
                    onClick={() => closeLightbox()}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>

                  <div className="flex-1 mx-auto md:p-4 text-lg bg-white h-full shadow-lg bg-gray-300">
                    <div className="glider-contain h-full flex items-center">
                      <div className="glider__list h-full md:p-2" ref={gliderListRef}>
                        {photos.map((p) => (
                          <div className={'h-full items-center flex flex-1'} key={'photo-frame-' + p.key}>
                            <div
                              style={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                              }}
                              key={'photo-fw-' + p.key}
                            >
                              <NextImage
                                key={'photo-detail-' + p.key}
                                src={p.src}
                                layout="fill"
                                objectFit="contain"
                                objectPosition={'center'}
                                loader={rokkaLoader}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="absolute top-0 left-0 z-30 my-6 flex items-center justify-center h-4/5 md:px-4 cursor-pointer group focus:outline-none glider-prev-test"
                      >
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white-100 text-black group-hover:bg-white-100/50 group-focus:ring-4 group-focus:ring-white">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                          </svg>
                          <span className="sr-only">Previous</span>
                        </span>
                      </button>

                      <button
                        type="button"
                        className="absolute top-0 right-0 z-30 my-6 flex items-center justify-center h-4/5 md:px-4 cursor-pointer group focus:outline-none glider-next-test"
                      >
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white-100 text-black group-hover:bg-white-100/50 group-focus:ring-4 group-focus:ring-white">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                          <span className="sr-only">Next</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-white-100"></div>
        </>
      ) : null}
    </>
  );
};
