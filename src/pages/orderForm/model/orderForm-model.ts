export interface IOrderForm {
    id: number;
    client: string;
    costOfBdc: number;
    externalProvider: string;
    frameworkContractNumber: string;
    nameOfExternalVendor: string;
    requestIdentifier: string;
    signatureDate: Date;
}