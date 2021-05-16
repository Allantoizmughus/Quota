export class Quote {
    public showDescription:boolean;
    constructor(public sentence:string, public description:string, public author:string, public submission:string){
        this.showDescription=false;
    }
}
