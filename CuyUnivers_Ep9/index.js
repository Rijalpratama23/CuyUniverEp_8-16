class Laptop {
    color
    core
    constructor(merk) {
        this.merk = merk;
    }
    set newColor(color) {
        this.color = color
    }
    set newCore(core) {
        this.core = core
    }
    get detail() {
        return `Hi saya ${this.merk}, saya berwarna ${this.color}, dan core saya ${this.core}`
    }
}
const asus = new Laptop("Asus");
asus.newColor = "black";
asus.newCore = "i7"

console.log(asus.detail)