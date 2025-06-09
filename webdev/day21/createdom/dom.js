//create  //<li>TS</ts>-----------

//function attach(content){
//let element = document.createElement('li');
//element.innerHTML=content;

//const element2=document.createElement('li');
//element2.innerHTML=content+"sumit"
//const parent=document.querySelector('ul');
//parent.append(element  ,  element2);


//}
//attach("NODE");
//attach("REACT");


//create a text node----------

//const element1= document.createTextNode("hello coder army");
//const parent1=document.querySelector('ul');
//parent1.append(element1);



//create a attribute nodes--------------
//const element = document.createAttribute("id");
//element.value="major";

//const list=document.querySelector('li');
//list.setAttributeNode(element);
//if 2 elemnt list ka chaiye tha toh----------
//const list =document.getElementById("root");
//list.children[1].setAttributeNode(element);

//accesing attributes----
//const element = document.getElementById('root');
//console.log(element.getAttribute("class"));
//element.removeAttribute("sumit");



//add nodes to the dom
//const parent = document.getElementById('root');

/////const elemnt=document.createElement('li');
//elemnt.innerHTML="ts";

//const child2 =parent.children[1];
//parent.insertBefore(elemnt, child2);
//parent.replaceChild(elemnt, child2);

//using inner html=============

const parent = document.getElementById('root');
//parent.innerHTML+="<li>sumit</li>"

//=====
const element=document.createElement('div');
element.innerHTML="hello coder army";

parent.insertAdjacentElement("beforebegin", element);

//delete node or eleemnt
document.querySelector('li').remove();





