export async function fetchProducts (category, sortBy) {
  try { 
    const response = await fetch(`pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`);
    const result = await response.json();
    return result;
  }
  catch(error) {
    console.log(error);
  }
};
