class Mouse {
    constructor(mouseCtx, index) {
        this.mouseCtx = mouseCtx;
        this.index = index
        this.setUp();
        this.attackNumber = 0;
    }

    setUp() {
        //set up mouse pos and dir
        const speeds = [3, 5, 7, 9];
        let direction = Math.floor(Math.random() * 2)
        if (direction === 1) {
            this.pos = [-100, 270];
            this.dir = speeds[this.index];
        } else if (direction === 0) {
            this.pos = [940, 270];
            this.dir = -(speeds[this.index]);
        }

        //acquire mice png file
        let mice = document.querySelector("#mice")
        this.miceStates = mice;
    }

    draw(ctx) {
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

    isCollidedWith(catLimits) {
        if (catLimits.length > 1 ) { //checking if mouse touches cat before cat attacks
            return this.pos[0] >= catLimits[0] && this.pos[0] <= catLimits[1];
        } else if (catLimits[0] === 150) {
            return this.pos[0] >= catLimits[0] && this.pos[0] <= 450;
        } else if (catLimits[0] === 600) {
            return this.pos[0]-50 <= catLimits[0] && this.pos[0] >= 450;
        }
    }

    renderSmashedMouse(ctx) {
        // console.log("rendering after mouse hits cat")
        if (this.dir > 0) {
            this.removeDrawnMouse()
            this.mouseCtx.drawImage(this.miceStates, 338, 0, 169, 52, this.pos[0], this.pos[1], 169, 52)
        } else {
            this.removeDrawnMouse()
            this.mouseCtx.drawImage(this.miceStates, 507, 0, 169, 52, this.pos[0], this.pos[1], 169, 52)
        }
    }

    removeDrawnMouse() {
        this.mouseCtx.clearRect(this.pos[0], this.pos[1], 169, 52)
    }
    
}

export default Mouse;