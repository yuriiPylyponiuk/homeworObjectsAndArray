// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні 
// функції для роботи з ним:

// Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе 
// подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день). Функція яка 
// зможе змінити назву тварини на більш детальну. 


// let animal = {
// 	name: 'Dog',
// 	weight: 10,
// 	age: 5,
// 	averageSpeed: 15
// };
// const DISTANTION = 1000;
// const MINUTES = 60;
// const MAXWIDTH = 12;

// animal.infoAboutAnimal = function (){
// 	for (let key in this) {
// 		if (typeof this[key] == 'function') {
// 			continue;
// 		}else{
// 			console.log(`Характеристика: ${key}, властивіть: ${this[key]}`);
// 		}
// 	}
// }
// animal.getAnimalTime = function() {
// 	let subDist = 0;
// 	let timeInHour = 0;
// 	let subDistInMinute = 0;
// 	let days = 0;

// 	timeInHour = Math.floor(DISTANTION / this.averageSpeed);
// 	subDist = DISTANTION %  this.averageSpeed;
// 	subDistInMinute = subDist * MINUTES / this.averageSpeed;

// 	if(timeInHour > MAXWIDTH){
// 		days = Math.floor(timeInHour / MAXWIDTH);
// 		timeInHour = timeInHour % MAXWIDTH;
// 		console.log(`Тварині знадобиться: ${days} днів ${timeInHour} годин ${subDistInMinute} хвилин,
// щоб подолатии дистанцію ${DISTANTION} кілометрів, 
// бо тварина не може бігти більше ${MAXWIDTH} годин в день`)
// 	}else{
// 		console.log(`Тварині знадобиться: ${timeInHour}годин ${subDistInMinute}хвилин`)
// 	}
// }
// animal.changeName = function(a){
// 	if (typeof a) {
// 		alert('Enter correct name');
// 	}else{
// 		this.name = a;
// 	}
// }

// animal.getAnimalTime();
// animal.infoAboutAnimal();
// animal.changeName(prompt('New name', 'New name'));

// 2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити 
// наступне - рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, 
// переведуть значення з сантиметрів у метри.


// let ourObject = {
// 	x: 20,
// 	y: 30
// };

// ourObject.perimeter = function() {
// 	console.log((this.x + this.y) * 2);
// 	return (this.x + this.y) * 2;
// }
// ourObject.are = function() {
// 	console.log((this.x * this.y));
// 	return (this.x + this.y);
// }
// ourObject.addNewPropert = function(){
// 	this.z = 20;

// 	if(this.x == this.y && this.y == this.z){
// 		this.name = 'square';
// 	}else{
// 		this.name = 'rectangle';
// 	}
// }
// ourObject.changeProperty = function(){
// 	this.x = this.x / 100;
// 	this.y = this.y / 100;
// 	this.z = this.z / 100;
// }

// ourObject.perimeter();
// ourObject.are();
// ourObject.addNewPropert();
// ourObject.changeProperty();

// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )

// {

//   tomato: {

//     count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true

//   } , ...

// }
//  Виводимо список покупок - спочатку ті які є в магазині потім яких немає, 
// Виводимо список покупок які ми купили.
// Додаємо функцію яка дозволить купити продукт.
// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є 
// 	значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).


// let shoppingList = {
// 	tomato: {

//     count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true

//   } ,
//   pasta: {

//   	count: 1,
//     price: 100,
//     buy: true,
//     outOfstore: false

//   },
//   meat: {

//   	count: 1,
//     price: 150,
//     buy: false,
//     outOfstore: false

//   },
//   water: {

//   	count: 3,
//     price: 75,
//     buy: true,
//     outOfstore: false

//   },
//   fruits: {

//   	count: 5,
//     price: 100,
//     buy: false,
//     outOfstore: true

//   }
// };
// let userCount = 0;



// function showList(shoppingList) {

// 	for(let key in shoppingList) {
// 	  for(let key1 in shoppingList[key]) {
	    
// 	    let a = shoppingList[key];

