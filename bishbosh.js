console.log('hej');

const insertNumberForm =  document.querySelector('#bishForm');
const output = document.querySelector('#output');


let bish = function(number, bishInput){
    if(number% bishInput === 0)
    {
      return 'Bish';
    }
};

let bosh = function(number, boshInput){
    if(number% boshInput === 0)
    {
      return 'Bosh';
    }
};

let bishbosh = function(number, bishInput, boshInput){
    if(number%bishInput === 0 && number%boshInput === 0){

        return 'Bish-Bosh'
    }
};



insertNumberForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const bishInput = parseInt(document.getElementById('bish').value);
    const boshInput = parseInt(document.getElementById('bosh').value);
    const maxNumber = parseInt(document.getElementById('bishbosh').value);

    for (let i = 1; i <= maxNumber; i++){
    
        if(bishbosh(i, bishInput, boshInput))
        {
            showMessage(`${i}. Bish-Bosh`);
        }
        else if(bish(i, bishInput))
        {
            showMessage(`${i}. Bish`);
        }
        else if(bosh(i, boshInput))
        {
            showMessage(`${i}. Bosh`);
        }
        else{
            showMessage(`${i}. ${i}`);
        }
    }

    e.target.reset();
    
});
function showMessage(message){
    output.innerHTML += message +"<br>";
}

