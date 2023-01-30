export interface Teacher {
}
export interface StudentList {
    status: string,
    _id: string,
    name: string,
    email: string
}
export interface Result {
    studentAnswer: string[],
    _id: string,
    rank: number,
    subjectName: string,
    score: number,
    studentId: string,
    resultStatus: string,
    __v: number
}
export interface StudentDetailsData {
    _id: string,
    name: string,
    email: string,
    Result: Result[]
}
export interface StudentDetailsResponse {
    data: StudentDetailsData[],
    message: string,
    statusCode: number
}