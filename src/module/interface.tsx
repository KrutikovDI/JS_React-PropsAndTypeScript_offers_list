export interface itemsProps{
  items: IProps[]
}

export interface itemProps{
  item: IProps
}

export interface IProps{
  listing_id: string,
  state: string,
  url: string, 
  MainImage: {url_570xN: string}, 
  title: string, 
  currency_code: string, 
  price: string, 
  quantity: string
}