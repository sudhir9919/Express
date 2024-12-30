export const validate = (schema) => {
   // it returns a middleware function that validates the request body against a given schema using Zod.
    return async (req, res, next) => {
        try {
            console.log(req.body);
            schema.parse(req.body);
            next();
        } catch(error) {
            return res.status(400).json({
             error: error.errors,
            success: false,
            message: "Validation failed",
        });
    }
  }

}