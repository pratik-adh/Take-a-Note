const yargs = require('yargs')

// here notes, is now containing two property from 
// notes.js file, so we can term it as an object
const notes = require('./notes.js')

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
    handler: function(argv) {
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
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'read',
    describe:'Read a note',
    handler: function(){
        console.log('Reading a note!')
    }
})
yargs.command({
    command:'list',
    describe:'List a note',
    handler: function(){
        console.log('List out all the notes!')
    }
})
yargs.parse()