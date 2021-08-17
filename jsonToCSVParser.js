export function parseToJSON(csv){
    csv = csv.replace('\"<p>','<p>').replace('</p>\"','</p>');
    var lines=csv.split("\r\n");
    
    var result = [];
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let splittedLine = line.split(",");
    
        const key = splittedLine[0];
        const value = splittedLine.slice(1).join(",");
        
        const obj = {
            "key": key,
            "value": value
        }
        result.push(obj);
    }   
    
    return result;
}