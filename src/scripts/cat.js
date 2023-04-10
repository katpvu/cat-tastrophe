class Cat {
    constructor(catStates, catSmashes) {
        this.catStates = catStates;
        this.catSmashes = catSmashes;
        this.limits = [300, 500];
    }

    drawState(ctx, frame) { 
        ctx.drawImage(this.catStates, 234 * frame, 0, 234, 336, 355, 0, 234, 336)
    }

    renderNormalState(ctx) { 
        ctx.clearRect(355, 0, 234, 336);
        ctx.clearRect(250, 0, 500, 400);
        this.drawState(ctx, 0);
    }

    knock(ctx) { 
        ctx.clearRect(355, 0, 234, 336);
        this.drawState(ctx, 1);
    }

    dizzy(ctx){ 
        ctx.clearRect(355, 0, 234, 336);
        this.drawState(ctx, 2);
    }

    smashLeft(ctx){
        ctx.clearRect(355, 0, 234, 336);
        ctx.drawImage(this.catSmashes, 336, 220, 330, 100, 250, 215, 400, 117)
    }

    smashRight(ctx){
        ctx.clearRect(355, 0, 234, 336);
        ctx.drawImage(this.catSmashes, 0, 218, 330, 100, 320, 215, 400, 117)
    }

}

export default Cat