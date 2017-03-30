describe('E2E: docentenController', function () {

    beforeEach(function () {
        browser.get('http://localhost:8080/#/docenten');
    });

    it('Moet een h1 tekst laten zien van de pagina', function () {

        var h1 = element(by.tagName('h1'));
        var h1Text = h1.getText();
        expect(h1Text).toBe("Docenten beheren");
    });

    it('haal alle docenten op', function () {
        var eerst = element.all(by.repeater('docent in docenten | filter: searchTerm track by $index')).count();

        expect(eerst).toBe(9);
    });

    it('Moet een docent toevoegen', function () {
        var eerst = element.all(by.repeater('docent in docenten | filter: searchTerm track by $index')).count();
        element(by.model('newItem.docentnummer')).sendKeys("999");

        element(by.id('form-submit')).click();

        var erna = element.all(by.repeater('docent in docenten | filter: searchTerm track by $index')).count();
        expect(erna).toBe(10);
    });

    it('Moet een docent verwijderen', function () {
        var eerst = element.all(by.repeater('docent in docenten | filter: searchTerm track by $index')).count();
        var button = element.all(by.repeater('docent in docenten | filter: searchTerm track by $index')).get(0);
        button.element(by.css('button[ng-click="deleteItem(docent)"')).click();

        var erna = element.all(by.repeater('docent in docenten | filter: searchTerm track by $index')).count();
        expect(erna).toBe(9);
    });
});