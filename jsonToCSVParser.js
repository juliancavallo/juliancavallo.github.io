export function parseToJSON(csv){
    var lines=csv.split("\r\n");
    
    var result = {
        header: "",
        values: []
    };

    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        if(i == 0)
            result.header = line;
        else
            result.values.push(line.substring(1, line.length-1));   
    }   
    
    return result;
}