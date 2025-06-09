const counterE1 = document.querySelectorAll(".counter");

counterE1.forEach((counterE1) => {
    counterE1.innerText = "0";
     incrementCounter();

    function incrementCounter(){
        let currentNum = +counterE1.innerText;
        const dataceil = counterE1.getAttribute("data-ceil");
        const increment = dataceil / 15 
        currentNum = Math.floor(currentNum + increment)
        

        if(currentNum < dataceil){
            counterE1.innerText = currentNum
            setTimeout(incrementCounter,50)
        }else{
            counterE1.innerText=dataceil
        }
    }

});