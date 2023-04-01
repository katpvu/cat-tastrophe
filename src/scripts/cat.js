class Cat {
    constructor(ctx, catState) {
        this.ctx = ctx;
        this.catState = catState;
    }

    renderNormalState() {
        // this.ctx.clearRect(0, 0, 234, 336);
        console.log(this.catState);
        this.ctx.drawImage(this.catState, 0, 0, 234, 940, 0, 0, 236, 336); 
        // this.ctx.drawImage(this.catState, 0, 0, 234, 336, 270, 100, 236, 336)
    }

    knock() {
        console.log("knckoing")
        this.ctx.clearRect(0, 0, 234, 336);
        console.log("after clearing")
        this.ctx.drawImage(this.catState, 234, 0, 234, 336, 0, 0, 236, 120)

    }

    smashLeft(){
        console.log("left")
        this.ctx.clearRect(0, 0, 234, 336);

    }

    smashRight(){
        this.ctx.drawImage(this.catState, 0, 0, 234, 336, 0, 0, 236, 120)
    }

    dizzy(){
        this.ctx.drawImage(this.catState, 468, 0, 234, 336, 270, 100, 236, 336)
    }

    mouseTouchCat(){

    }
}

export default Cat