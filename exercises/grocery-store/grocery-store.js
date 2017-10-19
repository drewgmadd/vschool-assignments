var shopper = {
    name: "Andrew",
    needGroceries: true,
    budget: 75,
    showIfNeedGroceries: function() {
            if (shopper.needGroceries) {
                console.log(true);
            }
        },
    groceryCart: {
        dairy: ["milk", "cheese", "butter"],
        baking: ["flour", "sugar", "salt"],
        snacks: ["chips", "pretzels"],
        vegetables: ["potatoes", "carrots", "onions", "peppers"],
        fruit: ["apples", "bananas", "pears"]
    }

}
console.log(shopper.showIfNeedGroceries());
