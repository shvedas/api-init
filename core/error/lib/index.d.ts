export declare class AppError extends Error {
    code: any;
    constructor(code: any, message: any);
}
declare const _default: (...arg: any[]) => AppError;
export default _default;
