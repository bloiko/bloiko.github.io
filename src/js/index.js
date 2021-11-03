const currentYear = document.getElementById('current-year')

const bio = document.getElementsByClassName('bio')[0]



bio.onclick = function () {
    bio.style.color = 'yellow'
}

function validateDate(num, name) {
    if (num < 10) {
        return `0${num}`;
    }
    if (name == 'month') {
        return ++num;
    }
    return num
}

const getCurrentYear = function () {
    let year = new Date().getFullYear()
    let day = new Date().getDate();
    let month = new Date().getMonth()

    return `${validateDate(day)}.${validateDate(month,'month')}.${year}`;
}

currentYear.textContent = getCurrentYear().toString();


