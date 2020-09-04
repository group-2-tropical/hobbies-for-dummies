const errHandler = (err, req, res, next) => {
    let code = 500
    let msgs = []

    console.log(err);

    if(err.name){
        switch(err.name){
            default:
                msgs.push(err.msg)
            break
        }
    }else if(err.code){
        switch(err.code){
            //
        }
    }

    res.status(code).json({ msgs })
}

module.exports = errHandler