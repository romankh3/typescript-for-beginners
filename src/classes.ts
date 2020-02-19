interface Category {
    name: string;
    displayName: string;
    subCategories: {name: string, displayName: string}[]
}

class InventoryStore {
    private _load(): any {
        throw new Error("Method not implemented.");
    }


    // using underscores to indicate "private" members
    // it's justa marker and don't do anything
    private _categories: Category[] = [];
    private _items: InventoryItem[] = [];
    private _isInitialized: Promise<boolean>;


    // access modifiers
    //
    // private -> only visible to members within the same class
    // protected -> visible to members within the same class and derived classes
    // public(default) -> visible for all consumers
    //

    // gettter in Java maner
    get categories() {
        return this._categories;
    }

    // setter in java maner
    set items(value) {
        this._items = value;
    }

    set categories(value) {
        this._categories = value;
    }
    set isInitialized(value) {
        this._isInitialized = value;
    }

    get items(){
        return this._items;
    }

    get isInitialized() {
        return this._isInitialized;
    }

    getItem(trackingNumber: string): InventoryItem {
        return null;
    }

    addItem(item: InventoryItem): Promise<InventoryItem> {
        const errors = this.validateItem(item);
        if(errors) {
            return null;
        }
    }
    validateItem(item: InventoryItem): InventoryItem {
        throw new Error("Method not implemented.");
    }
    

    constructor() {
        this._categories = [];
        this._items = [];
        this._isInitialized = this._load();
    }

    // create a static singleton for the entire application to use
    static instance = new InventoryStore();
    

}

// expose the singleton in its own variable.
const inventoryStore = InventoryStore.instance;