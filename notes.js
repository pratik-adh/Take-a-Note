const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your Notes...'
}

const addNote = (title,body) =>{
    const notes = loadNotes()
    //Array filter method to check whether
    //the JOSN contains duplicate data or not

    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)  

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    }else{
        console.log('Note Title Taken')
    }

    // if(duplicateNotes.length === 0){ // if duplicate data are not found
    //     //pushing object with title and body in json file
    //     notes.push({
    //         title: title,
    //         body: body
    //     })
    //     saveNotes(notes)
    //     console.log('New note added')
    // }else{
    //     console.log('Note Title Taken')
    // }
    
}
//now we need to save the notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const NotestoKeep = notes.filter((notes) => notes.title !== title)

    if(notes.length > NotestoKeep.length){ // if duplicate data are not found
        //pushing object with title and body in json file
        
        console.log(chalk.green('Note Removed'))
    }else{
        console.log(chalk.red('Note not found'))
    }
    saveNotes(NotestoKeep)
}
const listNotes = function(){
    const notes = loadNotes()
    
    notes.forEach((note) => {
        console.log(note.title)
    })
}
const readNotes = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.red(note.title))
        console.log(note.body)
    }else{
        console.log('Note not found.')
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}
