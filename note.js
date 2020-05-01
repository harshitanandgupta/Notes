const fs=require('fs');
const chalk=require('chalk');

const loadNotes=function(){
    try{
        var dataBuffer=fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer.toString());
    }
    catch{
        return [];
    }

}

const savenotes=function(data){
    fs.writeFileSync('notes.json',JSON.stringify(data));
}

const addnote=function(title,body){
    var notearr=loadNotes();
    var duplicate=notearr.filter((note)=>
         note.title==title)
    if(duplicate.length === 0){
        notearr.push({
            'title':title,
            'body':body
        });
        savenotes(notearr);
        console.log(chalk.green.inverse("Node Added"));

    }
    else
    {
        console.log(chalk.red.inverse("Note title Taken"));
    }
    
}

const removenote=function(title){
    var notearr=loadNotes();
    var newnote=notearr.filter((note)=>
        note.title!=title
    )
    if(newnote.length === notearr.length)
    console.log(chalk.red.inverse("No Note with this title"));
    else{
        savenotes(newnote);
        console.log(chalk.green.inverse("Node Deleted"));
    }

}
 const listNotes =() =>{
    var data=loadNotes();
    console.log(chalk.inverse("Printing All Notes"))
    data.forEach((node,index)=>{
        console.log(chalk.inverse.green(`Note: ${index}`))
        console.log(chalk.blue("Title : ")+chalk(node.title))
        console.log(chalk.blue("Body : ")+chalk(node.body))

    })
 }

 const readNote=(title)  => {
    var data=loadNotes();
    var ele=data.find((e) => {
       return e.title == title
    });
    //console.log(title)
    //console.log(ele)
    if(ele){
        console.log(chalk.blue("Title : ")+chalk(`${ele.title}`))
        console.log(chalk.blue("Body : ")+chalk(`${ele.body}`))
    }
    else{
    console.log(chalk.red.inverse("No Note with this title"));
    }
 }

module.exports={
    addnote:addnote,
    removenote:removenote,
    listNotes:listNotes,
    readNote:readNote
}