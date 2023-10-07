
var header_menu = document.querySelector(".navbar");



const handleSticky = () =>{


    if(window.scrollY > 150){

        header_menu.classList.add('sticky');
    //    console.log(x)

    
    }else{
    header_menu.classList.remove('sticky')
    }
}


window.addEventListener("scroll", handleSticky)