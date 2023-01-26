import digital from "/src/assets/images/slider/img_shop_digital.jpeg";
import fashion from "/src/assets/images/slider/img_shop_fashion.jpeg";
import grocery from "/src/assets/images/slider/img_shop_grocery.jpeg";

export const menu = [
  { title: "패션", path: "/fashion" },
  { title: "액세서리", path: "/accessory" },
  { title: "디지털", path: "/digital" },
];

export const slider = [
  { title: "물빠진 청바지", path: "/fashion", image: fashion, contents: "이제 막 도착한 패션 청바지를 구경 하세요." },
  { title: "신속한 업무처리", path: "/digital", image: digital, contents: "다양한 디지털 상품을 둘러보세요." },
  { title: "신선한 식품", path: "/grocery", image: grocery, contents: "농장 직배송으로 더욱 신선한 식료품을 만나보세요." },
];

export const PRODUCT_DATA_URL = 'https://fakestoreapi.com/products'

export const pathnameSymbol = {
  '/': '홈',
  'fashion': '패션',
  'accessory': '액세서리',
  'digital': '디지털',
  'cart': '장바구니',
}