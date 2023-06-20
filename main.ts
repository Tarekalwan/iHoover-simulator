enum Orientation {
    N = "N",
    E = "E",
    S = "S",
    W = "W",
}

class VacuumCleaner {
    constructor(
        public positionX: number,
        public positionY: number,
        public orientation: Orientation,
    ) {}

    moveForward() {
        switch (this.orientation) {
            case Orientation.N:
                this.positionY += 1;
                break;
            case Orientation.E:
                this.positionX += 1;
                break;
            case Orientation.S:
                this.positionY -= 1;
                break;
            case Orientation.W:
                this.positionX -= 1;
                break;
        }
    }

    turnRight() {
        switch (this.orientation) {
            case Orientation.N:
                this.orientation = Orientation.E;
                break;
            case Orientation.E:
                this.orientation = Orientation.S;
                break;
            case Orientation.S:
                this.orientation = Orientation.W;
                break;
            case Orientation.W:
                this.orientation = Orientation.N;
                break;
        }
    }

    turnLeft() {
        switch (this.orientation) {
            case Orientation.N:
                this.orientation = Orientation.W;
                break;
            case Orientation.E:
                this.orientation = Orientation.N;
                break;
            case Orientation.S:
                this.orientation = Orientation.E;
                break;
            case Orientation.W:
                this.orientation = Orientation.S;
                break;
        }
    }
}

class Room {
    constructor(
        public sizeX: number,
        public sizeY: number,
        public vacuumCleaner: VacuumCleaner,
    ) {}

    executeInstructions(instructions: string) {
        for (const instruction of instructions) {
            switch (instruction) {
                case 'A':
                    this.vacuumCleaner.moveForward();
                    break;
                case 'D':
                    this.vacuumCleaner.turnRight();
                    break;
                case 'G':
                    this.vacuumCleaner.turnLeft();
                    break;
                default:
                    console.error("Invalid instruction");
                    break;
            }
        }
    }
}

const vacuumCleaner = new VacuumCleaner(5, 5, Orientation.N);
const room = new Room(10, 10, vacuumCleaner);
room.executeInstructions("DADADADAA");

console.log(`Final position is: ${vacuumCleaner.positionX}, ${vacuumCleaner.positionY}, ${vacuumCleaner.orientation}`);
