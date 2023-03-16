import { mount as prouductsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container!");
prouductsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
