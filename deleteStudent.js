
/**
 * Created by xxx on 17-7-25.
 */
'use strict';
function deleteRow(event){
    if(event.srcElement.tagName=='td'){
        var curRow=event.srcElement.parentElement;
        curRow.style.background="red";
    }
    var tab=document.getElementById("tab");
    var answer=confirm("是否删除选中行？");
    if(answer==true){
        //   localStorage.removeItem(curRow.firstElementChild.value);
        tab.deleteRow(curRow);
    }
    else{

    }
}