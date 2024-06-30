import React from 'react';
import { Item } from '../Item/Item'

import { itemsProps, IProps } from '../../module/interface'


export const Listing = (props: itemsProps) => {
    const { items } = props;
  return (
    <ul className="item-list">
        {items.map((c: IProps) => (
          <li key={c.listing_id}>
            <Item item={c}/>
          </li>

        ))}
    </ul>
  )
}