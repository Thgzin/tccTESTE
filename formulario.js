function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }




  const prevBtns = document.querySelectorAll(".btn-prev");
  const nextBtns = document.querySelectorAll(".btn-next");
  const progress = document.getElementById("progress");
  const formSteps = document.querySelectorAll(".form-step");
  const progressSteps = document.querySelectorAll(".progress-step");
  
  let formStepsNum = 0;
  
  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
    });
  });
  
  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepsNum--;
      updateFormSteps();
      updateProgressbar();
    });
  });
  
  function updateFormSteps() {
    formSteps.forEach((formStep) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });
  
    formSteps[formStepsNum].classList.add("form-step-active");
  }
  
  function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
      if (idx < formStepsNum + 1) {
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
      }
    });
  
    const progressActive = document.querySelectorAll(".progress-step-active");
  
    progress.style.width =
      ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  }


  function maskCPF(){
    var cpf = document.getElementById('cpf');
    
    if(cpf.value.length == 3 || cpf.value.length == 7) {
      cpf.value += "."
      
      
    } else if(cpf.value.length == 11){
      cpf.value += "-"
      

    } else if (cpf.value.length != null){
      cpf.classList.add("errorInput")
    }
  
    if(cpf.value.length < 14 || cpf.value.length < 1 || cpf.value.length < 1 || cpf.value.length < 1|| cpf.value.length < 1 || cpf.value.length < 1 ){
      cpf.classList.add("errorInput")
      


      
    } else{
      cpf.classList.add("confirmInput")
    }

    
    if(cpf.value == "a" || cpf.value == "b"  || cpf.value == "c" || cpf.value == "d" || cpf.value == "e" || cpf.value == "f" || cpf.value == "g" || cpf.value == "h" || cpf.value == "i" || cpf.value == "j" || cpf.value == "k" || cpf.value == "l" || cpf.value == "m" || cpf.value == "n" || cpf.value == "o" || cpf.value == "p"|| cpf.value == "q" || cpf.value == "r" || cpf.value == "s"|| cpf.value == "t" || cpf.value == "u" || cpf.value == "v" || cpf.value == "x" || cpf.value == "w"|| cpf.value == "y" || cpf.value == "z") {
      alert('[Erro] a entrada de Letras n??o s??o permitidas!!')
      cpf.value == " test";
    }

  }

  



  function validar_Nome(){
    if(document.getElementById("nome").value.length <= 3){
      nome.classList.add("errorInput")

    }else{
      nome.classList.add("confirmInput")
    }
  }
  

  


  function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que n??o ?? d??gito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca par??nteses em volta dos dois primeiros d??gitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca h??fen entre o quarto e o quinto d??gitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}




function validar_Email(){
  if(document.getElementById("email").value < 3){
    email.classList.add("errorInput")

  }else{
    email.classList.add("confirmInput")
  }
}


function formataData(){
  let data = new Date(),
  dia = data.getDate().toString().padStart(2, '0'),
  mes = (data.getMonth()+1).toString().padStart(2, '0'),
  ano = data.getFullYear();
return `${dia}/${mes}/${ano}`;
}

console.log(formataData());


function validation(){
  const form = document.getElementById("form");
  const email = document.getElementById("email").value;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/


  if (email.match(pattern))
  {
    form.classList.add("valid");
    form.classList.remove("invalid");

  }
  else
  {
  form.classList.add("invalid");
  form.classList.remove("valid");
}
if(email == ""){
  form.classList.remove('invalid');
  form.classList.remove('valid');
}

if  (form.classList == "invalid") {
  document.getElementById('button').disabled = true;

}


}


$(function(){
  var dtToday = new Date();

  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if(month < 10)
      month = '0' + month.toString();
  if(day < 10)
      day = '0' + day.toString();

  var minDate= year + '-' + month + '-' + day;

  $('#txtDate').attr('min', minDate);
});




$('#time').timepicker({
  timeFormat: 'h:mm p',
  interval: 30,
  minTime: '10',
  maxTime: '5:00pm',
  defaultTime: '11',
  startTime: '10:00',
  dynamic: false,
  dropdown: true,
  scrollbar: true
});