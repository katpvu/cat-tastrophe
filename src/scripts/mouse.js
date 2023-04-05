class Mouse {
    static SPEEDS = [3, 5, 7, 9];

    constructor(mouseCtx, index) {
        this.mouseCtx = mouseCtx;
        this.index = index
        this.setUp();
        this.attackNumber = 0;
    }

    setUp() {
        //set up mouse pos and dir
        let direction = Math.floor(Math.random() * 2)
        if (direction === 1) {
            this.pos = [-100, 270];
            this.dir = Mouse.SPEEDS[this.index];
        } else if (direction === 0) {
            this.pos = [940, 270];
            this.dir = -(Mouse.SPEEDS[this.index]);
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
        console.log(this.pos[0], 'isCollidedwith')
        if (catLimits.length > 1 && this.pos[0] >= catLimits[0] && this.pos[0] <= catLimits[1]) {
            this.attackNumber += 1;
            console.log(this.pos[0],this.attackNumber, "MOUSE ATTACK CAT")
            return true
        } else if (catLimits[0] === 150) {
            this.attackNumber += 1;
            console.log(this.pos[0]+50,this.attackNumber, "CAT ATTACK MOUSE LEFT")
            return (this.pos[0] >= catLimits[0] && this.pos[0] <= 450) 
        } else if (catLimits[0] === 600) {
            this.attackNumber += 1;
            console.log(this.pos[0],this.attackNumber, "CAT ATTACK MOUSE RIGHT")
            return (this.pos[0]-50 <= catLimits[0] && this.pos[0] >= 450)
        }
        return false;
        
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