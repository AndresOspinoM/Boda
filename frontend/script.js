const btnSignIn = document.getElementById('btno-sign-in');
const btnSignUp = document.getElementById('btno-sign-up');
const forms = document.getElementById('forms');
const sidebar = document.getElementById('sidebar');
const signIn = document.getElementById('sign-in');
const SignUp = document.getElementById('sign-up');
const container = document.getElementById('container');
const linkSignIn = document.getElementById('link-sign-in');
const linkSignUp = document.getElementById('link-sign-up');

linkSignUp.addEventListener('click', () => {
    changeSignIn();
});

linkSignIn.addEventListener('click', () => {
    changeSignUp();
});

btnSignIn.addEventListener('click', () => {
    changeSignIn();
});

btnSignUp.addEventListener('click', () => {
    changeSignUp();
});

function changeSignIn() {
    forms.classList.remove('active');
    sidebar.classList.remove('active');
    transition(signIn);
}

function changeSignUp() {
    forms.classList.add('active');
    sidebar.classList.add('active');
    transition(SignUp);
}

function transition(parent) {
    const children = parent.children;

    Array.from(children).forEach((child) => {
        child.style.opacity = '0';
        child.style.animation = 'none';
    });

    setTimeout(() => {
        Array.from(children).forEach((child, index) => {
            child.style.animation = 'slideIn 0.4s ease forwards';
            child.style.animationDelay = (index * 0.05) + 's';
        });
    }, 300); 
}
