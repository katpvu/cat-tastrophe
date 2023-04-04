class Mouse {
    constructor(randomPos){
        this.setUp(randomPos);
        
    }

    setUp(randomPos) {
        if (randomPos === 1) {
            this.pos = [-100, 270];
            this.dir = 3;
        } else if (randomPos === 0) {
            this.pos = [940, 270];
            this.dir = -2;
        }

        //acquire mice png file
        let mice = document.querySelector("#mice")
        this.miceStates = mice;
    }

    draw(ctx) {
        console.log("drawing mouse")
        // ctx.drawImage(this.miceStates, 0, 0)

        if (this.dir > 0) {
            ctx.clearRect(this.pos[0], this.pos[1], 169, 52)
            ctx.drawImage(this.miceStates, 0, 0, 169, 52, this.pos[0], this.pos[1], 169, 52)
        } else {
            ctx.clearRect(this.pos[0], this.pos[1], 169, 52)
            ctx.drawImage(this.miceStates, 169, 0, 169, 52, this.pos[0], this.pos[1], 169, 52)
        }
        
    }

    move() {
        this.pos[0] += this.dir;
    }

    isCollidedWith(cat_limits) {
        console.log(this.pos[0])
        return (this.pos[0] >= cat_limits[0] && this.pos[0] <= cat_limits[1]) 
    }

    renderSmashedMouse(ctx) {
        if (this.dir > 0) {
            ctx.clearRect(this.pos[0], this.pos[1], 169, 52)
            ctx.drawImage(this.miceStates, 338, 0, 169, 52, this.pos[0], this.pos[1], 169, 52)
        } else {
            ctx.clearRect(this.pos[0], this.pos[1], 169, 52)
            ctx.drawImage(this.miceStates, 507, 0, 169, 52, this.pos[0], this.pos[1], 169, 52)
        }
    }

    removeDrawnMouse(ctx) {
        ctx.clearRect(this.pos[0], this.pos[1], 169, 52)
    }
    
}

export default Mouse;