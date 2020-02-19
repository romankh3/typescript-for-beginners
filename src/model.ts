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
if(typeof ownType === "string") {
    let cost: string = ownType;
} else {
    let cost: number = ownType;
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
    Computer = "computer",
    Furniture = "furniture"
}


//Interfaces lives to give more information about the code, find more mistakes.
interface InventoryItem {
    displayName: string;
    // inventoryType: InentoryItemType;
    inventoryType: "computer" | "furniture",
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
    inventoryType: InentoryItemType.Furniture,
    //or inventoryType: "computer" | "furniture",
    trackingNumber: "DLFKGDFG",
    createDate: new Date()
})

//the way to watch the errors on the complite: "tsc -w"


// to avoid using some specific type, we can use generics for this purpose.
function clone<T, U>(source: T, oprtions: U): T {
    const serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}

const cloned = clone(inventoryItem, {name: "roman"});

interface Map<K, V> {
    key: K;
    value: V;
}

class HashMap<K, V> implements Map<K, V> {
    key: K;    
    value: V;
    

}

var keyValue: Map<string, string> = { key: "dfg", value: "dfg"}

// declare keyword
declare var Vue: any;

//typescript metadata definitelytyped.org
// search npmjs.com