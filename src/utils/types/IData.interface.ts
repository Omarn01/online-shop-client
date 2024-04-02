import { ICard } from './products/smartphone.interface'

export interface IData {
  meta: {
    total_items: number
    total_pages: number
    current_page: number
    per_page: number
    remaining_count: 3
  }
  items: ICard[]
}
