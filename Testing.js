let array=["item1","item2","item3"];

const listArray=()=>{
    for(let item of array){
        console.log(item);
    };
};

listArray();

let superSample1="common";
let superSample2="rare";
let superSample3="super";

let superArray=[superSample1,superSample2,superSample3];

const listSamples=()=>{
    for(sample of superArray){
        console.log(sample);
    };
};

listSamples();