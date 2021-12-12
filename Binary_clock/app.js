const canvas = document.getElementById("clock"); 
const ctx = canvas.getContext("2d");
const dec = 45, radius = 20, pi2 = Math.PI * 2;  
const color = ["rgba(0, 73, 199, 0.5)", "rgba(255, 0, 0, 0.5)", "rgba(0, 200, 0, 0.5)"]; 


function updateClock() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);       

    const date = new Date();                            

    [date.getHours(), date.getMinutes(), date.getSeconds()] 
        .map(obj => [Math.floor(obj / 10), obj % 10])      
        .reduce((a, b) => a.concat(b))                     
        .forEach((obj, index) => draw(obj, index, color[Math.floor(index/2)])); 
}


function draw(val, col, color) {
    for (var row = 0; row < 4; ++row) {           
        if ((val >> 3-row & 1) === 0) continue;    
        ctx.beginPath();                        
        ctx.fillStyle = color;
        ctx.arc(col*dec+20, row*dec+20, radius, 0, pi2);
        ctx.closePath();
        ctx.fill();
    }
}

window.setInterval(updateClock, 200);