const Joke = require("../models/jokes.model")

//Devuelve todos los chistes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allTheJokes => res.json({ jokes: allTheJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//Devuelve un chiste
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//Crear nuevo chiste
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//Actualizar chiste
module.exports.updateExistingJoke = (req, res) =>{
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new:true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

//Borrar chiste
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ results: results }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
