function checkForSpam(message){
    const messageToLower = message.toLowerCase();
    if( messageToLower.includes("spam") || messageToLower.includes("sale")){
        return true;
    } else {
        return false;
    }
}