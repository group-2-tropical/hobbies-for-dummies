const axios = require('axios');

class PixabayController{
    static getPixabay(req, res, next) {
        const apiKey = '18163304-cf74430c3b1fc3220e9f1c400'
        const url = `https://pixabay.com/api/?key=${apiKey}`

        axios({
            method: 'get',
            url: 'https://pixabay.com/api/',
            params: {
                key: apiKey
            }
        })
            .then(response => {
                console.log(response.data.hits)
                return res.status(200).json(response.data.hits)
            })
            .catch(err => {
                console.log(err)
                return res.status(400).json({message: 'bad request!'})
            })

    }  
}

module.exports = PixabayController
