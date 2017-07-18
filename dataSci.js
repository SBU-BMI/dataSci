console.log('dataSci.js loaded')

if(document.getElementById("askDataSci")){
    askDataSci.onclick=function(ev){
        infoDataSci.hidden=!infoDataSci.hidden
        if(infoDataSci.hidden){
            askDataSci.style.color="green"
        }else{
            askDataSci.style.color="blue"
        }
        //debugger
    }
}