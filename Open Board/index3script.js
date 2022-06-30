let canvasBoard = document.querySelector("canvas");
    let rectTool = document.querySelector(".fa-square");
    let lineTool = document.querySelector(".fa-grip-lines-vertical");
    let cTool = "rectTool";
    // default height width is smaller 
    canvasBoard.height = window.innerHeight;
    //canvasBoard.height=500px ; aise bhi likh skte the
    canvasBoard.width=window.innerWidth;

    // this line gives you the tool to draw on that canvas
    let tool = canvasBoard.getContext("2d");

    //from line 125 -146 this to chnage the color
    let colorArea=document.querySelector(".color-area");
    let redArea=document.querySelector(".red");
    let blueArea=document.querySelector(".blue");
    let greenArea=document.querySelector(".green");
    let pencilArea=document.querySelector("#pencil");

    let body = document.querySelector("body");
    // tool change logic
 
    // canavas board -> top point kitna niche hai 
    let boardTop = canvasBoard.getBoundingClientRect().top;
    // canavas board -> left  point kitna aage  hai 
    let boardLeft = canvasBoard.getBoundingClientRect().left;
    // let boardLeft=0;
    
    let iX, iY, fX, fY;

    //addEventListener listens to the event occured ...in this case event is mosue getting clicked
    //then i can decide what to do when the event occurs
   
    // alert("mouse was pressed on body");
            // console.log(e);
            // let xPos = e.clientX;
            // let yPos = e.clientY;
            // console.log(xPos, yPos)
   // // rectangle build 
    // tool.fillStyle = "green";
    // // x,y,width,height
    // tool.fillRect(10, 30, 200, 200);
    // // boundaries draw
    // tool.strokeStyle = "red";
    // tool.strokeRect(50, 50, 200, 200);
    // tool.fillStyle = "blue"
    // tool.fillRect(40, 40, 100, 100);
    // press on the screen

    redArea.addEventListener("click" , function(obj){
        // alert("red was clicked");
        tool.strokeStyle="red";
    });
    
    blueArea.addEventListener("click" , function(obj){
        // alert("blue was clicked");
        tool.strokeStyle="blue";
    });

    greenArea.addEventListener("click" , function(obj){
        // alert("green was clicked");
        tool.strokeStyle="lawngreen";
    });

    rectTool.addEventListener("click", function () {
        // alert("rectangle clicked");  //it is working
        cTool = "rectTool";
    })

    lineTool.addEventListener("click", function () {
        cTool = "lineTool";
    })

    pencilArea.addEventListener("click" , function(obj){
        // alert("pencil clicked");
        cTool= "pencilArea";
    })


    let drawingBoard=false;

    canvasBoard.addEventListener("mousedown", function (e) {
       // alert("mouse was clicked"); //same as print statement but it gives alert instead
       // console.log(obj); //obj describes the event that ocurred
           drawingBoard=true;
           iX = e.clientX+boardLeft;
           iY = e.clientY -boardTop;
           if(cTool=="pencilArea"){
               // console.log("pencil is selected");
               tool.beginPath();
               tool.moveTo(e.clientX+boardLeft , e.clientY-boardTop);
           }
       })


           canvasBoard.addEventListener("mousemove" , function(e){
               if(cTool=="pencilArea"){
                   if(drawingBoard==false){
                       return;
                   }
                   fX = e.clientX+boardLeft;
                   fY = e.clientY - boardTop;
                   tool.lineTo(fX , fY);
                   tool.stroke();
                   iX=fX;
                   iY=fY;
                   tool.lineWidt
               }
               })

    canvasBoard.addEventListener("mouseup", function (e) {
       // console.log(e);
       drawingBoard=false;
       fX = e.clientX+boardLeft;
       fY = e.clientY - boardTop;
       let width = fX - iX;
       let height = fY - iY;
       if (cTool == "rectTool") {
           tool.strokeRect(iX, iY, width, height);
       } 
       else if(cTool=="lineTool") {
           tool.beginPath();
           tool.moveTo(iX, iY);
           tool.lineTo(fX, fY);
           tool.stroke();
           // console.log("Pencil tool is pending")
       }

   })