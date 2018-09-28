
export class Person {

    private _firstname: string;
    private _surname: string;
    private _birthYear: number;

    public constructor(firstname: string, surname: string, birthYear: number) {
        this._firstname = firstname;
        this._surname = surname;
        this._birthYear = birthYear;
    }

    public get firstname(): string {
        return this.firstname;
    }

    public get surname(): string {
        return this.surname;
    }

    public get birthYear(): number {
        return this.birthYear;
    }

}
