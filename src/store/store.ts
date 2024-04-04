import { create } from 'zustand'
import { ICard } from '../utils/types/products/smartphone.interface'
import { IMeta } from '../utils/types/IData.interface'

interface IUseFilters {
  meta: IMeta
  products: ICard[]
  getProducts: (data: ICard[]) => void
  getMeta: (data: IMeta) => void
  // filterPrice: () => void
  // filterCompany: () => void
  // filterIsStock: () => void
  // filterRating: () => void
  // filterOS: () => void
}

const meta = {
  total_items: 0,
  total_pages: 0,
  current_page: 0,
  per_page: 0,
  remaining_count: 0,
}

export const useFilters = create<IUseFilters>(set => ({
  meta: meta,
  products: [],
  getProducts(data: ICard[]) {
    set({ products: data })
  },
  getMeta(data: IMeta) {
    set({ meta: data })
  },
}))
// filterPrice(item) {
//     if (!firstPriceCheckbox && !secondPriceCheckbox && !thirdPriceCheckbox)
//       return item
//     if (firstPriceCheckbox && item.price >= 20_000 && item.price <= 40_000)
//       return item
//     if (secondPriceCheckbox && item.price >= 40_000 && item.price <= 80_000)
//       return item
//     if (thirdPriceCheckbox && item.price >= 80_000) return item
//   },

// filterCompany(item) {
//     if (!apple && !xiaomi && !google && !poco && !samsung) return item
//     if (apple && item.company === 'Apple') return item
//     if (xiaomi && item.company === 'Xiaomi') return item
//     if (google && item.company === 'Google') return item
//     if (poco && item.company === 'Poco') return item
//     if (samsung && item.company === 'Samsung') return item
//   },

// filterIsStock(item) {
//     if (isStock && item.isStock) return item
//   },

// filterRating(item) {
//     if (hightRating && item.rating >= 4) return item
//   },

// filterOS(item) {
//     if (!android && !ios) return item
//     if (android && item.OS === 'android') return item
//     if (ios && item.OS === 'ios') return item
//     if (harmony && item.OS === 'harmony') return item
//   }
