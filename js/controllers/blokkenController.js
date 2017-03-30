scotchApp.controller('blokkenController', function ($scope, LoadFactory) {

    var blokkenLocalItems = LoadFactory.getAllBlokken();

    if (blokkenLocalItems != undefined && blokkenLocalItems.length > 0) {
        $scope.blokken = blokkenLocalItems;
    }
    else {
        $scope.blokken = [
            { periode: "A", jaar: 2010, omschrijving: "Greenfoot" },
            { periode: "B", jaar: 2010, omschrijving: "Java applicatie" },
            { periode: "C", jaar: 2011, omschrijving: "C# webshop" },
            { periode: "D", jaar: 2011, omschrijving: "PackMan" },
            { periode: "E", jaar: 2011, omschrijving: "Applicatiebeheer" },
            { periode: "F", jaar: 2012, omschrijving: "Prince2" },
            { periode: "G", jaar: 2012, omschrijving: "Databases" },
            { periode: "H", jaar: 2013, omschrijving: "AngularJS" },
            { periode: "I", jaar: 2013, omschrijving: "Onderzoek" }
        ];
        localStorage.setItem("blokken", JSON.stringify($scope.blokken));
    }

    $scope.deleteItem = function (item) {

        var deleteIndex = -1;
        $scope.blokken.forEach(function (e, i) {
            if (e.periode === item.periode) {
                deleteIndex = i;
            }
        });

        $scope.blokken.splice(deleteIndex, 1);

        localStorage.setItem("blokken", JSON.stringify($scope.blokken));
    };

    $scope.saveNewItem = function () {
        console.log($scope.newItem);

        $scope.blokken.push({
            periode: $scope.newItem.periode,
            jaar: $scope.newItem.jaar,
            omschrijving: $scope.newItem.omschrijving
        });

        $scope.newItem = {};

        localStorage.setItem("blokken", JSON.stringify($scope.blokken));
    };

    $scope.updateItem = function (item) {
        item.updating = false;

        localStorage.setItem("blokken", JSON.stringify($scope.blokken));
    };
});