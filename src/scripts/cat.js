class Cat {
    constructor(catState) {
        // this.ctx = ctx;
        this.catState = catState;
        console.log(this.catState)
    }

    renderNormalState(ctx) {
        ctx.clearRect(0, 0, 234, 336);
        ctx.drawImage(this.catState, 0, 0, 234, 940, 0, 0, 236, 336); 
    }

    knock(ctx) {
        ctx.clearRect(0, 0, 234, 336);
        ctx.drawImage(this.catState, 234, 0, 234, 336, 0, 0, 236, 120)

    }

    smashLeft(ctx){
        console.log("left")
        ctx.clearRect(0, 0, 234, 336);

    }

    smashRight(ctx){
        ctx.drawImage(this.catState, 0, 0, 234, 336, 0, 0, 236, 120)
    }

    dizzy(ctx){
        ctx.drawImage(this.catState, 468, 0, 234, 336, 270, 100, 236, 336)
    }

    mouseTouchCat(){

    }
}

export default Cat