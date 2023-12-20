let decriment = document.querySelector("#decriment");
let StartPause = document.querySelector("#StartPause");
let incriment = document.querySelector("#incriment");
let disply = document.querySelector("#displTime");


class Counter{
    constructor(){
        this.start = false;
        this.counter = 0;
        
    }

    setTimerID(value){
        this.intervalID = value;
    }
    getTimerID(){
        return this.intervalID;
    }

    setStart(status){
        this.start = status;
    }

    normalIncriment(){
        this.counter += 1;
        return this.counter;
    }
    Incriment(){
        clearInterval(this.intervalID);
        this.counter += 1;
        this.start = false;
        return this.counter;
    }
    Decriment(){
        clearInterval(this.intervalID);
        this.counter -= 1;
        this.start = false;
        return this.counter;
    }

    runningStateSymble(){
        if(this.start){
            return "⏸";
        }else{
            return "▶";
        }
    }

    getCounter(){
        return this.counter;
    }
}


counter1 = new Counter();

StartPause.addEventListener("click", ()=>{
    if(counter1.start==false){
        counter1.setStart(true);
        let timetID = setInterval(()=>{
            counter1.setTimerID(timetID);
            disply.textContent = counter1.normalIncriment();
        }, 1000);

        StartPause.textContent = counter1.runningStateSymble();
    }
    else{
        clearInterval(counter1.getTimerID());
        counter1.setStart(false);
        StartPause.textContent = counter1.runningStateSymble();
    }

})

decriment.addEventListener("click", ()=>{
    disply.textContent = counter1.Decriment();
    StartPause.textContent = counter1.runningStateSymble();
});


incriment.addEventListener("click", ()=>{
    disply.textContent = counter1.Incriment();
    StartPause.textContent = counter1.runningStateSymble();
});

