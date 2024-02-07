self.onmessage = function(message)
{
    let fact = 1;
    for (i=message.data;i>0;i--)
    {
        fact = fact * i
    }
    self.postMessage(fact)
}