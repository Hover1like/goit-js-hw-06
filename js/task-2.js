class Storage {
    constructor(items = []){
        this.item = items;
    }

getItems(){
    return this.item;
};

addItem(newItem){
    this.item.push(newItem);
};

removeItem(itemToRemove){
    const remove = this.item.indexOf(itemToRemove)
    this.item.splice(remove, 1)
}};



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
