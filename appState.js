import { extendObservable } from 'mobx';

class AppState {
    constructor(){
        extendObservable(this,{
            timer : 0 
        });
        // setInterval(()=>{
        //     this.timer += 1;
        // },1000)
    }
    // resetTimer(){
    //     this.timer = 0;
    // }
}

export default AppState;

