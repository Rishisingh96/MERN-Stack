const Middlewarelearn = (req, res, next) => {
    console.log("Hi Rishi how are you ?");
    next();
};

module.exports = Middlewarelearn;
