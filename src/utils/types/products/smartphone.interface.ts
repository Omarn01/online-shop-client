interface IImages {
  main: string[]
  big: string[]
  preview: string[]
}

interface IPrices {
  price: number
  creditCoefficient: number
  oldPrice: number
}

interface ICashback {
  isCashback: boolean
  how: number
}

interface IVoblers {
  tradeIn: boolean
  split: boolean
  sale: boolean
  installmentPlan: boolean
  isNew: boolean
  cashback: ICashback
}

export interface ICard {
  id: number
  images: IImages
  title: string
  description: string
  count: number
  rating: number
  prices: IPrices
  voblers: IVoblers
  display: number
  processor: string
  ROM: number
  RAM: string
  camera: string
}
