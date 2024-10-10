export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  size: string;
  material: string;
};

export type Prod = {
  category: string;
  description: string;
  imageUrl: string;
  itemId: number;
  lowestPrice: string;
  name: string;
};

export type CartProd = {
  imageUrl: string;
  itemId: number;
  itemName: string;
  size: string;
  material: string;
  qty: number;
  unitPrice: number;
};

export type ProdSizes = {
  itemId: number;
  size: string;
};

export type ProdMaterials = {
  itemId: number;
  material: string;
};

export type ProdListImages = {
  itemId: number;
  imageURL: string;
};

export type CurrentProduct = {
  itemId: number;
  material: string;
  size: string;
  price: number;
};

export type detailsPageOptions = {
  productId: number;
  name: string;
  possibleMaterials: string[];
  possibleSizes: string[];
};
