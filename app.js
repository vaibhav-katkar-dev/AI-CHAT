const { GoogleGenerativeAI } = require("@google/generative-ai");
const {Server}=require('socket.io');
const {createServer}=require("http")
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const server=createServer(app);
const io = new Server(server);

server.listen(port, () => {
  console.log(`listening on ${port}`);
});

app.get("/", (req, res) => {
  res.render("chat");
});

// API Part
// (async () => {
//   try {
//     const genAI = new GoogleGenerativeAI("AIzaSyAyEmH1mZmanVJQNI8oes_Vj3DbxG9hDpE");
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const prompt = "Explain how AI works";

//     const result = await model.generateContent(prompt);
//     const responce=result.response.text();
//     // console.log(result.response.text()); // Ensure this is the correct access for the library
//   } catch (error) {
//     console.error("Error generating content:", error);
//   }
// })();



io.on('connection', (socket)=>{
    // console.log("connected");

    socket.on('prompt',async (p)=>{
        const genAI = new GoogleGenerativeAI("AIzaSyAyEmH1mZmanVJQNI8oes_Vj3DbxG9hDpE");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
        const prompt = p;
    
        const result = await model.generateContent(prompt);
        const responce=result.response.text();
        socket.emit('res',responce);
    })


    socket.on('disconnect',()=>{
        // console.log('disonnect')
    })
})