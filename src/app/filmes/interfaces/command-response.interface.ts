import { INotificationMessage } from "./notification-message.interface";

export interface ICommandResponse {
    success: boolean;
    message: string;
    statusCode: number;
    data: any;
    errors: INotificationMessage[];
}