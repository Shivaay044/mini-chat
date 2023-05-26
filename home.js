
let Name = document.querySelector(".name")
let mail = document.querySelector(".mail")
let btn = document.querySelector(".btn")




btn.addEventListener("click",()=>{
    let obj = {
        name:Name.value,
        mail:mail.value
    }

    localStorage.setItem("info",JSON.stringify(obj))
    if(obj.name!="" &&obj.name!=undefined){
        window.location.href = "./index.html"
    }
})