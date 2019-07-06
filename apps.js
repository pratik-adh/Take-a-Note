const yargs = require('yargs')
const notes = require('./notes.js')

// here notes, is now containing two property from 
// notes.js file, so we can term it as an object


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
    notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'read',
    describe:'Read a note',
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'List a note',
    handler(){
        notes.listNotes()
    }
})
yargs.parse()
