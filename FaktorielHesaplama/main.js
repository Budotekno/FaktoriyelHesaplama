
function boslukKontrol(){
    if(document.getElementById("fak").value=="Lütfen değer giriniz !!!"){
        document.getElementById("fak").value="";
    }
    
}
function hesapla(){


   
    if(document.getElementById("fak").value=="" || document.getElementById("fak").value=="Lütfen değer giriniz !!!"){

        document.getElementById("fak").style.color="Red";
       
        document.getElementById("fak").value="Lütfen değer giriniz !!!";
       
      
        
    }
   
    else{
        
    
     var sonuc=1;
     var Faktoriel = document.getElementById("fak").value;
     

        for(var i=1; i<=Faktoriel;i++){

        sonuc=sonuc*i;

        }

        document.getElementById("sonuc").innerHTML="Sonuç : "+document.getElementById("fak").value+"! = " +sonuc;

    } 

    

}
function temizle(){
    document.getElementById("fak").value="";
    document.getElementById("sonuc").innerHTML="Sonuç : ";
    document.getElementById("fak").focus();
    
}

function renkKontrol(){
    if(document.getElementById("fak").value!=""){
        document.getElementById("fak").style.color="Black";
    }
}
