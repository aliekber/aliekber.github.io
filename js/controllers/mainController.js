scotchApp.controller('mainController', function ($scope, LoadFactory) {
    // create a message to display in our view
    var blokkenLocalItems = LoadFactory.getAllBlokken();
    var studentenLocalItems = LoadFactory.getAllStudenten();

    if (blokkenLocalItems != undefined && blokkenLocalItems.length > 0) {
        $scope.blokken = blokkenLocalItems;
    }
    if (studentenLocalItems != undefined && studentenLocalItems.length > 0) {
        $scope.studenten = studentenLocalItems;
    }

});