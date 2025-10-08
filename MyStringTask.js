console.log("ram siya ram");


let str = "RROyAal007 edu";

console.log("Str => " + str);
console.log("Length => " + str.length);


let vowelCounter = 0;
let digitCounter =  0;
str = str.toLowerCase();

for (i = 0; i < str.length; i++) {
    console.log(str[i]);

    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        vowelCounter++;
    }

    if(str[i] >= '0' && str[i] <= '9'){
        digitCounter++;
    }

    //
}

console.log("vowels => "+vowelCounter);
console.log("digits => "+digitCounter);


//count vowels from a string 


