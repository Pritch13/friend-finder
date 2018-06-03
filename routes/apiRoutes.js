var friendsData = require("../app/data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);

        let numberArrayInput = req.body.score.map(Number); // Users input score array
        var compareVal = 200;
        var matchName;
        var matchPic;

        for (let n = 0; n < friendsData.length - 1; n++) {

            var numberArrayCompare = friendsData[n].score;
            var totalDifference = 0;

            for (let i = 0; i < numberArrayInput.length; i++) {
                if (numberArrayInput[i] !== numberArrayCompare[i]) {
                    var numA = numberArrayInput[i];
                    var numB = numberArrayCompare[i];
                    totalDifference = totalDifference + Math.abs(numA - numB);
                }
            }
            if (totalDifference < compareVal) {
                compareVal = totalDifference;
                matchName = friendsData[n].name;
                matchPic = friendsData[n].photo;                     
            }
        }
        res.send({status: 'OK', name: matchName, pic: matchPic});        
    });
};