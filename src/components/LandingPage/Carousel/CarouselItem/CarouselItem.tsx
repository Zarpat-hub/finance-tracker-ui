import { ItemStyle } from './styled'

const CarouselItem = (props: any) => {
  return (
    <ItemStyle>
      <img src={props.item.img} />
    </ItemStyle>
  )
}
export default CarouselItem
