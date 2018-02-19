"use strict";
var core_1 = require("@angular/core");
core_1.Injectable();
var CustomerService = (function () {
    function CustomerService() {
    }
    CustomerService.prototype.getCustomers = function () {
        return [
            { "id": 1, "name": "Nirmal" },
            { "id": 2, "name": "krishna" },
            { "id": 3, "name": "Vaithesh" },
            { "id": 4, "name": "Sheik" }
        ];
    };
    CustomerService.prototype.getEmp = function () {
        return [
            { "id": 1, "name": "Nirmal" },
            { "id": 2, "name": "krishna" },
            { "id": 3, "name": "Vaithesh" },
            { "id": 4, "name": "Sheik" }
        ];
    };
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map