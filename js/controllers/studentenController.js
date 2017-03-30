scotchApp.controller('studentenController', function ($scope, LoadFactory) {

    var studentenLocalItems = LoadFactory.getAllStudenten();
    var blokkenLocalItems = LoadFactory.getAllBlokken();
    var docentenLocalItems = LoadFactory.getAllDocenten();

    if (blokkenLocalItems != undefined && blokkenLocalItems.length > 0) {
        $scope.blokken = blokkenLocalItems;
    }

    if (docentenLocalItems != undefined && docentenLocalItems.length > 0) {
        $scope.docenten = docentenLocalItems;
    }

    if (studentenLocalItems != undefined && studentenLocalItems.length > 0) {
        $scope.studenten = studentenLocalItems;
    }
    else {
        $scope.studenten = [
            { studentnummer: "1", naam: "Klaas", adres: "Dorpstraat 33" },
            { studentnummer: "2", naam: "Klaas", adres: "Dorpstraat 33" },
            { studentnummer: "3", naam: "Klaas", adres: "Dorpstraat 33" },
            { studentnummer: "4", naam: "Klaas", adres: "Dorpstraat 33" },
            { studentnummer: "5", naam: "Klaas", adres: "Dorpstraat 33" },
            { studentnummer: "6", naam: "Klaas", adres: "Dorpstraat 33" },
            { studentnummer: "7", naam: "Klaas", adres: "Dorpstraat 33" },
            { studentnummer: "8", naam: "Klaas", adres: "Dorpstraat 33" },
            { studentnummer: "9", naam: "Klaas", adres: "Dorpstraat 33" }
        ];
        localStorage.setItem("studenten", JSON.stringify($scope.studenten));
    }

    $scope.deleteItem = function (item) {

        var deleteIndex = -1;
        $scope.studenten.forEach(function (e, i) {
            if (e.studentnummer === item.studentnummer) {
                deleteIndex = i;
            }
        });

        $scope.studenten.splice(deleteIndex, 1);

        localStorage.setItem("studenten", JSON.stringify($scope.studenten));
    };

    $scope.saveNewItem = function () {
        console.log($scope.newItem);

        $scope.studenten.push({
            studentnummer: $scope.newItem.studentnummer,
            naam: $scope.newItem.naam,
            adres: $scope.newItem.adres,
            volgt: $scope.newItem.volgt,
            slb: $scope.newItem.slb
        });

        $scope.newItem = {};

        localStorage.setItem("studenten", JSON.stringify($scope.studenten));
    };

    $scope.updateItem = function (item) {
        item.updating = false;

        localStorage.setItem("studenten", JSON.stringify($scope.studenten));
    };
});