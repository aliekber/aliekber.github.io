scotchApp.filter("blokNaamFilter", function () {
    return function (blokNaam) {
        return "Blok " + blokNaam;
    }
});