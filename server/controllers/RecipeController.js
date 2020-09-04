const axios = require('axios')

class RecipeController {
    static getRecipe(req, res) {
        axios({
            "method": "get",
            "url": "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3"
        })
            .then((data)=>{
                console.log(data.data.results)
                return res.status(200).json(data.data)
            })
            .catch((error)=>{
              console.log(error)
            })
    }
}

module.exports = RecipeController;