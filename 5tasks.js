//task1 
const transactions1 = [
    { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
    { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
    { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
    // more transactions...
  ];
  // Expected Output:
  // ["Transaction T2: $6500 on 2023-02-20"]
 
  // const w= transactions1.filter((transaction) => {
  //     return (
  //       transaction.amount >= 5000 &&
  //       transaction.category == "Business" &&
  //       transaction.date.startsWith("2023")
  //     );
  //   })
  //   .map((transaction) => {
  //     return `Transaction ${transaction.id}: $${transaction.amount} on ${transaction.date}`;
  //   });
 
  // console.log(w);
 

  console.log(transactions1.filter((transaction) =>transaction.amount > 5000 && transaction.date.startsWith("2023"))
  .map((transaction) =>` Transaction ${transaction.id}: $${transaction.amount} on ${transaction.date} `)
  );

  //task2
 
//   Task 2: Departmental Salary Expenditure
// Description: Calculate the total salary expenditure for each department from an array of departments, each with an array of employees.
// Data:
const departments1 = [
{ name: 'Engineering', employees: [{ salary: 80000 }, { salary: 90000 }] },
{ name: 'Marketing', employees: [{ salary: 60000 }, { salary: 65000 }] },
// more departments...
];
// Expected Output:
// [{ "Engineering": 170000 }, { "Marketing": 125000 }]
 
// const res= departments1.map((department)=>{
//   const sum_sal=department.employees.reduce((acc, employee) => {
//    return acc+employee.salary;
// },0);
// return {[department.name]:sum_sal};
// }
// );
// console.log(res)

console.log(departments1.map((department) =>`${department.name} : ${department.employees.reduce((acc, employee) => acc + employee.salary,0)}`));
 
// Data: Array of departments with employees and their salaries
//task-3
// Task 3: Weather Data Sorting and Structuring
// Description: Sort an array of weather data objects in descending order
//of temperature and restructure the data into an object with dates as keys and temperatures as
// values.
// Data:
const weatherData = [
{ date: '2023-03-01', temperature: 16 },
{ date: '2023-03-02', temperature: 20 },
{ date: '2023-03-03', temperature: 18 },
// more data...
];
// Expected Output:
// { "2023-03-02": 20, "2023-03-03": 18, "2023-03-01": 16 }
 
 
// const y=
//     weatherData.sort((a,b)=>b.temperature-a.temperature)
 
 
// console.log(y.reduce((acc,{date,temperature})=>{
//     acc[date]=[temperature]
//     return acc
 
// },{}

// const transformedData = weatherData.sort((a,b)=>b.temperature-a.temperature)
// .reduce((acc, { date, temperature }) => {
//     acc[date] = temperature;
//     return acc;
//   },{});
 
//   console.log(transformedData);


  const array = weatherData.sort((a, b) => b.temperature - a.temperature).map((wd) => `${wd.date} : ${wd.temperature}`);
  const obj = { ...array };
  console.log(obj);
 
//   Task 4: Analyzing Electronics Products
// Description: From an array of products, find products in the 'Electronics' category with more than
// 50 reviews and a rating of at least 4.0. Calculate the average price of
// these products.
// Data:
const products = [
{ category: 'Electronics', price: 199.99, reviews: 120, rating: 4.5 },
{ category: 'Electronics', price: 89.99, reviews: 80, rating: 3.9 },
{ category: 'Home', price: 49.99, reviews: 30, rating: 4.2 },
// more products...
];
// Expected Output:
// 199.99 // Assuming only one product meets the criteria
 
// const ep=products.filter((product)=>product.category="Electronics"&& product.reviews>50
// &&product.rating>=4.5
// )
// const t=ep.reduce((acc,product)=>{
 
//     return (acc+product.price);
 
// },0)/ep.length;
 
// console.log(t)


console.log(
  products
    .filter((product) => product.reviews > 50 && product.rating >= 4.0)
    .map((product) => product.price)
    .reduce((acc, curr) => acc + curr)
);
 
 
// Task 5: Merging User and Order Data
// Description: Merge two arrays of objects based on a common key ( userId ) to create a new array of objects
// that includes each user's name and their corresponding
// order details.
//Data:
const users = [
{ userId: 'U1', name: 'Alice' },
{ userId: 'U2', name: 'Bob' },
// more users...
];
const orders = [
{ userId: 'U1', orderDetails: 'Order 1 Details' },
{ userId: 'U2', orderDetails: 'Order 2 Details' },
// more orders...
];
// Expected Output:
// [
// { name: 'Alice', orderDetails: 'Order 1 Details' },
// { name: 'Bob', orderDetails: 'Order 2 Details' }
// ]
 
// const arr=[...users,...orders]
// const b=arr.filter((user)=>user.name )
 
// console.log(b.filter((order)=>order.orderDetails))
 
 
// var tmp=[];
// users.map(user=>{
   
//     let abc={}
//     abc=orders.filter((value)=>value.userId==user.userId )
//     console.log(abc)
//     // abc.push(user.name)
//     tmp.push(abc.orderDetails)
//     tmp.push(user.name)
   
   
 
// }
 
// )

const combinedData = users.map((user) => {
  const order = orders.find((order) => order.userId === user.userId);
  return {
    name: user.name,
    orderDetails: order.orderDetails,
  };
});
console.log(combinedData);