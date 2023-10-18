let avt = document.getElementsByClassName('avt');
for(let x=0 ;x<avt.length;x++){
    avt[x].style.zIndex = avt.length - x;
}


let j =1;

function lami(i){

if(i.value == 0 || i==''){
    avt[0].style.opacity = 0
}else{
    avt[j].style.opacity =0;
     if(j==4){
        for(let u =0 ;u<avt.length ;u++){
            avt[u].style.opacity =1;
            j=0
        }
     }else{j++}
if(i=='r'){
    for(let u =0 ;u<avt.length ;u++){
        avt[u].style.opacity =1;
        
    }


}

if(i=='p'){
    for(let u =0 ;u<avt.length ;u++){
        avt[u].style.opacity =0;
        
    }

    avt[avt.length -1].style.opacity =1

}
    }

}
