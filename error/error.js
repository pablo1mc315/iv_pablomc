/**
 * Implementación de la clase de Error
 */

export default class Error 
{
    constructor(message) 
    {
        this.message = message;
        this.name = "Error"; // (different names for different built-in error classes)
    }
}
 