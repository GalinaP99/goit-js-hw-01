const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  const workers = Object.entries(employees);
  let result = "";
  if (workers.length === 0) {
    return result;
  }
    let bestEmployee = workers[0][1];
    let employeeName = workers[0][0];
    for (const worker of workers) {
        if (worker[1] > bestEmployee) {
            bestEmployee = worker[1];
            employeeName = worker[0];
        }
    }
    return employeeName
    // return {name: employeeName, worker: bestEmployee};
};
//const result = findBestEmployee({});

//console.log('Employee name:', result.name, '| bestEmployee:', result.worker);
// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
console.log(findBestEmployee(developers)); 
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
console.log(findBestEmployee(sellers)); 
// 'lux'  