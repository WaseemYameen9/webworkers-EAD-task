const worker = new Worker('worker.js')
const bgButton = document.querySelector('#bgbutton')
const sumButton = document.querySelector('#sumbutton')

bgButton.addEventListener('click',(event)=>{
    if(document.body.style.backgroundColor == "green")
    {
        document.body.style.backgroundColor = "blue"
    }
    else
    {
        document.body.style.backgroundColor = "green"
    }
    console.log(data)
})

worker.onmessage = function(message)
{
    alert(message.data)

}

sumButton.addEventListener('click',(event)=>{
    worker.postMessage(document.getElementById('inputData').value)
})