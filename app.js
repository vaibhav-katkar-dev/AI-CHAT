const { GoogleGenerativeAI } = require("@google/generative-ai");
// import OpenAI from "openai";
const {OpenAI} =require("openai");
const {Server}=require('socket.io');
const {createServer}=require("http")
const mongoose=require("mongoose");
const express = require("express");
const User=require("./public/schema/userSchema");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const server=createServer(app);
const io = new Server(server);


async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/aichat");
  

  }


main().then((res)=>{
  console.log("mongoDB Connected.");
}).catch((err)=>{

  console.log(err);
})

server.listen(port, () => {
  console.log(`listening on ${port}`);
});


async function findId(id){
  // console.log(id.id);
  return await User.findById(id.id);
 
}

app.get("/",(req,res)=>{
  res.redirect("/signin");
})

function rout(data,id){
 
app.get("/:id/c/history",async(req,res)=>{

  // console.log(datam);
  let data= await findId(id);
  res.render("history",{data,id})
})
}


app.get("/:id/c", async(req, res) => {
  let id=req.params;

 let data= await findId(id);
  
    
    res.render("chat",{data,id});
  
    rout(data,id);

});


app.get("/signup",(req,res)=>{
  res.render("signup");
})
app.post("/signup",async (req,res)=>{
  let data=req.body;
  // console.log(data);

 await User.insertMany({email:data.email,password:data.password,fname:data.fname,lname:data.lname});

 
// console.log(await User.find());
  res.redirect("/signin")
})


app.get("/signin",async(req,res)=>{

  res.render("signin");
})
io.on('connection', (socket)=>{
  // console.log("connected");
app.post("/signin",async(req,res)=>{
  let data=req.body;
  
  try{
  let userData=await User.find({email:data.email,password:data.password});
  

  if(userData){


      res.redirect(`/${userData[0]._id}/c`);

      
      // socket.emit("logins","login successful");
      // socket.emit("login",userData);
    } else{
      res.status(404).send("User not found");
    }

    }catch (error) {
      
      // let err="Username Or Password is Wrong";
      
      res.redirect(`/signin`);
    }



   
 
})
});





io.on('connection', (socket)=>{
    // console.log("connected");

    let promptData;
    let firstLine;
    let responce;
    socket.on('prompt',async (p)=>{
      try{



        async function geminiAI() {
          
        const genAI = new GoogleGenerativeAI("ENTER Gemini AI API KEY");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
        const prompt = `${p} tell like freind and always add Title in first Line`;
        const result = await model.generateContent(prompt);
      
         responce=result.response.text();
         firstLine = responce.split("\n")[0];
        
        promptData={inputPrompt:p.prompt,output:responce};

        // console.log(promptData);

        let resAndTitle;
resAndTitle={responce,firstLine};
socket.emit('res',resAndTitle);


        }

        



        // const genAI = new GoogleGenerativeAI("AIzaSyAyEmH1mZmanVJQNI8oes_Vj3DbxG9hDpE");
        // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
        // const prompt = `${p} tell like freind and always add Title in first Line`;
        // const result = await model.generateContent(prompt);
      
        // const responce=result.response.text();
        // const firstLine = responce.split("\n")[0];
        
        // let promptData={inputPrompt:p.prompt,output:responce}

      
        
       

const openai = new OpenAI({
  apiKey: "ENTER Open AI API KEY",
});





async function openAI(){
          
const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": p.prompt},
  ],

});
 responce=completion.choices[0].message.content;
firstLine = responce.split("\n")[0];

 promptData={inputPrompt:p.prompt,output:responce}
//  console.log(promptData);
// p.tempEmail;

let resAndTitle;
resAndTitle={responce,firstLine};
socket.emit('res',resAndTitle);


}


  if(p.aiFlag==0){
    openAI();
  }
  else{
    geminiAI();
  }







if(promptData){
  await User.updateOne(
    { email: p.tempEmail },
    { 
      $push: { 
        "prompts": { 
          input: promptData.inputPrompt, 
          output: promptData.output 
        } 
      } 
    }
  );
}


 


// completion.then((result) => console.log(result.choices[0].message));

        
        
      }catch(error){
        console.log("some issue occours Try Again Later..",error);
        let err="Sorry! Server Issue Try Again Later.";
        socket.emit("err",err);
         
      }
    })

   
  
})