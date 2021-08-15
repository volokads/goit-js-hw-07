const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const list = document.querySelector('#ingredients')
  console.log(list);

  function listCreate(ingredient) {
      const pointCreate = document.createElement('li')
      console.log(pointCreate);
      pointCreate.textContent = ingredient
      console.log();
      return pointCreate
  }
//   listCreate(ingredients[0])
const elListRef = ingredients.map(ingredient => 
    listCreate(ingredient)
    )
    console.log(elListRef);
    list.append(...elListRef)