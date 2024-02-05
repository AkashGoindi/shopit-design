import { PRODUCTS } from "../dummyData";

const PRODUCTS_INITIAL_STATE = {
  products: [],
  productsLoding: true
}


const sortProducts = (filters) => {
  console.log("Inside Filters")
  console.log(filters)
  let products = PRODUCTS;
  const filter_by = Object.keys(filters);
  if(!filter_by.length) {
    return products;
  }
  console.log(filter_by)
  filter_by.forEach((item)=>{
    if(filters[item]) {
    if(item === 'price') {
      let range = filters[item].split('-');
      let lower_limit = parseInt(range[0]);
      let upper_limit = range[1] !== "any" ? parseInt(range[1]) : 999999;
      const temp = products.filter(prod => {
        return prod[item] > lower_limit && prod[item] <= upper_limit
        });
        products = temp;
      } else {
        let values = filters[item].split(',');
        console.log("values -> " + values)
        const temp = products.filter(prod => {
        return values.includes(prod[item]) 
        });
        products = temp;
      }
    }    
  });
  console.log(products)
  return products;
} 

const product = (state=PRODUCTS_INITIAL_STATE, action) => {
  switch(action.type) {

    case "GET_PRODUCTS":
      let products = sortProducts(action.payload.filters)
      return { ...state, products: products, productsLoding: false };
    case "RESET_LOADER": 
      return PRODUCTS_INITIAL_STATE
    default: 
      return state;
  }
}

export default product;