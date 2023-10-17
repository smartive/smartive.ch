import { merge } from '@smartive/guetzli';
import Glider from 'glider-js';
import 'glider-js/glider.min.css';
import NextImage from 'next/legacy/image';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import Gallery from 'react-photo-gallery-next';
import { Photo, rokkaLoader } from '../../services/cloud-storage';

type Props = {
  photos: Photo[];
  dark?: boolean;
};

export const SmartGallery: FC<Props> = ({ photos, dark = true }) => {
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
      <div className={merge(['sm:px-2 md:px-8 md:pb-8', dark ? 'bg-black' : ''])}>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 h-screen w-screen">
              <div className="rounded-lg relative flex h-full w-full flex-col border-0 bg-black shadow-lg outline-none focus:outline-none">
                <div className="h-full w-full flex-none p-6">
                  <button
                    type="button"
                    className="absolute right-6 top-10 z-50 ml-auto inline-flex items-center rounded-full bg-transparent p-1.5 text-sm text-white-200 hover:bg-white-200/50 hover:text-white-100 lg:right-2.5 lg:top-3"
                    onClick={() => closeLightbox()}
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
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

                  <div className="bg-white bg-gray-300 mx-auto h-full flex-1 text-lg shadow-lg md:p-4">
                    <div className="glider-contain flex h-full items-center">
                      <div className="glider__list h-full md:p-2" ref={gliderListRef}>
                        {photos.map((p) => (
                          <div className={'flex h-full flex-1 items-center'} key={'photo-frame-' + p.key}>
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
                        className="glider-prev-test group absolute left-0 top-0 z-30 my-6 flex h-4/5 cursor-pointer items-center justify-center focus:outline-none md:px-4"
                      >
                        <span className="group-focus:ring-white inline-flex h-8 w-8 items-center justify-center rounded-full bg-white-100 text-black group-hover:bg-white-100/50 group-focus:ring-4 sm:h-10 sm:w-10">
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 sm:h-6 sm:w-6"
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
                        className="glider-next-test group absolute right-0 top-0 z-30 my-6 flex h-4/5 cursor-pointer items-center justify-center focus:outline-none md:px-4"
                      >
                        <span className="group-focus:ring-white inline-flex h-8 w-8 items-center justify-center rounded-full bg-white-100 text-black group-hover:bg-white-100/50 group-focus:ring-4 sm:h-10 sm:w-10">
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 sm:h-6 sm:w-6"
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
          <div className="fixed inset-0 z-40 bg-white-100 opacity-25"></div>
        </>
      ) : null}
    </>
  );
};
