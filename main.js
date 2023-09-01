let ul= document.getElementById("ul1")
let icon= document.getElementById("yosef")
let myd1= document.getElementById("d1")
let ico1 =document.getElementById("ico1")
let ico2 =document.getElementById("ico2")
let ico3 =document.getElementById("ico3")
let mycoll =document.getElementById("collact")
let mycoll2 =document.getElementById("collact2")
let mycoll3 =document.getElementById("collact3")
let d3 =document.getElementById("d3") 
let d2 =document.getElementById("d2") 

// your function


ico1.onclick = function(){
    mycoll2.style.display="none"
    mycoll.style.display="flex"
    mycoll3.style.display="none"
    ico2.style.cssText="color:black; border-color:white; transition: .5s;"
    ico1.style.cssText="color: rgb(255, 177, 75);border-bottom: 2px solid rgb(255, 177, 75); transition: .5s;"
    ico3.style.cssText="color:black; border-color:white; transition: .5s;"
}
ico2.onclick = function(){
    mycoll.style.display="none"
    mycoll2.style.display="flex"
    mycoll3.style.display="none"
    ico2.style.cssText="color: rgb(255, 177, 75);border-bottom: 2px solid rgb(255, 177, 75); transition: .5s;"
    ico1.style.cssText="color:black; border-color:white; transition: .5s;"
    ico3.style.cssText="color:black; border-color:white; transition: .5s;"
}
ico3.onclick=function(){
    mycoll2.style.display="none"
    mycoll.style.display="none"
    mycoll3.style.display="flex"
    ico3.style.cssText="color: rgb(255, 177, 75);border-bottom: 2px solid rgb(255, 177, 75); transition: .5s;"
    ico1.style.cssText="color:black; border-color:white; transition: .5s;"
    ico2.style.cssText="color:black; border-color:white; transition: .5s;"
}






icon.onclick = function(){
    if(ul.style.display === "none"){
        ul.style.display = "flex"
        ul.style.display="transition: .5s"
        ul.style.flexDirection = "column"
        
    }
    else{
        ul.style.display = "none"

    }
    
    
}


















































// let titelYosef ="15/20" ,sameh ="elzero web school", desc="elzero";
// let yosef=`
// <div>
// <p>${titelYosef}</p>
// <h3>${sameh}</h3>
// <p>hello ${desc}</p>
// </div>
// `;
// document.write(yosef);
// let d ="-100"
// let e ="20"
// let f =30
// let g = true
// console.log(-d*e)
// console.log()

// 102
// 93
// 96
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;
// console.log(Math.trunc(Math.min(a, b    , c, d)))
// console.log(Math.trunc(d))
// console.log(parseInt (d))
// console.log(d.toFixed(0))

// let yo = "yosefsameh"
// console.log(yo.slice(-2,-5))

// let s ="Elzero web School"

// console.log(s.slice(2,6))
// console.log(s.charAt(13).toUpperCase().repeat(8))
// console.log(s.split(" ",1))
// console.log(s.split(" "))
// let st = "Elzero web School";

// let jop = "ss"
// let salary = 0

// switch(jop){
//     case "Manager":
//         salary=8000
//         console.log(salary)
//         break;
//     case "IT":
//         salary=6000
//         console.log(salary)
//         break;
//     case "Devolper":
//         salary=7000
//         console.log(salary)
//         break;
//         default:
//             salary=4000
//             console.log(salary)
        
// }

// let holidays =3
// let mony = 0

// if (holidays === 0) {
//     mony = 5000;
//     console.log(mony)
// }
// else if(holidays === 1|| 2){
//     mony = 3000;
//     console.log(mony)
// }
// else if (holidays === 3){
//     mony = 2000;
//     console.log(mony)
// }
// else{
//     mony = 50;
//     console.log(mony)
// }

// let my = ["Ahmed","Mazero","Elahm","Osama","Gamal","Ameer"]

// console.log(my.slice(0,4).reverse())
// console.log(my.slice(1,3).reverse())
// for ( i = 0;  i <my.length;  i++) {
//     console.log(`${my[i]}`)
// }


// let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samear"]
// let myEmplovees = ["Amgad","Sameh","Ameer","Omar","Othman","Amany","Samia"]

// for (let i = 0; i<myAdmins.length; i++){
//     console.log(myAdmins[i])
    
//     for (let j =0; j<myEmplovees.length; j++ ){
//         console.log(myEmplovees[j])
//         if (){


//         }
//     }


// function yosef(us="not tipe",ag,po){
    
//     if( typeof us === "string"){

//     if(us === "sameh"){
        
//     }
    
//     }
    
// }
// yosef(53,"sameh",true);





// function yosef(...names){

//     return names
// }
// yosef()
// console.log(yosef( "string","[osama],","[Mahamed,]"))



// 1
// let namese =function (...names){

//     return names
// }
// namese()
// console.log(namese( "string","[osama],","[Mahamed,]"))



// 2

// let names = (...names)  => names;
// console.log(names( "string","[osama],","[Mahamed,]"))



// let mix ="A13BS2ZX"

// let yosef =mix.split("").filter(function(ele){
//     return  !isNaN(parseInt(ele))
// })
// .map(function(ele){
//     return ele *ele
// })
// .join("")
// console.log(yosef)




