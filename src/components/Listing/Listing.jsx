import { Item } from '../Item'

export const Listing = (props) => {
    const { items } = props;
  return (
    <div className="item-list">
        {items.map((c) => (
            <Item item={c}/>
        ))}
    </div>
  )
}