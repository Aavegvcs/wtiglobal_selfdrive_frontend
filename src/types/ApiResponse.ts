

export interface ApiResponse<T> {
    success: boolean,
    statusCode: number,
    message: string,
    result: T
}