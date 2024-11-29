function brandsSearch(arr, query) {

    return arr.filter(brand => brand.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  const brands = [
    'dell',
    'hp',
    'asus',
    'lenovo',
    'apple',
    'acer',
    'samsung',
    'sony',
  ];
  
  console.log(brandsSearch(brands, 'a')); 
  console.log(brandsSearch(brands, 'sa')); 
  console.log(brandsSearch(brands, 'son')); 
  