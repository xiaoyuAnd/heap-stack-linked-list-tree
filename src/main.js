let screen = document.querySelector('#screen')
let createNum = document.querySelector('#createNum')
let callNum = document.querySelector('#callNum')
let nuwNum = document.querySelector('#newNum')
let queue1 = document.querySelector('#queue')
let n = 0;
let queue = [];
createNum.onclick = () => {
    n += 1;
    queue.push.call(queue, n);
    newNum.innerText = n;
    queue1.innerText = JSON.stringify(queue)
}
callNum.onclick = () => {
    if (queue.length === 0) {
        return
    }
    let m = queue.shift.call(queue)
    screen.innerText = `请${m}号就餐`;
    queue1.innerText = JSON.stringify(queue)
}