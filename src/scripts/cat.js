class Cat {
    constructor() {
        let states = {
            normalState: "",

        }
    }

    renderNormalState() {
        ctx.drawImage(catState, 0, 0, 234, 336, 270, 100, 236, 336)
    }

    renderKnockingState() {
        ctx.drawImage(catState, 234, 0, 234, 336, 270, 100, 236, 336)
    }

    renderSmashingState(){

    }

    renderDizzyState(){
        ctx.drawImage(catState, 468, 0, 234, 336, 270, 100, 236, 336)
    }

    mouseTouchCat(){

    }
}