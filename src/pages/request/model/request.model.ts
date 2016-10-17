export interface IJob {
    id: number;
    volume: number;
    sourceLanguage: string;
    targetLanguage: string;
    deliveryUrl: string;
}

export interface IRequest {
    id: number;
    requestIdentifier: string;
    targetLanguages: string[];
    sourceLanguages: string[];
    numberOfJobs: number;
    deliveryDate: Date;
    jobs: IJob[];
}