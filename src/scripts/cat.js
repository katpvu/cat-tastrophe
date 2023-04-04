class Cat {

    constructor(catStates, catSmashes) {
        this.catStates = catStates;
        this.catSmashes = catSmashes;
        this.limits = [300, 500];
        // this.catSmashes();
    }

    // catSmashes() {
    //     let smashImage = document.createElement("img");
    //     smashImage.src = "./assets/cat_smash.png";
    //     document.querySelector(".game-console").appendChild(smashImage)
    //     this.catSmashes = smashImage;
    // }

    drawState(ctx, imageLoc) { //done
        ctx.drawImage(this.catStates, imageLoc, 0, 234, 336, 355, 0, 234, 336)
    }

    renderNormalState(ctx) { //done
        ctx.clearRect(355, 0, 234, 336);
        ctx.clearRect(250, 0, 500, 400);
        let imageLoc = 0;
        this.drawState(ctx, imageLoc);
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
        ctx.clearRect(355, 0, 234, 336);
        ctx.drawImage(this.catSmashes, 336, 220, 330, 100, 250, 215, 400, 117)
    }

    smashRight(ctx){
        ctx.clearRect(355, 0, 234, 336);
        ctx.drawImage(this.catSmashes, 0, 218, 330, 100, 320, 215, 400, 117)
    }

}

export default Cat