var btns = document.getElementsByClassName('title');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active-title');
        current[0].className = current[0].className.replace(
            ' active-title',
            ''
        );
        this.className += ' active-title';
    });
}

function salary() {
    var spd = document.getElementById('spd').value * 1;
    var days = document.getElementById('days').value * 1;
    var salary = spd * days;
    document.getElementById('rs-salary').innerHTML =
        new Intl.NumberFormat().format(salary);
}

function average() {
    var st1 = document.getElementById('sth1').value * 1;
    var st2 = document.getElementById('sth2').value * 1;
    var st3 = document.getElementById('sth3').value * 1;
    var st4 = document.getElementById('sth4').value * 1;
    var st5 = document.getElementById('sth5').value * 1;
    document.getElementById('rs-average').innerHTML =
        (st1 + st2 + st3 + st4 + st5) / 5;
}

function exchange() {
    var usd = document.getElementById('usd').value;
    document.getElementById('rs-exchange').innerHTML =
        new Intl.NumberFormat().format(usd * 23500);
}

function area() {
    var length = document.getElementById('length').value * 1;
    var width = document.getElementById('width').value * 1;
    document.getElementById('rs-area').innerHTML = length * width;
    document.getElementById('rs-perimeter').innerHTML = (length + width) * 2;
}

function sum() {
    var num = document.getElementById('num').value * 1;
    var ones = num % 10;
    var tens = Math.floor(num / 10);
    document.getElementById('rs-sum').innerHTML = ones + tens;
}
