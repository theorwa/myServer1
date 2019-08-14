exports.sendRes = function(req, res){
    res.status(200).json({
        error: null,
        error_code: 0,
        success: true,
        data: res.locals
    });
}

exports.sendData = function(res, data){
    res.status(200).json({
        error: null,
        error_code: 0,
        success: true,
        data: data
    });
}

exports.sendError = function(res, error, error_code = 1, status = 500){
    res.status(status).json({
        error: error,
        error_code: error_code,
        success: false,
        data: null
    });
}