function Angkot (sopir,Trayek,penumpang,kas){
    this.sopir = sopir;
    this.Trayek = Trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun =  function(namaPenumpang,bayar){
        if(this.penumpang.length === 0 ){
            alert('Penumpang masih kosong !');
            return false;
        }
        for (var x = 0 ; x < this.penumpang.length ; x++ ){
            if (this.penumpang[x] == namaPenumpang){
                this.penumpang[x] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}




var angkot1 = new Angkot('fulan',['Aveuneu','Amsterdam'],[],0);