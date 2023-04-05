class CriticalMoment {
    constructor(game) {
        this.duration = 5000;
        this.game = game;
        this.criticalMoment;
        this.background = document.querySelector(".background");
        this.brightDoor = this.brightDoor()
    }

    brightDoor() {
        let brightDoorImg = new Image();
        brightDoorImg.src = "./assets/bright-door.jpg";
        this.background.appendChild(brightDoorImg).classList.add("hidden", "bg-door", "flashing-door") 
        return brightDoorImg;
    }

    //this is working -- for critical moment - need to switch between normal and bright door
    startCrit() {
        let that = this;
        this.game.numPointsPerKnock = 289;
        let flash = function() {
            that.brightDoor.classList.remove("hidden");
            setTimeout(function() {
                that.brightDoor.classList.add("hidden");
            }, 350)
        }
        this.criticalMoment = setInterval(flash, 700);
        
        setTimeout( function() {
            that.game.numPointsPerKnock = 59;
            that.stopCriticalMoment();
            
        }, this.duration)
    }

    stopCriticalMoment() {
        clearInterval(this.criticalMoment);
        this.criticalMoment = null;
    }
}

export default CriticalMoment;