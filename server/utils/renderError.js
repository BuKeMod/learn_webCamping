const renderError = (code, message) => {
    const error = new Error(message)
    error.statusCode = code
    console.log(error);
    
    throw error
    

}


export default renderError