export class Vina {
    public ime: string;
    public vrsta: string;
    public kolicina: string;
    public opis: string;
    public cena: string;
    public imageUrl: string;
    constructor(ime: string, vrsta: string, kolicina: string, opis: string, cena: string, imageUrl: string) {
        this.ime = ime;
        this.vrsta = vrsta;
        this.kolicina = kolicina;
        this.opis = opis;
        this.cena = cena;
        this.imageUrl = imageUrl;
    }
}