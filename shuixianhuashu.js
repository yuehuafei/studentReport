/**
 * Created by xxx on 17-7-25.
 */
function shuixainhuashu() {
    for(var i=1;i<=9;i++){
        for(var j=0;j<=9;j++){
            for(var k=0;k<=9;k++){
                if(i*i*i+j*j*j+k*k*k==i*100+j*10+k){
                    console.log(i*100+j*10+k);
                }
            }
        }
    }
}
shuixainhuashu();