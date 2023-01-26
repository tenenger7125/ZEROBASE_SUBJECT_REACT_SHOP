import { getLocalStorage, setLocalStorage } from "./localStorage";

const getCart = (): string => {
  return getLocalStorage('cart') ? getLocalStorage('cart') as string : '[]' ;
}

export const addCart = (value: localStorageCartType): void => {
  const cart: localStorageCartType[] = JSON.parse(getCart());
  const isExist = cart.some(item => {
    if (value.id === item.id) {
      item.count++;
      return true;
    };
    return false;
  })
  console.log(isExist)
  if (!isExist) cart.push(value);

  setLocalStorage('cart', JSON.stringify(cart))
}