// let mydiv = document.createElement("div")
// let myh = document.createElement("h3")
// let myp = document.createElement("p")
// let mytex = document.createTextNode("yosef sameh")
// let mytext = document.createTextNode("yosef sameh")

// mydiv.className="new div"
// mydiv.appendChild(myh)
// mydiv.appendChild(myp)

// myh.appendChild(mytex)
// myp.appendChild(mytext)




// for(i=0; i<=5; i++){
//    document(mydiv)
// }


// document.body.appendChild(mydiv)




// مشروع 1
// let myd = document.createElement("div") 
// let myp = document.createElement("p") 
// let myh = document.createElement("h3") 
// let myt = document.createTextNode("1") 
// let mytp = document.createTextNode("protact") 
// myd.appendChild(myp)
// myd.appendChild(myh)
// myp.appendChild(mytp)
// myh.appendChild(myt)

// myd.style.cssText = "background-color: black; display: flex; align-items: center; justify-content: center; padding:1%5%; width:fit-content;flex-direction: column-reverse;"
// myp.style.cssText = "text-align: center; color: white;"
// myh.style.cssText = "text-align: center; color: white;"

// myd.className="yosef sameh"

// for(i=0; i<5; i++){
//     console.log(myd)

// }

// document.body.appendChild(myd)
// // مشروع 1'




// let div=document.getElementsByClassName("from")
// let text=document.getElementsByClassName("input")
// let sud=document.getElementById("add")


// sud.onclick = function() {
//     let myd= document.createElement("input")
//     let mys= document.createElement("submit")
    
    
//     document.body.appendChild(myd)
//     document.body.appendChild(mys)
// }






// const user={
//     thaName:"yosef",
//     thaAge:15,
//     skills:["html","css","js"],
//     adeass: {
//         egypt:"cairo",
//         ksa:"rayad",
//     }
    

    
// }


// let={thaName,thaAge,adeass:{egypt},skills:[on,to,tr]}=user

// console.log(thaName)
// console.log(thaAge)
// console.log(on,to,tr)
// console.log(egypt)



// /مشروع 2/
// let yo = "elzero.org"
// let ys = "http://elzero.org"
// let yf = "https://elzero.org"
// let yg = "https://www.elzero.org"
// let yh = "https://www.elzero.org:8080/articles.php?id=100&cat=topics"

// let rs1 = /\w+.(org)/ig
// let rs2 = /https?:\/\/\w+.(org)/ig
// let rs3 = /https?:\/\/\w+.(org)/ig
// let rs4 = /https?:\/\/www.elzero.org/ig
// let rs5 = /https?:\/\/www.elzero.org:\d+\/\w+.\w+[^a-z]\w+[^a-z]\d+[^a-z]\w+[^a-z]\w+/ig

// console.log(yo.match(rs1))
// console.log(ys.match(rs2))
// console.log(yf.match(rs3))
// console.log(yg.match(rs4))
// console.log(yh.match(rs5))









// class user {
//     #s
//     constructor(id,us,sa){
//         this.i=id
//         this.u=us
//         this.#s=sa

//     }
// }


// class yosef extends user{
//     constructor(yo){
//         super(id,us,sa)
//         this.d=yo
//     }

// }


// let userone=new user(500,"yosef sameh",8000)
// let yosefone=new user(100,"sameh samlem",50000)

// console.log(userone
// console.log(yosefone)

//----------------------------------------
// /مشروع صور متحركه وارا بعض/
// let myimg =document.getElementById("img") 


// let myimges =["imge.me/img_2.jpg","imge.me/img_3.jpg","imge.me/img_4.png","imge.me/img_5.jpg"]
// let i =0


// function slideYosef(){
//     myimg.setAttribute("src",myimges[i])
    
//     if(i == myimges.length - 1){
//         i=0
//     }else{
//         i++
//     }
    
    
//     setTimeout(function(){
//         slideYosef()
        
//     },1500)
// }
// slideYosef();

//------------------------------------







//-------------------------------------
//مشروع تحويل العملات 
// let inp1 =document.getElementById("input1");
// let inp2 =document.getElementById("input2");
// let inp3 =document.getElementById("input3");

//     inp3.onclick =function(){

//         inp2.value=inp1.value*30
// }

//--------------------------------------








// let img =document.querySelector("img")
// let img2 =document.getElementById("img2")
// let btn =document.querySelector("button")
// let btn2 =document.getElementById("button2")
// let mydiv=document.getElementById("d2")

// btn.onclick=function(){
//     img.style.display="block"

// }

// btn2.onclick=function(){
//     mydiv.style.display="block"



// }






    //---------------------------------------------------------
    
    //صور تتحرك 
    // let mydiv=document.getElementById("d2")
    // let img1=document.getElementById("img1")
    // let img2=document.getElementById("img2")
    // let img3=document.getElementById("img3")
    // let img4=document.getElementById("img4")


    // setInterval(() => {
//     img4.src=img1.src
//     document.body.style.background="rgb(212, 153, 2)"
//     document.body.style.transition=".5s"
// }, 3000);
// setInterval(() => {
//     img4.src=img2.src
//     document.body.style.background="blue"
//     document.body.style.transition=".5s"
    
// }, 6000);
// setInterval(() => {
//     img4.src=img3.src
//     document.body.style.background="black"
//     document.body.style.transition=".5s"
    
// }, 9000);

//----------------------------------------------------------











