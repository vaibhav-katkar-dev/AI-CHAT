
// const socket=io();
// let switchAi=document.querySelector("#switchAi");
// let prompt_div=document.querySelector(".prompt-div");
// let inputFeild=document.querySelector(".prompt");
// let LogOut=document.querySelector(".logout");
// let pemail=document.querySelector(".pemail");
// let pname=document.querySelector(".pname");
// let details=document.querySelector(".details");
// let profileLogo=document.querySelector("#profileLogo");
// let profile=document.querySelector(".profile");
// let titles=document.querySelector(".titles");
// let save=document.querySelector('.fa-floppy-disk');
// let navOprationBtn=document.querySelector(".navOprationBtn");
// let bodyC=document.querySelector(".body");
// let nav=document.querySelector(".nav");
// let iinav=document.querySelector("#iinav");
// let navbtn=document.querySelector("#inav");
// let input=document.querySelector('input');
// let button=document.querySelector('button');
// let resContainer=document.querySelector('.genreted-res')
// let resC=document.querySelector('.resC')
// // document.querySelector('h1');
// let anlizing=document.createElement("p");
// let home=document.querySelector(".home");
// let home_h4=document.querySelector(".home h4");
// let aiFlag=1;

// //scrollbar smooth and down scroll
// function scrollToBottom() {
//     let div = resContainer; // Ensure correct selection
//     if (div) {
//         div.scrollTo({
//             top: div.scrollHeight,
//             behavior: "smooth" // Enables smooth scrolling
//         });
//     }
// }


// //switch ai



// switchAi.addEventListener('click',()=>{
//     if(aiFlag==1){
//         switchAi.innerText="Open-AI";
//         switchAi.style.fontSize= '1.1rem';
        
//         switchAi.style.color="rgb(255, 153, 0)";
//         aiFlag=0;

//     }
//     else if(aiFlag==0){

//     switchAi.innerText="Gemini-AI";
//     switchAi.style.fontSize= '1.1rem';
//     switchAi.style.color="rgb(0, 132, 255)";
    
//     aiFlag=1;
// }
// });










// button.disabled=true;
// button.style.opacity="0.5";
// input.addEventListener("input",()=>{

//     if(!input.value==""){
//     button.disabled=false;
//     button.style.opacity="1";

// }
// if(input.value==""){
//     button.disabled=true;
//     button.style.opacity="0.5";
    
// }

// });

// let stack=[];
// let temp;
// // stack[0].push(pemail.innerHTML.textContent);
// // console.log(stack[0]);

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Enter') {
//     button.click(); // Trigger button click
//   }
// });

// button.addEventListener('click',()=>{
    
//     let prompt=input.value;
//     temp=prompt;
//     // const promptForStack=input.value;
//     // stack.push({
//     //         prompt:prompt,
//     //         // output:resp
//     //     });
//     let resC=document.createElement('div');
//     let p=document.createElement('aiml');
//     p.innerText=prompt;
//     p.style.fontFamily="Arial, Helvetica, sans-serif";
//     p.style.fontSize="1rem";
//     p.style.fontWeight="600";
//     resC.style.margin="10px";
//     resContainer.appendChild(resC);
//     resC.className="resC iprompt";
//     resC.appendChild(p);
//     let br1=document.createElement('br');
//     let br2=document.createElement('br');
//     let br3=document.createElement('br');
//     let hr=document.createElement('hr');
//     hr.style.border='0';
//     hr.style.margin="10px";
    
//     resC.appendChild(br1,br2,br3);

//     let tempEmail=pemail.innerText;
//     let sendData={tempEmail,prompt,aiFlag};
//     socket.emit('prompt',sendData);   //////////////////////////
//     input.value="";
//     document.querySelector('#h1').style.opacity="0";
//     anlizing.textContent="  Analyzing..";
//     anlizing.style="left:10%;position:absulute;margine=10px;font-weight:600; text-align:center;";
//     resContainer.appendChild(anlizing);
//     scrollToBottom();
//     resContainer.appendChild(hr);
//     save.style.opacity="1";
//     button.disabled=true;
// button.style.opacity="0.5";
// })

// socket.on("err" ,(err)=>{
//     console.log(err);
    
//         // alert(err);
//         button.disabled=true;
//         // anlizing.style.opacity="0";
//         anlizing.textContent=err;
//         anlizing.style.backgroundColor="red";
//         anlizing.style.padding="10px";

//         inputFeild.addEventListener("input",()=>{
//             window.location.reload();
//         });
//         // inputFeild.( window.location.reload());
//         // resC.style.display="flex";


        

    
//         });

// socket.on('res',(r)=>{
    
    
//     function boldText() {
//         // let paragraph = document.getElementById("text");
        
//         // Replace **word** with <b>word</b>
//         r.firstLine = r.firstLine.replace(/\*\*(.*?)\*\*/g, "$1");

//         r.responce = r.responce.replace(/\*\*(.*?)\*\*/g, "$1");

//         //store in stack
//         let inputPrompt=temp;
//         let resp=r.responce;
//         // let stack=[];
//         stack.push({
//             prompt:inputPrompt,
//             output:resp
//         });
//         // console.log(stack);
//     }
//     boldText(); // Call function to apply bold effect




