let passwordLenght = document.getElementById('passwordLenght')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveButton');

const generatePassword = (len) => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbol = "~`!@#$%^&*,.<>/?|";

    const data = lowerCase + upperCase + numeric + symbol;
    let generator = "";
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;

}

const getPassword = () => {
    const newPassword = generatePassword(passwordLenght.value);
    password.value = newPassword;
}

const savePassword = () => {
    document.title = password.value
    // ini untuk menyimpan Password dan mengunduhnya
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    saveButton.setAttribute('download', 'MyPasswordGeneratorMe.txt')
}