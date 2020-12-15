function sum (x, y){
  return x + y;
}

function basicTree (x){
  if(x<5){
    return true
  }else if (x==5){
    return true
  }else{
    return false
  }
}


module.exports = {
  sum, 
  basicTree
}