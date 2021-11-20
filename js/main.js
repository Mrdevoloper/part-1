

function informations() {
    var number1 = [];
    var addnum = prompt("Enter the number:");
    number1.push(addnum);
    for (var item of number1) {
        item = Number(item)
        if (isNaN(item) || item <= 0) {
            function numbersAdd(numContent) {
                var result = "";
                for (var ring of numContent) {
                    result = (result) * 1 + (ring) * 1;
                }
                console.log([result]);
                return result
            }
            number1.pop(addnum);
        } else if (item >= 0) {
            var addnum = prompt("Enter the number:");
            number1.push(addnum);
        }
    }
    console.log(numbersAdd(number1));
}
var inputSum = informations();