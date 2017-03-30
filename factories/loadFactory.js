scotchApp.factory('LoadFactory', function () {


    function getAllBlokken() {
        var blokkenLocalItems = JSON.parse(localStorage.getItem("blokken"));
        return blokkenLocalItems;
    }
    function getAllStudenten() {
        var studentenLocalItems = JSON.parse(localStorage.getItem("studenten"));
        return studentenLocalItems;
    }
    function getAllDocenten() {
        var docentenLocalItems = JSON.parse(localStorage.getItem("docenten"));
        return docentenLocalItems;
    }

    return {
        getAllBlokken: getAllBlokken,
        getAllStudenten: getAllStudenten,
        getAllDocenten: getAllDocenten
    };
});