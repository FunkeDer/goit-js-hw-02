function formatMessage(message, maxLength){
    if(message.length <= maxLength){
        console.log(message);
    }else if (message.length > maxLength){
       console.log(message.slice(0, message.length) + "..."); 
    }
}