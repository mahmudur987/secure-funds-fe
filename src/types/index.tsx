export interface IErrorResponse {
  status: number;
  data: ErrorData;
}

export interface ErrorData {
  success: boolean;
  message: string;
  error?: Error;
  stack: string;
}

export interface Error {
  issues: Issue[];
  name: string;
}

export interface Issue {
  validation: string;
  code: string;
  message: string;
  path: string[];
}

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
