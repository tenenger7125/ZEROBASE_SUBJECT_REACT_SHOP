type createMutable<T> = {
  [Property in keyof T]: T[Property];
};

interface ChildrenType {
  children: ReactNode;
  className?: string;
};

interface CartPageType {
  activeFunction?: () => void;
  inActiveFunction?: () => void;
};

interface ProductItem {
  [key: string]: any;
};

interface ProductPreviewType {
  data: ProductItem[];
  title: string;
};

interface ProductsType {
  data: ProductItem[];
  limit: number;
};

interface ProductSkeletonType {
  limit: number;
};

interface BreadcrumbType {
  bread: string[];
};

interface localStorageCartType {
  id: number;
  count: number;
};

interface Rating {
  rate: number;
  count: number;
};