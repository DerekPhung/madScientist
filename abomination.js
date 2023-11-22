console.log("this is stupid");
document.head.innerHTML += `
    <title>Does this work?</title>
    <style id="somethingElse">
        #box{
            border: 3px solid black;
            height: 300px;
            width: 300px;
            text-align: center;
        }

        body{
            background-color: cyan;
        }

        #button{
            border-radius: 5px;
        }
    </style>    
`;

document.body.innerHTML += `
    <div id="box">This is the power of JavaScript!!
        <button id="button" onclick="btnAction()">Submit</button>
        <button id="button" onclick="styleManipulation()">Style Change</button>
        <button id="button" onclick="protectTheButtons()">True Priority</button>

        <input id="userManipulation"/>
    </div>
    
`;

function btnAction(){
    document.head.innerHTML = `
        <style id="somethingElse">
            body{
                background-color: purple;
            }
            
        </style>
    `;
}

function styleManipulation(){
    let color = document.getElementById("userManipulation").value;
        document.getElementById("somethingElse").innerHTML = `
        body{
            background-color: ${color};
        }
    `;
}

function protectTheButtons(){
    let color = document.getElementById("userManipulation").value;
    document.body.style.backgroundColor = color;
}