function info (){
"use strict";
let money, time, rashOb, neobr, oneDay;
money =  prompt("Ваш бюджет на месяц?"," ");
time  =   prompt("Введите дату в формате YYYY-MM-DD","YYYY-MM-DD");
rashOb = prompt("Введите обязательную статью расходов в этом месяце"," ");
neobr  =   prompt("Во сколько обойдется?"," ");
oneDay = (money-rashOb)/30;
var appData = {
    money: money,
    time:  time,
    
    expenses : {
        [rashOb] : neobr
    },
    optionalExpenses: {},
    income : [],
    savings : false,

    
};
console.log(appData.expenses);
console.log(appData);
console.log(appData.income);
alert("бюджет на 1 день" + " " + oneDay);
}
info();










