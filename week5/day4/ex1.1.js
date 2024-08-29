setTimeout(function() {
    console.log('Hello World');
}, 2000);

setTimeout(function() {
    const container = document.getElementById('container');
    const new_p = document.createElement('p');
    new_p.textContent = 'Hello World';
    container.appendChild(new_p);
}, 2000);

let count = 0;
const intervalId = setInterval(function() {
    const container = document.getElementById('container');
    const new_p = document.createElement('p');
    new_p.textContent = 'Hello World';
    container.appendChild(new_p);
    count++;

    if (count === 5) {
        clearInterval(intervalId);
    }
}, 2000);

document.getElementById('clear').addEventListener('click', function() {
    clearInterval(intervalId);
});
