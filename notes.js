const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return 'Your Notes...'
}

const addNote = function(title,body){
    const notes = loadNotes()
    //Array filter method to check whether
    //the JOSN contains duplicate data or not

    const duplicateNotes = notes.filter(function(notes){
        return notes.title === title
    })

    if(duplicateNotes.length === 0){ // if duplicate data are not found
        //pushing object with title and body in json file
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    }else{
        console.log('Note Title Taken')
    }
}
//now we need to save the notes
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const removeNote = function(title){
    const notes = loadNotes()

    const NotestoKeep = notes.filter(function(notes){
        return notes.title !== title
    })

    if(notes.length > NotestoKeep.length){ // if duplicate data are not found
        //pushing object with title and body in json file
        
        console.log(chalk.green('Note Removed'))
    }else{
        console.log(chalk.red('Note not found'))
    }
    saveNotes(NotestoKeep)
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}