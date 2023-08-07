export const initialState =
{
  'login': {
    'isLogin': false
  },
  "shoes": [],
  "outer": [],
}

for(let i = 1; i <= 32; i++){
  initialState.shoes.push({
    'id' : i,
    "brand": "Nike",
    "name": "Nike x Tiffany & Co. Air Force 1 Low SP 1837",
    "price": `${Math.floor(Math.random()*(100000000-100000)+100000).toLocaleString()}원`,
    "img": `../images/shoes/${i}.png`
  })
}

for(let i = 1; i <= 32; i++){
  initialState.outer.push({
    'id' : i,
    "brand": "Nike",
    "name": "Nike x Stussy NRG Striped Wool Jacket Black (DR4023-010)",
    "price": `${Math.floor(Math.random()*(100000000-100000)+100000).toLocaleString()}원`,
    "img": `../images/outer/${i}.jpg`
  })
}

console.log(initialState)