type Product = {
  title: string;
  price: number;
};

const data: Product[] = [
  { title: "Omo", price: 22 },
  { title: "Leite", price: 4.65 },
  { title: "Bombom", price: 9.5 },
];

export const Product = {
  getAll: (): Product[] => {
    return data;
  },

  getFromPriceAfter: (price: number): Product[] => {
    return data.filter((product) => product.price >= price);
  },
};
