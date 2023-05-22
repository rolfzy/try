var tanya =true;
alert("Welcome to Tebak Angka to tebak angka game tebak game tebak 🎶🎶")
while (tanya){
var  p = prompt('Tebak Angka antara 1 - 10 : ')
var comp = Math.floor(Math.random()*11)+1;
console.log(comp);
var hasil = ' ';
if (p == comp){
    hasil = alert("ANJAY BENUL HEBAT ANDA 🎊🎉");
} else if (p != comp){
    hasil = alert("apa.... SALAHHHHH!!!💀🤣")
}else{
    alert('iq anda patut di pertanyakan 🤓 (angka 1-10 njir)')
}

tanya = confirm("main lagi?🎲 ")
}
alert("Arigato telah bermain 👍✌")
