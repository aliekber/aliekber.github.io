describe("Datafactory check the data", function () {
    var LoadFactory;
    var blokken;
    beforeEach(function () {

        module("scotchApp");

        inject(function ($injector) {
            LoadFactory = $injector.get("LoadFactory");
        });
    });
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it("Nadat de blokkenController is ingeladen, moeten er blokken in de localstorage staan", function () {
        var $scope = {};
        var controller = $controller('blokkenController', { $scope: $scope });
        expect(LoadFactory.getAllBlokken()).not.toBeNull();
    });

    it("Nadat de studentenController is ingeladen, moeten er studenten in de localstorage staan", function () {
        var $scope = {};
        var controller = $controller('studentenController', { $scope: $scope });
        expect(LoadFactory.getAllStudenten()).not.toBeNull();
    });

    it("Nadat de docentenController is ingeladen, moeten er docenten in de localstorage staan", function () {
        var $scope = {};
        var controller = $controller('docentenController', { $scope: $scope });
        expect(LoadFactory.getAllDocenten()).not.toBeNull();
    });

    it("Nadat de blokkenController is ingeladen, moeten er blokken 9 blokken aanwezig zijn", function () {
        var $scope = {};
        var controller = $controller('blokkenController', { $scope: $scope });
        expect(LoadFactory.getAllBlokken().length).toBe(9);
    });

    it("Geselecteerde blok in de overzicht van blokken komt overeen met D, 2011 en packman", function () {
        var $scope = {};
        var controller = $controller('blokkenController', { $scope: $scope });
        expect(LoadFactory.getAllBlokken()[3].periode).toBe("D");
        expect(LoadFactory.getAllBlokken()[3].jaar).toBe(2011);
        expect(LoadFactory.getAllBlokken()[3].omschrijving).toBe("PackMan");
    });

    it("toevoegen van een student", function () {
        var $scope = {};
        var controller = $controller('studentenController', { $scope: $scope });
        var beforeCount = LoadFactory.getAllStudenten().length;
        $scope.studenten.push({
            studentnummer: "11",
            naam: "11"
        });

        expect($scope.studenten.length).toBe(beforeCount + 1);
    });

    it("verwijderen van een student", function () {
        var $scope = {};
        var controller = $controller('studentenController', { $scope: $scope });
        var teverwijderenStudentnr = $scope.studenten[0].studentnummer;
        console.log(teverwijderenStudentnr);
        
        var deleteIndex = -1;
        $scope.studenten.forEach(function (e, i) {
            if (e.studentnummer === teverwijderenStudentnr) {
                deleteIndex = i;
            }
        });

        $scope.studenten.splice(deleteIndex, 1);

        expect($scope.studenten[0].studentnummer).not.toBe(teverwijderenStudentnr);
    });
});