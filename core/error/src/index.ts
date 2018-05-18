
export class AppError extends Error {

  public code;

  constructor (code, message) {
    super(message);
    this.code = code;
    this.message = message ? message : "Internal Server Error";
  }

}

export default (...arg) => {
  const [code = 404, message = ""] = arg;
  return new AppError(code, message);
};