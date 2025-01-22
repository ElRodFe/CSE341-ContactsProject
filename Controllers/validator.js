const Validator = require('validatorjs');
const validator = async (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

const validateContact = (req, res, next) => {
    const validationRules = {
        firstName: "required|string",
        lastName: "required|string",
        email: "required|email",
        favColor: "required|string",
        birthday: "required|string"
    };
    validator(req.body, validationRules, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: "Validation failed",
                data: err
            })
        } else {
            next()
        }
    });
}

module.exports = { validateContact }