import { Item } from './Item'
import { ItemCart } from './ItemCart'

export const ItemList = ({ products, template }) => {
  return (
    <>
      {template === 'Item'
        ? products.map(product => <Item item={product} key={product.id} />)
        : products.map(product => <ItemCart item={product} key={product.id} />)}
    </>
  )
}
