class Cat {

    constructor(catStates) {
        this.catStates = catStates;
    }

    renderNormalState(ctx) { //done
        ctx.clearRect(355, 0, 234, 336);
        let imageLoc = 0;
        this.drawState(ctx, imageLoc);
    }

    drawState(ctx, imageLoc) { //done
        ctx.drawImage(this.catStates, imageLoc, 0, 234, 336, 355, 0, 234, 336)
    }

    knock(ctx) { //done
        ctx.clearRect(355, 0, 234, 336);
        let imageLoc = 234;
        this.drawState(ctx, imageLoc);
    }

    dizzy(ctx){ //done
        ctx.clearRect(355, 0, 234, 336);
        let imageLoc = 468;
        this.drawState(ctx, imageLoc);
    }

    smashLeft(ctx){
        console.log("left")
        ctx.clearRect(355, 0, 234, 336);

    }

    smashRight(ctx){
        ctx.drawImage(this.catState, 0, 0, 234, 336, 0, 0, 236, 120)
    }

    mouseTouchCat(){

    }
}

export default Cat