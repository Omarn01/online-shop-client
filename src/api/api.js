export const fetchBrands = async () => {
  try {
    const response = await fetch(`https://1c2d1c3def58d74a.mokky.dev/brands`)
    const json = await response.json()

    if (!response.ok) {
      throw new Error(json.message)
    }

    return json
  } catch (error) {
    console.log('wrong url')
  }
}
