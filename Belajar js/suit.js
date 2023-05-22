var tanya = true;
alert ("WELCOME TO SUIT JAWIR GAME🎲😎")
 while (tanya) {

    var p = prompt("Pilih : Gajah,Orang,Semut");

    var comp = Math.random();

    if (comp < 0.34){
        comp = 'orang 😀';
    }else if(comp >= 0.34 && comp < 0.67 ){
        comp = 'gajah 🐘';
    } else{
        comp = 'semut 🐜';
    }
    var hasil = '';

    if (p == comp ){
        hasil = 'Seri👍';
    }else if (p == 'gajah'){
        hasil = (comp == 'orang') ? 'Menang!!🎉🎊 ' : 'Kalah wkwk 💀🤓';
    }else if (p == 'orang'){
        hasil = (comp == 'gajah') ? 'Kalah wkwk 💀🤓' : 'Menang!!🎉🎊 ';  
    }else if (p == 'semut'){
    hasil = (comp == 'orang') ? 'Kalah wkwk 💀🤓' : 'Menang!!🎉🎊 ';
 } else {
    hasil = 'Masukin antara gajah,semut,orang OI!! 🤬';
 }
 alert('Anda memilih : '+ p +' dan computer memilih : '+comp+'\nHasil: Kamu '+ hasil);
 tanya = confirm('Bermain lagi?🎲');
}
alert('Udahan?? Bolehhh 🤓👍')