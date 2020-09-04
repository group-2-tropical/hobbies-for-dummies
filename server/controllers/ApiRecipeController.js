const axios = require('axios')

class ApiRecipeController {
    static async get(req, res, next) {
        try{
            let result = await axios({
                "method": "get",
                "url": "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3"
            })

            return res.status(200).json(result.data)
        }catch(err){
            return next(err)
        }
    }
}

module.exports = ApiRecipeController