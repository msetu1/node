const skills =document.getElementById('list-css');
const li=document.createElement('li')
li.innerText='DOM';
skills.appendChild(li);

// h2 added 
const added =document.getElementById('section');
const h2=document.createElement('h2');
h2.innerText='Hello World';
added.appendChild(h2);

// set innertext directly 
const mainContainer =document.getElementById('main-container');
const web =document.createElement('section')
web.innerHTML=`
<h2>Web-development course</h2> 
<ul>
<li>Front end</li>
<li>back end</li>
<li>Database</li>
</ul>
`;
mainContainer.appendChild(web)

