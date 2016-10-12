export interface IRequest {
    id: number;
    requestIdentifier: string;        
    targetLanguages: string[];
    sourceLanguages: string[];
    numberOfJobs: number;    
    deliveryDate: Date;
}