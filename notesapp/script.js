const addBtn = document.getElementById('add');

//get the items if  exists notes in localStorage
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes){
    notes.forEach(note => addNewNote(note));
}

// Create new note if add button is clicked
addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {

    // Create new note div 
    const note = document.createElement('div');

    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>

        <button class="delete"><i class="fas fa-trash-alt"></i></button>

    </div>

    <div class="main ${text ? "" : "hidden"}"></div>

    <textarea class="main ${text ? "hidden" : ""}"></textarea>
    
    `;

    const editBtn = note.querySelector('.edit');

    const deleteBtn = note.querySelector('.delete');

    const main = note.querySelector('.main');

    const textArea = note.querySelector('textarea');

    textArea.value = text
    
    main.innerHTML = marked(text)

    //delete note if delete button is clicked
    deleteBtn.addEventListener('click', () => {
        note.remove();

        updateLs()

    })

    //edit note if edit button is clicked
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');

        textArea.classList.toggle('hidden');

    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)

        updateLs()
    })

    document.body.appendChild(note);
}

// Update localStorage if there is any change
function updateLs(){

    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))
    

    localStorage.setItem('notes', JSON.stringify(notes))

    JSON.parse(localStorage.getItem('name'))

}