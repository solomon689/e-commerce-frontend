export class Category {
    public id?: string;
    public name!: string;
    public subCategories: SubCategory[] = new Array<SubCategory>();

    constructor(name: string, subCategories: SubCategory[], id?: string) {
        this.name = name;
        this.subCategories = subCategories;
        this.id = id;
    }
}

export class SubCategory {
    public id?: string;
    public name!: string;

    constructor(name: string, id?: string) {
        this.name = name;
        this.id = id;
    }   
}