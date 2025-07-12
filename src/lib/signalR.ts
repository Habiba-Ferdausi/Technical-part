import { HubConnectionBuilder, LogLevel, HubConnection } from '@microsoft/signalr';

export const buildSignalRConnection = (): HubConnection =>
  new HubConnectionBuilder()
    .withUrl(process.env.NEXT_PUBLIC_HUB_URL || '')
    .withAutomaticReconnect()
    .configureLogging(LogLevel.Information)
    .build();
