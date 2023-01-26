export const filterCloth = (data: ProductItem[]) => {
  return data.filter((item) => item.category.includes("cloth"))
}
export const filterJewelery = (data: ProductItem[]) => {
  return data.filter((item) => item.category.includes("jewelery"))
}
export const filterElectronic = (data: ProductItem[]) => {
  return data.filter((item) => item.category.includes("electronics"))
}
export const filterItem = (data: ProductItem[], id: string | undefined) => {
  return data.find(item => item.id == Number(id));
}