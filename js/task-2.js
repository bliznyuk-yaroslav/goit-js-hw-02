'use strict';
formatMessage(message, maxLength){
    const messageLen = message.length
    if(messageLen>=maxLength){
        return message;
    }
    else{
        const res = string.slice(0, maxLength)+"...";
        return res;

    }
}