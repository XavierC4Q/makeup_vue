export interface IProduct {
  id: number
  name: string
  price: string
  brand: string
  category: string
  api_feautured_image: string
  description: string
  product_api_url: string
  product_colors: { hex_value: string; colour_name: string }[]
  product_link: string
  product_type: string
  tag_list: string[]
}
