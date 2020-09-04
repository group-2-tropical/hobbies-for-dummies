const axios = require('axios');

class JikanController {
    static async get(req, res, next) {
        try{
            if (['anime', 'manga'].includes(req.params.type)) {
                let response = await axios({
                    method: 'get',
                    url: `https://api.jikan.moe/v3/search/${req.params.type}`,
                    params: {
                        q: req.query.name
                    }
                })

                return res.status(200).json(response.data.results)
            } else {
                throw { code: 400, message: "Bad request" }
            }
        }catch(err){
            return next(err)
        }
    }

    static async getOne(req, res, next){
        try {
            if (['anime', 'manga'].includes(req.params.type)) {
                let response = await axios({
                    method: 'get',
                    url: `https://api.jikan.moe/v3/${req.params.type}/${req.params.mal_id}`,
                    params: {
                        q: req.query.name
                    }
                })

                return res.status(200).json(response.data.results)
            } else {
                throw { code: 400, message: "Bad request" }
            }
        } catch (err) {
            return next(err)
        }
    }
}

module.exports = JikanController