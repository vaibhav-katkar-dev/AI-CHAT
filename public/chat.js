socket=io();

 // let modei=document.querySelector('.fa-thin fa-moon');
 let body=document.querySelector('.body');
 let mode= document.querySelector('#mode');
 let  flag="WhiteSet";
 mode.addEventListener('click',()=>{
     

  if(flag==="WhiteSet"){
      body.style.backgroundColor="rgb(22,22,22)";
      // modei.className="fa-solid fa-moon";
      // flag=0;
      
      mode.style.color='white';
      flag="blackSet";
      console.log(flag);

  }
  else if(flag==="blackSet"){
      body.style.backgroundColor='white';
      // modei.className="fa-thin fa-moon";
      flag="WhiteSet";
      
      mode.style.color='black';
      console.log(flag);
  }
      
     
  });
