var sueldo =  500

console.log(` el sueldo inicial es ${sueldo} pesos`);

while (sueldo < 1500){

    if (sueldo >= 0 && sueldo <= 1000){
        sueldo += (sueldo * .15);
        console.log (sueldo)
    
    }else if (sueldo >= 1001 && sueldo <= 1200){
        sueldo  += (sueldo * .12);
        console.log (sueldo)
    
    }else if (sueldo >=1201 && sueldo <= 1400){
        sueldo += (sueldo * .10);
        console.log(sueldo)
    
    }else if (sueldo >= 1401 && sueldo <=1500){
        sueldo += (sueldo *.8);
        console.log(sueldo)
    
    }else if (sueldo >1500){
        sueldo += (sueldo * .5);
        console.log(sueldo);
    }
    
    
}

