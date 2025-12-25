export const useLocalStorage = (key, value) => {
  const get = () => localStorage.getItem(key)

  const set = (key, value) => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, value)
    }
  }

  const remove = (key, value) => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key)
    }
  }

  const clear = () => localStorage.clear()

  return { get, set, remove, clear }
}
