import imgSrc from "../public/some-image.png";

export const cardContent = {
  img: "/card-image-1.png",
  title: "Zebronics head phone",
  subtitle:
    "A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.",
  price: new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
  })
    .format(100)
    .replace(/\.00$/, ""),
};
