var employee = {
    id: 10001,
    greet: function () {
        var self = this;
        setTimeout(function () {
            console.log("employee[id] = " + self.id);
        }, 1000);
        setTimeout(function () { return console.log("employee[id1] = " + self.id); }, 1000);
    }
};
employee.greet();
//# sourceMappingURL=lesson9.js.map