const http = require("http");

const {getUser,addUser}  = require("./controllers/UserController");

const server = http.createServer((request, res) => {
    if(request.url  === "/api/add/user" && request.method==="POST"){
        //code
        addUser(request,res);
        console.log("hit 1");
    }
    else if(request.url==="/api/get/users" && request.method==="GET"){
        getUser(request, res);
        // console.log("hit 2");
    }
    else{
        getUser(request, res);
        // console.log("hit 3");
    }
})
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server is running on port ${PORT}`));