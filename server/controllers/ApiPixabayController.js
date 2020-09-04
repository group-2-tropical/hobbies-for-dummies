const axios = require('axios')
const key = process.env.PIXABAY_API_KEY

class PixabayController{
    static async getPixabay(req, res, next) {
        try{
            let result = await axios({
                method: 'get',
                url: 'https://pixabay.com/api/',
                params: {
                    key: key
                }
            })
    
            return res.status(200).json(result.data.hits)
        }catch(err){
            next(err)
        }

    }  
}

module.exports = PixabayController
