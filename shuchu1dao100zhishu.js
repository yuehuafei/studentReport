/**
 * Created by xxx on 17-7-24.
 */
function print() {
    var result=[];
    var flag=1;
    for(var i=2;i<=100;i++){
        for(var j=1;j<i;j++){
                if(i%j==0&&j!=1){
                    flag=0;
                   break;
                }
        }
        if(flag==1){
            result.push(i)
        }
        flag=1;
    }
    return result;
}
function print1(collection,num) {
    var result=[];
    if(num==null){
        return collection[0];
    }
    else if(num<0){
        return [];
    }
    else{
        for(var i=0;i<num;i++){
            result.push(collection[i]);
        }
        return result;
    }
}
console.log(print());
/*
console.log(print1([7,8,9,-2]));
console.log(print1([7,8,9,-2],3));
console.log(print1([7,8,9,-2],-2));*/