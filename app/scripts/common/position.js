var apmApp;
(function (apmApp) {
    (function (Position) {
        Position[Position["pg"] = 0] = "pg";
        Position[Position["sg"] = 1] = "sg";
        Position[Position["sf"] = 2] = "sf";
        Position[Position["pf"] = 3] = "pf";
        Position[Position["c"] = 4] = "c";
    })(apmApp.Position || (apmApp.Position = {}));
    var Position = apmApp.Position;
})(apmApp || (apmApp = {}));
//# sourceMappingURL=position.js.map