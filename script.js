let goal = 53259;
let steps = 0;

if (localStorage.getItem("money") == null){
    localStorage.setItem("money", "0");
}

let rounded = function(number){
    return +number.toFixed(2);
}


function render(){
    let procent = rounded(Number(localStorage.getItem("money"))/goal*100);
    let money = localStorage.getItem("money")
    let a = goal-money;
    let x = 100-procent;
    document.title = "Соброно денег: "+money+" это "+procent;
    document.querySelector("p").innerHTML = procent+"%"
    document.getElementById("barcolor").style.width=procent+"%";
    document.querySelector(".mf").innerHTML = "Цель: "+goal+" рублей. Денег собрано: "+money
    document.querySelector(".nf").innerHTML = "Осталось: "+a+" рублей и "+x+"% "

}

render()

document.querySelector(".add").addEventListener("click", ()=>{
    let getMoney = Number(prompt());
    localStorage.setItem("money", Number(localStorage.getItem("money"))+getMoney)
    render()
})

document.querySelector(".decrease").addEventListener("click", ()=>{
    let getMoney = Number(prompt());
    localStorage.setItem("money", localStorage.getItem("money")-getMoney)
    render()
})