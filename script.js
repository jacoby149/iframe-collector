var pan = 0;
var height = 300;

function repan(v){
    pan = parseInt(v)
    mainFrame.style.top= `${pan}px`
    mainFrame.style.height = `${height-pan}px`
}

function resize(v){
    height = parseInt(v)
    mainFrame.style.height=`${height-pan}px`
}

function changeURL(v){
    mainFrame.src=v
}