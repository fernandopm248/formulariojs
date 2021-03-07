let b7validator = {
    handleSubmit:(event) => {
        event.preventDefault();

    let send = true;

    let inputs = form.querySelectorAll('input');

    b7validator.clearErrors();

    for(let i = 0;i<inputs.length;i++) {
        let input = inputs[i];
        let check = b7validator.checkInput(input);
        if(check !== true){
            send =  false;
            console.log(check);
            b7validator.showError(input , check);
        }
    }

    if(send){
        form.submit();
    }
},

checkInput:(input) => {
    let rules = input.getAttribute('data-rules');

    if(rules !== null) {
       rules = rules.split('|');
        for(let k in rules){
            let detalhes = rules[k].split('=');
            switch(detalhes[0]){
                case 'required' :
                    if(input.value == ''){
                        return 'campo n pode ser vazio'
                    }
                    break;
                    case 'min' :
                    if(input.value.length < detalhes[1]){
                        return 'faltam caracteres'
                    
                    }
                    break;
                    case 'email' :
                        if(input.value != ''){
                            let Regex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        if(!Regex.test(input.value.toLowerCase())){
                            return 'email nao existente';
                        }
                        }
                        break;
            }

        }

    }
return true ;

},
showError:(input , error) => {
    input.style.borderColor='red';

    let errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.innerHTML = error;

    input.parentElement.insertBefore(errorElement, input.elementSibling);


},
clearErrors:() => {
let inputx = form.querySelectorAll('input');
for(let i = 0 ; i<inputx.length;i++){
    inputx[i].style = '' ;
}
    

let errorElements = document.querySelectorAll('.error');
for(let i = 0 ; i<errorElements.length;i++){
errorElements[i].remove();

}

}
};











let form = document.querySelector('.validador');
form.addEventListener('submit',b7validator.handleSubmit);