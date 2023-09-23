/*import React from "react"
ReactDom.render(<h1>Hello, everyone</h1>, document.getElementById("root"));
ReactDom.render(<ul>
    <li>name</li>
    <li>Age</li>
    
</ul>, getElementById("root"));
 const page=(
    <div>
        <h1 className="hello"
>Hello</h1><bl></bl>
    <p>what do you mean when you nod your head yes but you wanna say no what do you mean?</p></div>
 )
 ReactDom.render(page,document.getElementById("root"));

 const navigation=(<nav>
<h1>Rockstar Shop</h1>
<ul>
<li>Pricing</li>
<li>About</li>
<li>Contact</li>
</ul>

 </nav>)
 document.getElementById("root").append(JSON.stringify(navigation)); 
 */

/*import React from "react"
import ReactDOM from "react-dom"
function TemporaryFunction(){

return(



    <div>
        <img src="./react_logo.png" width="40px"/>
        <h1>Fun facts about react</h1>
        <ul>
            <li>For building complex websites</li>
            <li>It is fun to work with</li>
            <l1>I love JavaScript</l1>
        </ul>
    </div>
)
}

ReactDOM.render(TemporaryFunction, document.getElementById("root"));
*/

/*
function page()
{

return(
<div>
    <header>
<nav>
    <img scr="./react_logo.png" width="40px"></img>
    </nav>
    </header>
    <h1>I am Excited to learn React</h1>
    <ol>
        <li>I love the Way you lie</li>
        <li>I will be a better Person</li>
        <li>What do you mean</li>
        </ol>
        <footer>
           <small> Developed By Soumya SOurav Guha
            All rights Reserved</small>
        </footer>
    
    </div>
)
}
ReactDOM.render(page, document.getElementById(root));

*/

/*
What is a React component?
>>
*A function that returns React Elements.

*Components are independent and reusable bits of code.

*They serve the same purpose as JavaScript functions,
 but work in isolation and return HTML.

*Components come in two types, Class components and Function components.
*/
function Header(){
return(

<header>
<nav className="nav">
    <img className="logo" src="./react_logo.png"></img>
    <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>


    </ul>
    
    </nav>
    </header>

)}
function Footer()
{
    return(<footer>
        <small> Developed By Soumya SOurav Guha
        All rights Reserved</small>
    </footer>)
}

function OrderedList()
{
    
    return(

    <div>
        <h1>I am Excited to learn React</h1>
        <ol>
            <li>I love the Way you lie</li>
            <li>I will be a better Person</li>
            <li>What do you mean</li>
            </ol>
            </div>
    )
}

function Page()
{
<div>
    <Header/>
    <OrderedList/>
    <footer/>
</div>
}