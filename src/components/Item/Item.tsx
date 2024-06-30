import React from "react"
import { itemProps } from '../../module/interface'



export const Item = (props: itemProps) => {
  if(props.item.state == 'removed') return
    const { url, MainImage, title, currency_code, price, quantity} = props.item
    console.log(MainImage);

  return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage.url_570xN}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{`${currency_code}${price}`}</p>
                <p className="item-quantity level-medium">{quantity}</p>
            </div>
        </div>
  )
}