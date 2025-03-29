let reg = document.getElementById('signup')
let model = document.querySelector('.model-signup')
let exitModel = document.querySelector('.model-exit')
let okno = document.querySelector('.main_window')
let buttonStart = document.querySelector('.start-signup')

reg.addEventListener('click', function(e){
    model.classList.add('active')
    console.log(e.target);
    okno.style.filter = 'blur(10px)';
})

exitModel.addEventListener('click',function(){
    model.classList.remove('active')
    okno.style.filter = 'blur(0px)';
})