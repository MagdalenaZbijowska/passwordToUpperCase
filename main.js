const input = document.getElementById("pass");
const div = document.querySelector('div');
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

passwords.forEach((password, index) => {
    passwords[index] = password.toLowerCase();
    console.log(passwords[index]);
})

const showMessage = (e) => {
    div.textContent = '';
    const text = e.target.value.toUpperCase();

    passwords.forEach((item, i) => {
        if (item.toUpperCase() === text) {
            div.textContent = messages[i];
        }
    })
};


/*const showMessage = (e) => {
    div.textContent = '';
    const text = e.target.value.toUpperCase();

    passwords.forEach((item, i) => {
        if (item.toUpperCase() === text) {
            div.textContent = messages[i];
        }
    })
};*/


input.addEventListener("input", showMessage)



