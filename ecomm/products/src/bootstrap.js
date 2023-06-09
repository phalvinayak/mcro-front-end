import { faker } from "@faker-js/faker";

const mount = (el) => {
  let products = "";
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context /Situation #1
// We are running file in a development in isolation
// We are using our local index.html file
// We DEFINATELY has an element with an id of "dev-products"
// We want to immidiately render out app into that element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // Asuming our container doesn't have an element
  // with id dev-products
  if (el) {
    mount(el);
  }
}

// Context /Situation #2
// We are running this file in development of production environemnt
// through the CONTAINER app
// NO GAURANTEE that an element with an id od "dev-products"
// WE DO NOT WANT to try to immidiately render the app

export { mount };
