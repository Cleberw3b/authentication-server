//
//      Interface Client
//

// Define quais os tipos de log
export type LoggerType = 'request' | 'response' | 'event'

// Define qual severidade do log
export type SeverityType = 'info' | 'warn' | 'error' | 'critical'

// Define interface Logger
export interface Logger {
    type: LoggerType
    severity: SeverityType
    service: string
    timestamp: string
    message: string
}
