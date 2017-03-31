scotchApp.controller('docentenController', function ($scope, LoadFactory) {
    // create a message to display in our view
    var docentenLocalItems = LoadFactory.getAllDocenten();
    var blokkenLocalItems = LoadFactory.getAllBlokken();

    if (blokkenLocalItems != undefined && blokkenLocalItems.length > 0) {
        $scope.blokken = blokkenLocalItems;
    }

    if (docentenLocalItems != undefined && docentenLocalItems.length > 0) {
        $scope.docenten = docentenLocalItems;
    }
    else {
        $scope.docenten = [
            { docentnummer: "1", naam: "Pietjes", vakgebied: "Greenfoot", geeft: "A" },
            { docentnummer: "2", naam: "Kees", vakgebied: "Java", geeft: "B" },
            { docentnummer: "3", naam: "Willen", vakgebied: "C#", geeft: "C" },
            { docentnummer: "4", naam: "Henk", vakgebied: "Java", geeft: "D" },
            { docentnummer: "5", naam: "Vincent", vakgebied: "Applicatiebeheer", geeft: "E" },
            { docentnummer: "6", naam: "Arno", vakgebied: "Prince2", geeft: "F" },
            { docentnummer: "7", naam: "Dominic", vakgebied: "vakgebied", geeft: "G" },
            { docentnummer: "8", naam: "Ad", vakgebied: "AngularJS", geeft: "H" },
            { docentnummer: "9", naam: "Rob", vakgebied: "Onderzoek", geeft: "I" }
        ];
        localStorage.setItem("docenten", JSON.stringify($scope.docenten));
    }

    $scope.deleteItem = function (item) {

        var deleteIndex = -1;
        $scope.docenten.forEach(function (e, i) {
            if (e.docentnummer === item.docentnummer) {
                deleteIndex = i;
            }
        });

        $scope.docenten.splice(deleteIndex, 1);

        localStorage.setItem("docenten", JSON.stringify($scope.docenten));
    };

    $scope.saveNewItem = function () {
        console.log($scope.newItem);

        $scope.docenten.push({
            docentnummer: $scope.newItem.docentnummer,
            naam: $scope.newItem.naamDocent,
            vakgebied: $scope.newItem.vakgebied,
            geeft: $scope.newItem.geeftBlok
        });

        $scope.newItem = {};

        localStorage.setItem("docenten", JSON.stringify($scope.docenten));
    };

    $scope.updateItem = function (item) {
        item.updating = false;

        localStorage.setItem("docenten", JSON.stringify($scope.docenten));
    };
});