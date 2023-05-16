import Carousel from 'react-material-ui-carousel'
import WealthWiseLogo from '../../../assets/logos/wealthWiseMain.svg'
import CarouselItem from './CarouselItem/CarouselItem'

const CarouselPanel = () => {
  const items = [
    {
      img: WealthWiseLogo,
    },
    {
      img: WealthWiseLogo,
    },
    {
      img: WealthWiseLogo,
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
