import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js'
import { creatUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js'
import { sendPassWordResetEmail } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js'

import auth from ".firebase.js";

const login = document.getElementById("btn-singIn");
const crate = document.getElementById("btn-singUp");

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passWordInput = document.getElementById("password");
const feedBack = document.getElementById("feedback");
const resetPassword = document.getElementById("btn-forgotPassword");



form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const passWordInput = passWordInput.value;

    try {
        await signInWithEmailAndPassword(auth, email, passWordInput);
        window.location.href = "./dashboard.html";

    } catch (error) {
        console.error("falha no login", error.code);

    }

});

crate.addEventListener('click', async (event) => {

    const email = emailInput.value.trim();
    const passWordInput = passWordInput.value;
    if (!email || !passWordInput) {
        console.error("informa login e senha", error.code);

    }

    try {
        await creatUserWithEmailAndPassword(auth, email, passWordInput);
        window.location.href = "./dashboard.html";

    } catch (error) {
        console.error("falha no login", error.code);
        feedBack.textContent = "email ou seja erro"

    }

});

resetPassword.addEventListener('click', async (event) => {

    const email = emailInput.value.trim();
    const passWordInput = passWordInput.value;
    if (!email || !passWordInput) {
        console.error("informa login e senha", error.code);
        feedBack.textContent = "informa login e senha"


    }

    try {
        await sendPassWordResetEmail(auth, email);
        feedBack.textContent = "Você vai receber um email"

    } catch (error) {
        console.error("falha no login", error.code);
        feedBack.textContent = "informa login e senha"


    }

});