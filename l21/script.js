const radius=[3,1,2,4];

const area=function (radius){
    return Math.PI*radius*radius;
}

const circumference=function (radius){
    return 2*Math.PI*radius;
};

const diameter=function (radius){
    return 2*radius;
}

Array.prototype.calculate=function (logic){
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
};

console.log(radius.map(area));

console.log(radius.calculate(area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));