function salary() {
    var spd = document.getElementById('spd').value * 1;
    var days = document.getElementById('days').value * 1;
    var salary = spd * days;
    document.getElementById('rs').innerHTML = salary;
}