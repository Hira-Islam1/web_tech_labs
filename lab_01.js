console.log("Task:01");
function addition(a,b)
{
    return a+b;
}
console.log(addition(5,6));
console.log(addition(6,8));
console.log("Task:02");
function bitwiseAND(a,b){
    return a&b;
}
function bitwiseOR(a,b){
    return a | b;
}
function bitwiseXOR(a,b){
    return a ^ b;
}
console.log(bitwiseAND(5,3));
console.log(bitwiseOR(5,3));
console.log(bitwiseXOR(5,3));
console.log("task3");
function addUp(a)
{
    let sum = 0;
    for (let i = 1; i <= a; i++) 
    {
    sum = sum + i;
    }
    return sum;

}
console.log(addUp(4));
console.log(addUp(5));
console.log(addUp(10));
console.log("task:4");
function progressBar(a) {
    let filled = Math.floor(a / 10);
    let empty = 10 - filled;
    return "#".repeat(filled) + "-".repeat(empty);
}
console.log(progressBar(10));
console.log(progressBar(40));
console.log(progressBar(49));
console.log(progressBar(100));
console.log("task5");
function minMax(arr){
    let min = Math.min(...arr);
    let max = Math.min(...arr);
    return [min,max];

}
console.log((minMax([1,2,3,4,5])));
console.log((minMax([10,5,12,6,67])));
console.log("task6");
function calculateRepoStats(repos)
{
    let stars=repos.map(function(repo){
        return repo.stars;
    });
    let maxStars = Math.max(...stars);
    let minStars = Math.min(...stars);
    let total = 0;
    for (let i = 0; i < stars.length; i++){
        total = total + stars[i];
    }
    let avgStars = Math.floor(total / stars.length);
    let varianceScore = Math.abs(maxStars - minStars);
    return {
        maxStars: maxStars,
        minStars: minStars,
        avgStars: avgStars,
        varianceScore: varianceScore
    };
}
const repos=[
    { name: 'repo-a', stars: 12 },
    { name: 'repo-b', stars: 45 },
    { name: 'repo-c', stars: 3 }
];
console.log(calculateRepoStats(repos));
console.log("task:7");
function calculateFinalPrice(basePrice, taxRate, discountPercentage) 
{
    let discount = basePrice
    *discountPercentage / 100;
    discount = Math.round(discount * 100) / 100;
   let price = basePrice - discount;
    price = Math.round(price * 100) / 100;
    let tax = price*taxRate / 100;
    tax = Math.round(tax * 100) / 100;
    let finalPrice = price + tax;
    finalPrice = Math.round(finalPrice * 100) / 100;
    let loyaltyPoints = Math.ceil(finalPrice);
    return {
        finalPrice: finalPrice,
        loyaltyPoints: loyaltyPoints
    };
}
console.log(calculateFinalPrice(1000, 10, 20));
console.log("task8");
function paginateData(items,pageNumber,pageSize= 5) {
    let start = (pageNumber - 1)*pageSize;
    let end = start + pageSize;
    let data = items.slice(start, end);
    let totalPages = Math.ceil(items.length / pageSize);
    let hasNext = pageNumber < totalPages;
    let hasPrev = pageNumber > 1;
    return {
        data: data,
        currentPage: pageNumber,
        totalPages: totalPages,
        hasNext: hasNext,
        hasPrev: hasPrev
    };
}
const allProducts = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor',
    'Desk',
    'Chair',
    'Webcam',
    'Headphones'
];
const result = paginateData(allProducts, 2, 3);
console.log(result);