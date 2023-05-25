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

var btns1 = document.querySelectorAll(".zed_button_icon");
btns1.forEach( a=>{
  a.addEventListener("click",()=>{
  a.classList.toggle("active");
   })
})
// var btns2 = document.querySelector(".zed_button_icon_cb");
// btns2.forEach( b=>{
//   b.addEventListener("click",()=>{
//   b.classList.toggle("active1");
//    })
// })
// var btns2 = document.querySelector(".zed_button_icon_cb");
//  function cbFunction(){
//   btns2.classList.add("active1");
//  }
//poll button
 var pollButton =document.getElementById('poll-button');
pollButton.addEventListener('click', () => {
    const question = prompt('Enter Poll Question:');
    if (question) {
    const pollElement = document.createElement('div');
    pollElement.classList.add('poll');
    pollElement.innerHTML = `<p>${question}</p>
    
        <input type="radio" name="poll-option" value="Option 1"> Option 1<br>
    <input type="radio" name="poll-option" value="Option 2"> Option 2<br>
    <input type="radio" name="poll-option" value="Option 3"> Option 3<br>
    `;
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
//Insert Blockquotes       
       function insertblockquote() {
        var selection = window.getSelection();
        var selectedText = selection.toString();
      
        if (selectedText.length > 0) {
          var range = selection.getRangeAt(0);
          var blockquote1 = document.createElement('blockquote');
          blockquote1.classList.add('blockquote1')
    
          blockquote1.innerHTML = selectedText;
          range.deleteContents();
          range.insertNode(blockquote1);
        } else {
          var blockquote1 = document.createElement('blockquote');
          blockquote1.classList.add('blockquote1')
          blockquote1.innerHTML = '&nbsp;';
          editable.appendChild(blockquote1);
        }
      }
//Insert Pullquotes
       function insertpullquote() {
        var selection = window.getSelection();
        var selectedText = selection.toString();
      
        if (selectedText.length > 0) {
          var range = selection.getRangeAt(0);
          var blockquote2 = document.createElement('blockquote');
          blockquote2.classList.add('blockquote2')
    
          blockquote2.innerHTML = selectedText;
          range.deleteContents();
          range.insertNode(blockquote2);
        } else {
          var blockquote2 = document.createElement('blockquote');
          blockquote2.classList.add('blockquote2')
          blockquote2.innerHTML = '&nbsp;';
          editable.appendChild(blockquote2);
        }
      }
//Insert Code Blocks
      function insertCodeBlock() {
        var selection = window.getSelection();
        var selectedText = selection.toString();
      
        if (selectedText.length > 0) {
          var range = selection.getRangeAt(0);
          var code2 = document.createElement('code');
          code2.classList.add('code2');
      
          code2.textContent = selectedText;
          range.deleteContents();
          range.insertNode(code2);
        } else {
          var code2 = document.createElement('code');
          code2.classList.add('code2');
          code2.innerHTML = '&nbsp;';
          editable.appendChild(code2);
        }
      }
//Tag selection and enter function
      function whichTag(tagName){
        var sel, containerNode;
        var tagFound = false;
        tagName = tagName.toUpperCase();
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount > 0) {
                containerNode = sel.getRangeAt(0).commonAncestorContainer;
            }
         }else if( (sel = document.selection) && sel.type != "Control" ) {
             containerNode = sel.createRange().parentElement();
         }
         while (containerNode) {
             if (containerNode.nodeType == 1 && containerNode.tagName == tagName) {
                 tagFound = true;
                 containerNode = null;
             }else{
                 containerNode = containerNode.parentNode;
             }
         }
         return tagFound;
      }
      function checkBlockquote() {
        editable.onkeydown = function(event) {
          var key = event.keyCode || event.charCode;
          var isShiftKey = event.shiftKey;
          if (whichTag("blockquote")){
            console.log(whichTag("blockquote"))
          if (key === 13 && !isShiftKey) {
            console.log((key === 13 && !isShiftKey),"jhjjh")
            document.execCommand('insertHTML', false, '<br>');
            //document.getElementById('blockquote').classList.add('edit_icons');
          }
        }
        else if(whichTag("code")){
          console.log(whichTag("blockquote"))
          if (key === 13 && !isShiftKey) {
            console.log((key === 13 && !isShiftKey),"jhjjh")
            document.execCommand('insertHTML', false, '<br>');
          }
       }
        };
      
      };