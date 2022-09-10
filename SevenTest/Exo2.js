//Pensez à changer le path utilisé pour lire le fichier dans readFile

var fs = require('fs');
fs.readFile('/Users/msaber/Downloads/first-technical-test-medium-main/annexe.txt', function (err, data) {
    if (err) throw err;
        var lines = data.toString().split("\n")
        for (let i=0; i<lines.length; i++){
            if (lines[i].length < 6 && lines[i].length !== 0){
                for (let j=0; j<lines.length; j++){
                    if (lines[j].length < 6 && lines[j].length !== 0){
                        var all = lines[i]+lines[j]
                        if (lines.indexOf(all.toString()) !== -1){
                            if (data.includes(all) && all.length === 6){
                                if (lines[lines.indexOf(all.toString())].length === 6){
                                    console.log(lines[i]+ " + " +lines[j]+ " = " +lines[i]+lines[j])
                                }
                            }
                        }
                    }
                }
            }
        }
  });