const bulb=document.querySelector("#bulb");
console.log(bulb);
console.log(bulb.src);
const bulbswitch=document.querySelector("#bulbswitch")
console.log(bulbswitch)
bulbswitch.addEventListener('click',function(){
    if(bulb.src.match('off')){
        bulb.src="/pic_bulbon.gif";
        bulbswitch.innerHTML="turn off"
    }
    else{
        bulb.src="/pic_bulboff.gif";
        bulbswitch.innerHTML="turn on"
    }
})