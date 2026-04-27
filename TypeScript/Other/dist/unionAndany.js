"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sub = '1M';
let apiRequestStatus = 'pending';
let airlineSeat;
const orders = ['13', '45', '23', '34'];
// let currentorder;
let currentorder;
for (let order of orders) {
    if (order === '23') {
        currentorder = order;
        break;
    }
    currentorder = "22";
}
console.log(currentorder);
//# sourceMappingURL=unionAndany.js.map