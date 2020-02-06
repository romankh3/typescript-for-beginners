let desplayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD1243234";
let createDate: Date = new Date();
let originalCost: number = 425;
// or use case like below
// let originalConst = 425 as number;

// Union types
let unionTypes: string | number = 123;
unionTypes = "dfgd";

//more can be added the Type Varialbe for union types:
type OwnSN = string | number;

let ownType: OwnSN = "df";
ownType = 123;

//check the type in runtime
if(typeof ownType === "number") {
    let cost: string = ownType;
}

// to make varialbe could be different type, use:
// let originalConst: any = "dfg";
// originalCost = 123;

//JavaScript types
// String
// Boolean
// NUmber
// BigInt
// Null
// Underfined
// Symbol(ES6)
// Object


// Declare return value for TypeScript lambda fucntion.
function getInventoryItem(trackingNumber: string): InventoryItem  {
    return null;
}

function saveInventoryItem(item: InventoryItem): void {
    
}

//define an Enum
enum InentoryItemType {
    Computer,
    Furniture
}


//Interfaces lives to give more information about the code, find more mistakes.
interface InventoryItem {
    displayName: string;
    inventoryType: InentoryItemType;
    //or inventoryType: "computer" | "furniture",
    // readonly property means that this property can't be updated
    readonly trackingNumber: string;
    createDate: Date;
    // ? means, that this value can be null
    originalConst?: number;

    addNote?: (note: string) => string;
}

let inventoryItem = getInventoryItem(trackingNumber);


inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);

//also, can be used {} object instead of the interface:
saveInventoryItem( {
    displayName: "HP",
    inventoryType: InentoryItemType.Computer,
    //or inventoryType: "computer" | "furniture",
    trackingNumber: "DLFKGDFG",
    createDate: new Date()
})

//the way to watch the errors on the complite: "tsc -w"
