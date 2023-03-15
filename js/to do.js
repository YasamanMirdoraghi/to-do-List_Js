
 let _inp = document.getElementById('val')

 function _add() {
     temp = _inp.value
     console.log(temp);
     if (
         (temp == '') ||
         (temp == null)
     ) {
         alert(' Please write something...')
     } else {
         // not empty
         let _li = document.createElement('li')
         _li.classList.add('row', 'text-white')
         _li.innerHTML = `
             <h2 class="col-8 _HH">${temp}</h2>
             <input class="col-8 d-none _imp" type='text' />
             <span class="col-2 d-flex h-2" onclick='_del(this)'><i class=" _PP bi bi-trash3-fill"></i></span>
             <span class="col-2 d-flex h-2 " onclick='_edit(this)' data-status='1'><i class=" _OO bi bi-pencil-square"></i></span>
         `
         document.getElementById('list').appendChild(_li)
         _inp.value = null
         _inp.focus()

     }
 }


 function _del(x) {
     // x.parentElement.remove()
     x.parentElement.style.height = '0'
 }


 function _edit(x) {
     let num = x.getAttribute('data-status')
     if (num % 2) {
         x.previousElementSibling.previousElementSibling.classList.remove('d-none')
         x.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('d-none')
         

         x.previousElementSibling.previousElementSibling.value = 
         x.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML

         x.innerHTML= `<span class="col-2 d-flex h-2" onclick='_edit(this)' data-status='1'><i class=" _KK bi bi-check-square-fill fs-5"></i></span>`

     }else{
         x.previousElementSibling.previousElementSibling.classList.add('d-none')
         x.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('d-none')
         x.innerHTML= `<span class="col-2 d-flex h-2" onclick='_edit(this)' data-status='1'><i class="_OO bi bi-pencil-square fs-5"></i></span>`


          x.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = 
          x.previousElementSibling.previousElementSibling.value

     }
     num++
     x.setAttribute('data-status', num)

 }



 function _keyCode(e){
     console.log(e);
     let para = e.keyCode || e.which
     console.log(typeof para);

     if(para==13){
         _add()
     }
 }