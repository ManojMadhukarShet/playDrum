var numberOfDrums=document.querySelectorAll(".drum").length;

for(i=0;i<numberOfDrums;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
function handleClick(){
  var ch=this.innerHTML;
  makeSound(ch);
}}

document.addEventListener("keypress",function(event) {
  makeSound(event.key);
});
function makeSound(key){

  switch (key) {
    case "w":var tom1=new Audio("sounds/tom-1.mp3");
             tom1.play();
             break;

    case "a":var tom2=new Audio("sounds/tom-2.mp3");
             tom2.play();
             break;

    case "s":var tom3=new Audio("sounds/tom-3.mp3");
             tom3.play();
             break;

    case "d":var tom4=new Audio("sounds/tom-4.mp3");
             tom4.play();
             break;

    case "j":var sn=new Audio("sounds/snare.mp3");
             sn.play();
             break;

    case "k":var ki=new Audio("sounds/kick-bass.mp3");
             ki.play();
             break;
    case "l":var cr=new Audio("sounds/crash.mp3");
            cr.play();
            break;

    default:console.console.log(key);

}
}
