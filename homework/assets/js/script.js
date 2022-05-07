// const arr1 = [1, 2, 3, 4]; //1,2,3,4,5,7
// const arr2 = [1, 5, 7, 4];

// console.log(arr1.concat(arr2.filter((n) => !arr1.includes(n))));
// console.log(arr1.concat(arr2.filter((n) => arr1.indexOf(n) < 0)));

// console.log(arr1.concat(arr2));

// console.log(arr2.filter((n) => arr1.indexOf(n) < 0));
// console.log(arr1.indexOf(5));

// ---------------//

const firstNames = Array.from(
  document.querySelectorAll("#first-list .list-group-item")
);
const secondNames = Array.from(
  document.querySelectorAll("#second-list .list-group-item")
);
const allNames = document.querySelector("#all-names");

let firstNamesContent = firstNames.map((x) => x.textContent);
let secondNamesContent = secondNames.map((x) => x.textContent);

const newList = firstNamesContent.concat(
  secondNamesContent.filter((n) => !firstNamesContent.includes(n))
);

newList.forEach((n) => {
  //   console.log(n);
  allNames.innerHTML += `<li class="list-group-item">${n}</li>`;
});
