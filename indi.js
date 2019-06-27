document.querySelector("#textValue").placeholder = 0;

var res = 0; 

function add(){
    
    var a = (document.querySelector("#textValue").value);

    if(a == ""){
        
        document.querySelector("#resCode").innerHTML = `<h3>${0}</h3>`;
        console.log("zero");
        
    }else{
    res += parseInt(a);
    
    document.querySelector("#resCode").innerHTML = `<h3>${res}</h3>`;
    }
}

function sub(){
    
    var b = (document.querySelector("#textValue").value);
    
    if(b === ""){
        
    document.querySelector("#resCode").innerHTML = `<h3>${0}</h3>`;
        console.log("zero");
        
    }else{
    res -= parseInt(b);
    
     document.querySelector("#resCode").innerHTML = `<h3>${res}</h3>`;
    
    }
}

function mul(){
    var c = (document.querySelector("#textValue").value);
    
     if(c === ""){
         
    document.querySelector("#resCode").innerHTML = `<h3>${0}</h3>`;
        console.log("zero");
         
     }else{
        res = res *  parseFloat(c);
    
     document.querySelector("#resCode").innerHTML = `<h3>${res}</h3>`;
     }
}

function div(){
    var d = (document.querySelector("#textValue").value);
    
      if(d === ""){
          
    document.querySelector("#resCode").innerHTML = `<h3>${0}</h3>`;
        console.log("zero");
          
      }else{
        res = res / parseFloat(d);
    
     document.querySelector("#resCode").innerHTML = `<h3>${res}</h3>`;
      }
}