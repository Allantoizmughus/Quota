export class Quote {
    public showDescription:boolean;
    constructor(public sentence:string, public description:string, public author:string, public submission:string, public likes:number, public dislikes:number, public postDate:Date){
        this.showDescription=false;
    }
}
