

function get(num){
    var result=document.getElementById("result")
    result.value +=num
}

function clear(){
    var result=document.getElementById("result")
    result.value = ""
}

function result(){
    var result=document.getElementById("result")
    result.value=eval(result.value)
}
