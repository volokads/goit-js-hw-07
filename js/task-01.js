const listItems = document.querySelectorAll('.item')
const numberOflistItems = `В списке ${listItems.length} категории.`
console.log(numberOflistItems);
listItems.forEach(el => {
const title = el.firstElementChild.textContent
const numberOfListPoints = el.lastElementChild.childElementCount
console.log( `Категория: ${title}\nКоличество елементов: ${numberOfListPoints}`);
})








