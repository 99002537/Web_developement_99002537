array1=[iPhone,Samsung,Sony];
array2=[Lenovo,Sony,HP];
array3=[Sony,Samsung,LG];
function funselect(){
    list1 = 'iPhone~Samsung~Sony';
    mobitem = list1.split('~').join(" <br> ");
    list2 = 'Lenovo~Sony~HP';
    laptopitem = list2.split('~').join(" <br> ");
    list3 = 'Sony~Samsung~LG';
    tvitem= list3.split('~').join(" <br> ");
    var selection = document.getElementById("mydevice");
 
    if(selection.value == 'Laptop'){
    document.getElementById("mydiv").innerHTML=mobitem;
    }else if(selection.value == 'TV'){
    document.getElementById("mydiv").innerHTML=laptopitem;
    }else if(selection.value == 'Mobile'){
    document.getElementById("mydiv").innerHTML=tvitem;
    }else{
    document.getElementById("mydiv").innerHTML="";
     }
    }