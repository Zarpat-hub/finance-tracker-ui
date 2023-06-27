import Carousel from 'react-material-ui-carousel'
import WealthWiseLogo from '../../../assets/logos/wealthWiseMain.svg'
import CarouselItem from './CarouselItem/CarouselItem'
import Img2 from '../../../assets/images/landing-slajder-2.png'
import Img3 from '../../../assets/images/landing-slajder-3.png'
const CarouselPanel = () => {
  const items = [
    {
      img: WealthWiseLogo,
    },
    {
      img: Img2,
    },
    {
      img: Img3,
    },
  ]

  return (
    <Carousel>
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  )
}
export default CarouselPanel
