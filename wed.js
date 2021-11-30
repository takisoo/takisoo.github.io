var banut = document.querySelector(".banut");
var motnut = document.querySelector(".motnut");
var listnut = document.querySelectorAll(".banut ul li");
var listanh = document.querySelectorAll(".baanh ul li");
var thoigian = setInterval(function(){
        var slidehientai = document.querySelector(".baanh ul li.kichhoat");
        
        for (var vitrislidehientai = 0 ; slidehientai = slidehientai.previousElementSibling ; vitrislidehientai++){}
        for(var i = 0 ; i < listanh.length; i++){
            listanh[i].classList.remove("kichhoat");
            listnut[i].classList.remove("active");
        }
        if(vitrislidehientai < listanh.length-1){
            listanh[vitrislidehientai].nextElementSibling.classList.add("kichhoat");
            listnut[vitrislidehientai].nextElementSibling.classList.add("active");

        }else{
            vitrislidehientai = 0 ;
            listanh[vitrislidehientai].classList.add("kichhoat");
            listnut[vitrislidehientai].classList.add("active");
        }

    },10000);
    


for (var i = 0; i < listnut.length; i++) {
    listnut[i].addEventListener("click",function(){

        for (var j = 0 ; j < listnut.length ; j++) {
            listnut[j].classList.remove("active");
        }
        nutkichhoat = this;
        
        // click slide ->dichchueyn
        clearInterval(thoigian);
        for (var vitrianh = 0 ; nutkichhoat = nutkichhoat.previousElementSibling ; vitrianh++) {}
        for (var k = 0 ; k < listanh.length;k++){
            listanh[k].classList.remove("kichhoat");
            
        }
        
        listanh[vitrianh].classList.add("kichhoat");
        this.classList.add("active");

        
        })
}//het su kien nut