let getBonus = function(value = 11, tax = value*0.1 , salary = 1){
    console.log(value + tax);
    console.log(arguments.length);
}
getBonus();
getBonus(60);
getBonus(20,40);
getBonus(40,40,10);