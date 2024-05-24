
let pro=document.getElementById('pro');
let qota=document.getElementById('Qota');
let sub=document.getElementById('sub');
let name=document.getElementById('ajouter');
let client=document.getElementById('client');
let nam=document.getElementById('nam');
let out=document.getElementById('out');
let dwa


//supermer
function superm(i){
dwa.splice(i,1)
localStorage.setItem('product',JSON.stringify(dwa));
showdata()}
//local stroage system
if (localStorage.product != null){
dwa = JSON.parse(localStorage.product) ;
document.getElementById('out').classList.remove('hide');
document.getElementById('add').classList.add('hide');
x=JSON.parse(localStorage.name)
}else{
dwa =[];
document.getElementById('out').classList.add('hide');
}
//entrer nta3  client
name.onclick= function (){
if(client.value == '' ){
document.getElementById('pup').classList.add('open');
document.getElementById('client').style.borderBottomColor='red'}
else{
x =client.value 
nam.innerHTML =x
document.getElementById('add').classList.add('hide');
document.getElementById('pup').classList.add('hide');
document.getElementById('out').classList.remove('hide');
document.getElementById('blurf').classList.remove('blur');
document.getElementById('blur').classList.remove('blur');
localStorage.setItem('name' ,JSON.stringify(x));}}
//l7seb nta3 dwayet
function ht(){
        if (prix.value != '' && qota.value != ''){
               let  result =  +prix.value *+qota.value;
               
        }       
};
//creer un produit
sub.onclick =function (){

        if(qota.value != '' &&  pro.value !=''  ){
                let newdwa  =  {
                        pro :pro.value,qota:qota.value,     
                        };
                        dwa.push(newdwa); 
                        localStorage.setItem('product',JSON.stringify(dwa));
                        pro.value=''  ;qota.value='' ;
                        showdata();  }else{alert('svp entrer tous les information') }
}
function skt(){
 alert('cette option pas disponible pour le momment')       
}
//read
function showdata(){
        let table =''
        for(let i =0 ; i < dwa.length;i++){
                table +=`
                <tr>
                <td>${i } </td> 
                <td>${dwa[i].pro}</td> 
                <td>base donnes</td> 
                <td>50</td> 
                <td>${dwa[i].qota}</td> 
                <td>07/20/2023</td> 
                <td>base donnes</td> 
                <td>base donnes</td> 
                <td>base donnes</td> 
                <td>base donnes</td> 
                <td>base donnes</td>
                <td>base donnes</td>
                <td><button onclick="superm(${i})" id="sup">Suprmer</button></td>  
               </tr>
                `
               }
               document.getElementById('tbody').innerHTML=table;
        
       if( dwa.length >0){
        document.getElementById('rest').classList.remove('hide');
        document.getElementById('valider').classList.remove('hide')

}else{
        document.getElementById('valider').classList.add('hide')}}

function na() {
let  n =''
for(let i =0 ; i < x.length;i++){
n =`${x} ` }       
document.getElementById('nam').innerHTML=n;}
 //reset all       
 function reset(){
localStorage.clear();
dwa.splice(0);
showdata();
alert('system well be restart');
setTimeout(() => {
window.location.reload(true);}, 0);}
showdata();
na();
//virfier ask kyn data
function vier(){
if(dwa.length <=0){
localStorage.clear()
alert('system well be restart')
setTimeout(() => {
window.location.reload(true);}, 0);}}
 vier()                     



 
      