export class CustomResponse<T> {
    public statusCode: number;
    public message: string;
    public totalProducts?: number;
    public data?: T;

    constructor(statusCode: number, message: string, totalProducts: number, data?: T) {
        this.statusCode = statusCode,
        this.message = message;
        this.totalProducts = totalProducts; 
        this.data = data;
    }
}