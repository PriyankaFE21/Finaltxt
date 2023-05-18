const elements = document.querySelectorAll(".btns");
elements.forEach(elem =>{
    elem.addEventListener("click",()=>{
let command = elem.dataset ["element"];

 if(command === "createLink")
 {
    let url= prompt('Enter the link here');
    document.execCommand(command,false,url);
 }
 else if(command==="formatBlock"){
   let formattingvalue = elem.dataset["block"];
   document.execCommand(command,false,formattingvalue);
 }
 else {
    document.execCommand(command,false,null);
 }
    });
});

var editable = document.getElementById("editbox");
var button = document.getElementById("code");
function codeopen(){
  editable.classList.add("code1");
}
////headings and para(h1 to h6 ,p)////
function formatDoc(cmd, value=null) {
	if(value) {
		document.execCommand(cmd, false, value);
	} else {
		document.execCommand(cmd);
	}
}

//insert image from the local storage
const input = document.querySelector(".filechose")
input.addEventListener('change',function(e){
console.log(input.files)
//api to read the files
const reader = new FileReader()
//once reader finishes reading it will load
reader.onload = function(){

   const img = new Image()
   img.src = reader.result;
   document.getElementById("editbox").appendChild(img)
}
//to read the file as text
//reader.readAsText(input.files[0])
reader.readAsDataURL(input.files[0])   //it will read the data as base 64(for images)
},false)

var btns1 = document.querySelectorAll(".btn_active");
btns1.forEach( a=>{
  a.addEventListener("click",()=>{
  a.classList.toggle("active1");
   })
})
//poll button
 var pollButton =document.getElementById('poll-button');
pollButton.addEventListener('click', () => {
    const question = prompt('Enter Poll Question:');
    if (question) {
    const pollElement = document.createElement('div');
    pollElement.classList.add('poll');
    pollElement.innerHTML = `<p>${question}</p>
    <ul>
        <li><input type="radio" name="poll-option" value="Option 1"> Option 1</li>
    <li><input type="radio" name="poll-option" value="Option 2"> Option 2</li>
    <li><input type="radio" name="poll-option" value="Option 3"> Option 3</li>
    </ul>`;
    document.execCommand('insertHTML', false, pollElement.outerHTML);
    }
    });
    //custom button
    const customButton = document.getElementById('custom-button');
    customButton.addEventListener('click', () => {
        const buttonText = prompt('Enter Button Text:');
        const url = prompt('Enter Button URL:');
        if (buttonText && url) {
        const customButtonElement = document.createElement('a');
        customButtonElement.textContent = buttonText;
        customButtonElement.href = url;
        document.execCommand('insertHTML', false, customButtonElement.outerHTML);
        }
        });    