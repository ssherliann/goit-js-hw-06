class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(newItem) {
        this.items.push(newItem);
    }

    removeItem(itemToRemove) {
        const indexToRemove = this.items.indexOf(itemToRemove);
            this.items.splice(indexToRemove, 1);
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 
storage.addItem("Droid");
console.log(storage.getItems()); 
storage.removeItem("Prolonger");
console.log(storage.getItems()); 
