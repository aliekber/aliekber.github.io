describe("Filter: blokNaamFilter", function () {
    var filter;

    beforeEach(function () {
        //  WORDT VOOR ELKE TEST UITGEVOERD
        module("scotchApp");
        inject(function ($filter) {
            filter = $filter;
        });
    });


    it("should add BLOK to input A must result in Blok A", function () {
        var input = "A";

        var output = filter("blokNaamFilter")(input);

        expect(output).toBe("Blok A");
    });

    it("should add BLOK to input B must not result in only B", function () {
        var input = "B";

        var output = filter("blokNaamFilter")(input);

        expect(output).not.toBe("B");
    });
});