import './carousel_component.scss';
import SimpleImageSlider from 'react-simple-image-slider';
import images from '../../data/photoes/JorongLakeSidePark';

const CarouselComponent = () => (
  <div className="carousel-container">
    <SimpleImageSlider
      width={896}
      height={504}
      images={images}
      showBullets={true}
      showNavs={true}
    />
  </div>
);

export default CarouselComponent;
