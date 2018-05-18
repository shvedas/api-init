"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        this.message = message ? message : "Internal Server Error";
    }
}
exports.AppError = AppError;
exports.default = (...arg) => {
    const [code = 404, message = ""] = arg;
    return new AppError(code, message);
};
//# sourceMappingURL=index.js.map