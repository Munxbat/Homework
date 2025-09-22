const productDrills = [
  {
    id: 1,
    title: "DL432i Drill",
    slug: "dl432i-drill",
    delPrice: 120000,
    price: 95000,
  },
  {
    id: 2,
    title: "TH551i Truck",
    slug: "th551i-truck",
    delPrice: 220000,
    price: 185000,
  },
  {
    id: 3,
    title: "LH517i Loader",
    slug: "lh517i-loader",
    delPrice: 200000,
    price: 170000,
  },
];

export default productDrills;

export const getProductDrills = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/productDrills"); // backend API
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
