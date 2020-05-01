const chalk=require('chalk');
const yargs=require('yargs');
const fs=require('fs')
const note=require('./note.js');

/*var msg=chalk.italic.blue('I am blue');
console.log(msg);
msg=chalk.bold.inverse('I am blue');
console.log(msg);*/

//console.log(yargs.argv);

//yargs.version('1.1.0').parse();

yargs.command({
    command:'add',
    describe:'Used to add',
    builder:{
        title :{
            describe:"Shows the title",
            demandOption:true,
            type:'string'
        },
        body :{
            describe:"Shows the body",
            demandOption:true,
            type:'string'
        }
    },
    handler:function(){
        note.addnote(yargs.argv.title,yargs.argv.body);
    }
});


yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title :{
            describe:"Shows the title",
            demandOption:true,
            type:'string'
        }
    },
    handler: function () {
        note.removenote(yargs.argv.title)
    }
});
yargs.command({
    command:'list',
    describe:'Lists all notes',
    handler() {
        note.listNotes();
    }
})
yargs.command({
    command:'read',
    describe:'Reads that note',
    builder:{
        title :{
            describe:"Shows the title",
            demandOption:true,
            type:'string'
        }
    },
    handler() {
        note.readNote(yargs.argv.title);
    }
})

yargs.parse();


/*var dataBuffer=fs.readFileSync('./info.json');
var data=JSON.parse(dataBuffer.toString());
data.name="Harshit";
data.year="2020";
fs.writeFileSync('info.json',JSON.stringify(data));
/*const fs= require('fs');
const validator=require('validator');
fs.writeFileSync('sample.txt',"I was created using Node js");
fs.appendFileSync('sample.txt',"I am added from node js");
console.log("Hello I am working");
console.log(validator.isEmail());*/