console.log(11111);
console.log(22222);
// setTimeout(() => console.log('aaaaa'), 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(333333);
console.log(444444);
for (let i = 0; i < 1000; i++) {
    console.log(i);
}