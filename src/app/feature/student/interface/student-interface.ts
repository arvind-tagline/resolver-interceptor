export interface StudentInterface {
}
export interface AllExamData {
    _id: string,
    notes: string[],
    subjectName: string,
    email: string,
    Result: string[],
    studentName?:string
}
export interface AllExamDataResponse {
    data: AllExamData[],
    statusCode: number,
    userId: string,
    message: string
}
export interface ExamPaperList{
    options: string[],
question: string,
_id: string
}