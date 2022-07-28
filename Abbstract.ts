abstract class DetailCharacter {
    public name: string = ""
    public height: number = 0
    public weight: number = 0
    constructor(name: string, height: number, weight: number) {
        this.name = name
        this.height = height
        this.weight = weight
    }
    public abstract Aura(): number;
}
class Setup extends DetailCharacter {
    constructor(name: string, weight: number, height: number) {
        super(name, height, weight)
    }
    public Aura(): number {
        return this.height * this.weight
    }
}
const Watch = new Setup("kong",189,90)
const Mean = new Setup("Meen",122,70)
console.log(Watch);

console.log(`เเละนี่คือพลังความหล่อ`+ "="+ (Watch.Aura()));
console.log(Mean);
console.log(`เเละนี่คือพลังความหล่อ`+ "="+ (Mean.Aura()));

