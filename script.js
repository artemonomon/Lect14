//1
let user = {
    name: "John",
    years: 30
}

let {name, years: age, isAdmin = false} = user

console.log("name:" + name + " age:"+ age + " isAdmin:" + isAdmin) 

//2
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries){
    let maxName = null
    let maxSalary = 0

    for(const [name, salary] of Object.entries(salaries)){
        if(maxSalary<salary){
            maxSalary = salary
            maxName = name
        }
    }
    
    return maxName;
}

console.log(topSalary(salaries))
  