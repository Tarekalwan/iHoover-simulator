var Orientation;
(function (Orientation) {
    Orientation["N"] = "N";
    Orientation["E"] = "E";
    Orientation["S"] = "S";
    Orientation["W"] = "W";
})(Orientation || (Orientation = {}));
var VacuumCleaner = /** @class */ (function () {
    function VacuumCleaner(positionX, positionY, orientation) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.orientation = orientation;
    }
    VacuumCleaner.prototype.moveForward = function () {
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
    };
    VacuumCleaner.prototype.turnRight = function () {
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
    };
    VacuumCleaner.prototype.turnLeft = function () {
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
    };
    return VacuumCleaner;
}());
var Room = /** @class */ (function () {
    function Room(sizeX, sizeY, vacuumCleaner) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.vacuumCleaner = vacuumCleaner;
    }
    Room.prototype.executeInstructions = function (instructions) {
        for (var _i = 0, instructions_1 = instructions; _i < instructions_1.length; _i++) {
            var instruction = instructions_1[_i];
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
    };
    return Room;
}());
var vacuumCleaner = new VacuumCleaner(5, 5, Orientation.N);
var room = new Room(10, 10, vacuumCleaner);
room.executeInstructions("DADADADAA");
console.log("Final position is: ".concat(vacuumCleaner.positionX, ", ").concat(vacuumCleaner.positionY, ", ").concat(vacuumCleaner.orientation));
