// // alert('welcome to DCI');

// function showhide(){
//     if (document.getElementById('img').style.display=='block'){
//         document.getElementById('img').style.display='none';
//         document.getElementById('showhide').innerHTML='show'
//     }
// else {
//     document.getElementById('img').style.display='block'
//     document.getElementById('showhide').innerHTML='hide'
// }
// }
function changestyle(){
        newborder='50px';
        document.body.style.background='lightgray';
        document.getElementById('first').style.background='lightblue';
        document.getElementById('first').style.borderRadius=newborder;
        document.getElementById('first').style.color='red';
        document.getElementsByid("j").style.background='red';
        var newwidth="200px";
        var welcome='welcome to DCI'; 
       
        document.getElementById('first').innerHTML=welcome;
        
}
function changelanguage(){
    var wilkommen='wilkommen bei DCI';

        document.getElementById('first').innerHTML=wilkommen;
}
function welcome(fname,lname){
    var wilkommen='wilkommen bei DCI';
    document.getElementById('first').innerHTML=wilkommen+' ' +fname+' '+lname;
}