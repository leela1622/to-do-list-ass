//declaration
let inputtext=document.getElementById("inputtext");
let addbtn=document.getElementById("add");
let notes=document.getElementById("notes");
//add click event
addbtn.addEventListener("click",()=>{
    let noteslist=inputtext.value;
    if(noteslist){
       inputtext.value="";
        //create element in ul
    let li= document.createElement('li');
    let span =document.createElement('span');
    let deletebtn=document.createElement('button');
       //declaration
    span.textContent=noteslist
    deletebtn.textContent="delete"
    //span style with click event
    span.addEventListener("click",()=>{
      span.style.textDecoration='line-through'
    })
    //store in li
    li.append(span,deletebtn);
    //store in ul
  notes.appendChild(li)
    //delete click event
      deletebtn.addEventListener("click",()=>{
        li.remove();
      })
      //text focus
      inputtext.focus();
    }
    
})