//     console.log(r.firstLine);
//     let resC=document.createElement('div');
//     let p=document.createElement('aiml');
//     let hr=document.createElement('hr');
//     resC.className="resC";
//     p.innerText=r.responce;



//     p.style.fontFamily="Arial, Helvetica, sans-serif";
//     p.style.fontSize="1rem";
//     p.style.fontWeight="600";
//     resC.style.margin="50px";
//     resContainer.appendChild(resC);
//     resC.appendChild(p);
//     hr.style.border='1px solid rgb(206, 206, 206);';
//     hr.style.margin="10px";
//     resContainer.appendChild(hr);
//     anlizing.style.opacity="0";
//     scrollToBottom();



// //for nav side titels
// let title=r.firstLine;
// let newTP=document.createElement("p");
// newTP.textContent=title;
// titles.appendChild(newTP);




// });


// //automatic detect os then adjust navbar
// const deviceType = navigator.userAgent.includes("Mobi");
    
//     if(deviceType==false){
//         // console.log("window");
//         // alert("window");
//         nav.style.width="20%";
//         home.style.opacity="1";
//     home_h4.style.opacity="1";
//         iinav.style.opacity= "0";
//         flag=0;
//     }
//     else{
//         // console.log("android");
//         // alert("android");
//         nav.style.width="0%";
//         mode.style.left="70%";
//         bodyC.style.width="90%";
//         // bodyC.style.height="90vh";
//         bodyC.style.left="0%";
//         body.style.margin="0 5%";
//         body.style.width="100%"
//         profile.style.left="88%";
        
//         // .style.opacity="0";
//         prompt_div.style.width="94%";
//         iinav.style.position="absolute";
//         body.style.marginLeft="-1px";

//         button.style.margin="20px auto ";

//         inputFeild.style.margin="1% 0";
//         inputFeild.style.height="80%";
//         prompt_div.style.borderRadius="10px";
//         navOprationBtn.style.left="4%";
//         body.style.overflow="hidden";
//         profile.style.left="88";
        
//         navbtn.style.opacity= "1";
//         bodyC.style.overflow="visible";
//         mode.style.left="80%";
//         iinav.style.opacity= "0";
//         iinav.style.left="3%";
//         iinav.style.top="3%";
//         flag=1;
//         details.style.left="20%";

//     }

// navOprationBtn.addEventListener('click',()=>{
//     // console.log("clicked");

//     // alert("h");
//     home.style.opacity="1";
//     home_h4.style.opacity="1";

//     if(flag==0){
//         // console.log("window");
//         // alert("window");
//         nav.style.opacity="0";
//         body.style.width="100vw";
//         body.style.left="0";
//         nav.style.position="absolute";

//         // nav.style.width="20vw";
//         // navOprationBtn.style.position="absolute";
//         // navOprationBtn.style.left="100%";
//         // navOprationBtn.style.opacity="100%";
        
//         // let newNOB=document.createElement("i");
//         // newNOB.className="fa-solid fa-bars navOprationBtn";
//         // newNOB.id="inav";
//         // body.appendChild(newNOB);
//         flag=1;
        

//     }

//    else if(flag==1){

//     if(deviceType==true){
//         nav.style.opacity="1";
//         body.style.width="100vw";
//         body.style.left="0vw";
//         nav.style.width="40vw";
//         nav.style.position="absolute";
//         nav.style.backgroundColor="rgb(216, 216, 216);";
//         flag=0;


//     }else{

    
//         // console.log("window");
//         // alert("window");
//         nav.style.opacity="1";
//         body.style.width="80vw";
//         body.style.left="20vw";
//         // navOprationBtn.style.position="absolute";
//         // navOprationBtn.style.left="100%";
//         // navOprationBtn.style.opacity="100%";
        
//         // let newNOB=document.createElement("i");
//         // newNOB.className="fa-solid fa-bars navOprationBtn";
//         // newNOB.id="inav";
//         // body.appendChild(newNOB);
//        flag=0;
//     }

//     }


    
    

   
    
// });



  


  

//   window.addEventListener('beforeunload',  function (e) {
//       // e.preventDefault();
//       // e.returnValue = '';
//       console.log("hello");

//        socket.emit("stack",stack);
      
//   });


// //   socket.on("login",(ld)=>{
    
// //     let email=ld[0].email;
// //     let name=ld[0].fname + ld[0].lname;
// //     // let p=document.createElement("p");
// //     // p.textContent=email;
// //     // resC.appendChild(p);
// //     // console.log(ld);
// //     // console.log(email);
// //     // console.log(ld[0]._id);
// //     profileLogo.textContent=email[0];
// //     pemail.textContent=email;
// //     pname.textContent=name;
// //   });

//   details.style.opacity="0";
//   profile.addEventListener('click',()=>{
//     details.style.opacity="1";
//     // LogOut.disabled=false;
    
//   })



//   document.addEventListener("click", function (event) {
//     // console.log("Clicked at:", event.clientX, event.clientY);
//     // iinav.style.opacity= "0";

//     // LogOut.disabled=true;
    
//     if (!profile.contains(event.target)) {
//         details.style.opacity="0";
//     }


//     // if (!details.contains(event.target)) {
//     //     // Clear all input fields
//     //     console.log("Cleared all inputs");
//     // }
   
   

// });

// LogOut.addEventListener('click',()=>{
  

//        window.location.href = "/signup";
//        console.log("logout");
      
// });
            