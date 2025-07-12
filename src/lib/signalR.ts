import { HubConnectionBuilder, LogLevel, HubConnection } from '@microsoft/signalr';

export const buildSignalRConnection = (): HubConnection =>
  new HubConnectionBuilder()
    .withUrl('https://tech-test.raintor.com/Hub')
    .withAutomaticReconnect()
    .configureLogging(LogLevel.Information)
    .build();