// 	    if (key1 == 'outOfstore') {
// 	    	if(!a[key1]){
// 	    		console.log(key);
// 	    	}
// 	    }
// 	  }
// 	}

// 	for(let key in shoppingList) {
// 	  for(let key1 in shoppingList[key]) {
	    
// 	    let a = shoppingList[key];

// 	    if (key1 == 'outOfstore') {
// 	    	if(a[key1]){
// 	    		console.log(key);
// 	    	}
// 	    }
// 	  }
// 	}
// }
// function buyList(shoppingList) {

// 	for(let key in shoppingList) {
// 	  for(let key1 in shoppingList[key]) {
	    
// 	    let a = shoppingList[key];

// 	    if (key1 == 'buy') {
// 	    	if(a[key1]){
// 	    		console.log(key);
// 	    	}
// 	    }
// 	  }
// 	}
// }

// function buyOne(shoppingList) {
// 	let boughtProduct = prompt('Bought product', 'fruits');

// 	for(let key in shoppingList) {
// 		if(key == boughtProduct){
// 		  for(let key1 in shoppingList[key]) {
		    
// 		    let a = shoppingList[key];

// 		    if (key1 == 'buy') {
// 		    	a[key1] = true;
// 		    }
// 		  }
// 		}
// 	}
// }

// function buyList(shoppingList) {

// 	for(let key in shoppingList) {
// 	  for(let key1 in shoppingList[key]) {
	    
// 	    let a = shoppingList[key];

// 	    if (key1 == 'buy') {
// 	    	if(a[key1]){
// 	    		userCount += a.price * a.count;
// 	    	}
// 	    }
// 	  }
// 	}
// 	console.log(userCount);
// }

// function changeCount(shoppingList) {
// 	let newCountNumber = +prompt('New count', 5);
// 	let nameProduct = prompt('Name of product', 'fruits');

// 	for(let key in shoppingList) {
// 		if (key == nameProduct){
// 		  for(let key1 in shoppingList[key]) {
		    
// 		    let a = shoppingList[key];

// 		    if (key1 == 'count') {
// 		    	if(a[key1]){
// 		    		a.count = newCountNumber
// 		    	}
// 		    }
// 		  }
// 		}
// 	}
// }


// showList(shoppingList);
// buyList(shoppingList);
// buyOne(shoppingList)
// buyList(shoppingList);
// changeCount(shoppingList)

// 4. Задана колекція 
// [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. 
// Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі
//  працівників.


let workers = [
	{
		name: "Yura", 
		age: 55, 
		hobby: ["films", "games", "hiking"], 
		type: "Admin"
	}, 
	{
		name: "Vasyl", 
		age: 25, 
		hobby: ["films", "musick", "dancing", "hiking"], 
		type: "User"
	},
	{
		name: "Mark", 
		age: 32, 
		hobby: ["films", "games", "hiking"], 
		type: "Admin"
	},
	{
		name: "Peter", 
		age: 48, 
		hobby: ["films", "games", "hiking"], 
		type: "User"
	}
];
let workersAge = 0;
let averageWorkersAge = 0;
let clone = [];

function getInfoAboutWorkers() {

	for (let i = 0; i < workers.length; i++) {
		if (workers[i].type == "Admin") {
			console.log(workers[i].name);
		}
		workersAge += workers[i].age;
	}

	averageWorkersAge = workersAge / workers.length;
	console.log(averageWorkersAge); 
};

function sameHonbby() {
	for (let i = 0; i < workers.length; i++) {
		clone = clone.concat(workers[i].hobby);
	}
	let hob = clone.reduce(function(acc, el) {
	  acc[el] = (acc[el] || 0) + 1;
	  return acc;
	}, {});
	let hobbyOnce = [];

	for (let key in hob){
		if (hob[key] == 1) {
			hobbyOnce.push(key);
		}
	}
	return hobbyOnce;
}

getInfoAboutWorkers();
console.log(`Унікальні хоббі працівників:  ${sameHonbby()}`);