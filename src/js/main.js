const cep = document.querySelector('#cep');
document.querySelector("#cep");

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo];
        }
        
    }
}

cep.addEventListener('blur', e => {
    let search = cep.value.replace("-","");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json`, options)
    .then(res => {res.json()
        .then( data => showData(data)) 
    })
    .catch(e => console.log('deu erro: '+ e.message))
    

});

