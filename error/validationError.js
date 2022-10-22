/**
 * Implementación de la clase ValidationError
 */

class ValidationError extends Error 
{
    constructor(message) 
    {
        super(message);
        this.name = "ValidationError";
    }
}
module.exports = ValidationError;