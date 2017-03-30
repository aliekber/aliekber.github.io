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
            { docentnummer: "1", naam: "Pietjes", vakgebied: "Greenfoot" },
            { docentnummer: "2", naam: "Pietjes", vakgebied: "Java" },
            { docentnummer: "3", naam: "Pietjes", vakgebied: "C#" },
            { docentnummer: "4", naam: "Pietjes", vakgebied: "Java" },
            { docentnummer: "5", naam: "Pietjes", vakgebied: "Applicatiebeheer" },
            { docentnummer: "6", naam: "Pietjes", vakgebied: "Prince2" },
            { docentnummer: "7", naam: "Pietjes", vakgebied: "vakgebied" },
            { docentnummer: "8", naam: "Pietjes", vakgebied: "AngularJS" },
            { docentnummer: "9", naam: "Pietjes", vakgebied: "Onderzoek" }
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