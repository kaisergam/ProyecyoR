import { useMediaQuery } from '@chakra-ui/react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../../assets/images/1x.jpg';
import image2 from '../../../assets/images/2x.jpg';
import image3 from '../../../assets/images/3x.jpg';
// import image4 from '../../../assets/images/4.jpg';

interface ImagesCarrousel {
  images: string | StaticImageData;
}
const images: ImagesCarrousel[] = [
  { images: image1 },
  { images: image2 },
  { images: image3 },
  // { images: image4 },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  // const handleButtonClick = () => {};

  const [isMobile] = useMediaQuery('(max-width: 1005px)');

  return (
    <div style={{ position: 'relative' }}>
      <Carousel
        showThumbs={false}
        showArrows={!isMobile}
        selectedItem={currentSlide}
        onChange={handleSlideChange}
        swipeable
        autoPlay
        infiniteLoop
        stopOnHover
      >
        {images.map((image) => (
          <div key={image.toString()}>
            <Image
              src={image.images}
              alt={image.images.toString()}
              unoptimized
            />
          </div>
        ))}
      </Carousel>

      {/* {isMobile && (
        <Button
          colorScheme="blue"
          mr={3}
          onClick={handleButtonClick}
          zIndex="0"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        >
          Ir a Formulario
        </Button>
      )} */}
    </div>
  );
};

export default Slider;
