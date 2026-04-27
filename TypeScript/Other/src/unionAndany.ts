let sub: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

let airlineSeat: 'aisle'

const orders = ['13','45','23', '34']

// let currentorder;
let currentorder:string | undefined;

for(let order of orders){
    if(order === '23'){
        currentorder = order
        break
    }
    currentorder = "22";
}
console.log(currentorder)