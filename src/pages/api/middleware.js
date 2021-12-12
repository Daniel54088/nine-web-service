export const checkUrl = (jsonUrl) => {
    switch (jsonUrl) {
        case null:
        case undefined:
        case '':
        case ' ':

        return {
            status: 400,
            message: "Could not decode request: JSON parsing failed"
        }
    
        default:
        return {
            status: 200,
            jsonUrl
        }
    }
};

export const isJson = (str) =>{
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
