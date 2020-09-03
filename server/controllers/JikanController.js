const axios = require('axios');

class JikanController {
    static getJikan(req, res, next) {

        //params q: Input from client
        const params = 'naruto'

        axios({
            method: 'get',
            url: 'https://api.jikan.moe/v3/search/anime',
            params: {
                q: params
            }
        })
            .then(response => {
                console.log(response.data.results)
                return res.status(200).json(response.data.results)
            })
            .catch(err => {
                console.log(err)
                return res.status(400).json({message: 'bad request!'})
            })
    }
}

module.exports = JikanController