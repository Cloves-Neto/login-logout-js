const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".login_button")


// Adiciona a classe no span quando ativa o evento 'focus' do input
const handleFocus = ({target}) =>{
    const span = target.previousElementSibling;
    span.classList.add("span-active");
}

// Retira a classe do evento focus no focus-out caso o conteúdo do input verificado esteja vazio
const handleFocusOut = ({target}) =>{
    if(target.value === ""){
    const span = target.previousElementSibling;
    span.classList.remove("span-active");
    }
}

//Busca os inputs recebidos na variavél e resgata o valor pelo array, para aplicar uma regra
const handleChange = () =>{
    const [email, password] = inputs;
    
    if(email.value && password.value.length >= 8){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

button.addEventListener('click', (event) => {
    event.preventDefault(); 
});

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

