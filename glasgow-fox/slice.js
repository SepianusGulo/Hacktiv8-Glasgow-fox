
function slice(data, start, end) {
        let output = []
        if(start  ===  undefined || end === undefined){
        return data
        }else if(end  === undefined){
        for (let i = start; i < data.length; i++) {
            output.push(data[i]) 
        }
        }else if(start>data.length){
            output =[]
        }else{
        for (let j = start; j < end; j++) {
            output.push(data[j])
        }
        }
        return output
        }


    console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)) // [ 'camel', 'duck', 'elephant' ]
    console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)) // [ 'camel', 'duck' ]
    console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)) // [ 'bison', 'camel', 'duck', 'elephant' ]
    console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])) //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
    console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)) //[]
    
    module.exports = slice