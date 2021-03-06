console.log("Welcome to notes website.")

//if user add note, add the note to the local storage.
let addBtn = document.getElementById("addBtn").addEventListener("click", function (e) {
    showNotes();
    let addTxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = " ";
    console.log(notesObj)
    showNotes();
})

//to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = " ";
    //notesObj is an array
    notesObj.forEach(function (element,index) {
        html += `
        <div class=" noteCard mx-2 my-2 card" style="width: 18rem; background-color: pink">

        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>
        `;
    });
    let notesel = document.getElementById("notes")
    if (notesObj.length != 0) {
        notesel.innerHTML = html;
    }
    else{
        notesel.innerHTML=`Nothing to show.`
    }

}

//function to delete node
function deleteNode(index){
    //console.log("deleting",index)
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search=document.getElementById("searchTxt")
search.addEventListener("input",function(){
    //console.log("input")
    inputVal=search.value.toLowerCase();

    let noteCards=document.getElementsByClassName("noteCard")
    Array.from(noteCards).forEach(function(element){
        let cardTxt=document.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";

        }
        else{
            element.style.display="none";
        }
    })

})