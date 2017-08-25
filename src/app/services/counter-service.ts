export class CounterService{
    activeToInactive:number=0;
    inactiveToActive:number=0;

    setActiveToInactive(){
        this.activeToInactive++;
        console.log('Active to Inactive - '+this.activeToInactive);
    }

    setInActiveToActive(){
        this.inactiveToActive++;
        console.log('Inactive to Active - '+this.inactiveToActive);
    }
}