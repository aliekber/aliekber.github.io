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
            { studentnummer: "1", naam: "Piet", adres: "Dorpstraat 33", volgt: "A", slb: "Arno" },
            { studentnummer: "2", naam: "Klaas", adres: "Dorpstraat 33", volgt: "B", slb: "Rob" },
            { studentnummer: "3", naam: "Jan", adres: "Dorpstraat 33", volgt: "C", slb: "Dominic" },
            { studentnummer: "4", naam: "Willem", adres: "Dorpstraat 33", volgt: "D", slb: "Henk" },
            { studentnummer: "5", naam: "Kevin", adres: "Dorpstraat 33", volgt: "C", slb: "Arno" },
            { studentnummer: "6", naam: "Robert", adres: "Dorpstraat 33", volgt: "F", slb: "Klaas" },
            { studentnummer: "7", naam: "Ashwin", adres: "Dorpstraat 33", volgt: "A", slb: "Willem" },
            { studentnummer: "8", naam: "Tamim", adres: "Dorpstraat 33", volgt: "B", slb: "Dominic" },
            { studentnummer: "9", naam: "Sha", adres: "Dorpstraat 33", volgt: "B", slb: "Rob" }
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