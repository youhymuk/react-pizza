export async function fetchProducts (category, sortBy) {
  try { 
    const response = await fetch(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`);
    const result = await response.json();
    return result;
  }
  catch(error) {
    console.log(error);
  }
};
