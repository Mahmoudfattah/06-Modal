"use Strict";
const btn = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-modal");

const CloseModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const OpenModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", OpenModal);
}
close.addEventListener("click", CloseModal);
overlay.addEventListener("click", CloseModal);

document.addEventListener('keydown',function(e){
  if(e.code === 'Escape' && !modal.classList.contains('hidden')){
    
      CloseModal()
     
  }
})

// function CloseTheModalByEscape(e){
//   if(e.code === 'Escape'){
//      close.addEventListener("click", function () {
//       addClassAttribute();
//     });
//   }
// }
//   close.addEventListener("keydown", function () {
//       removeClassAttribute();
//     });
