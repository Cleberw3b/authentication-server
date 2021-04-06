import logger from 'morgan'
import { LoggerType, Logger, SeverityType } from '../models/logger'
import { ENABLE_LOG } from './consts'
import { nowForPostgre, nowIsoDate } from './util'

/**
 * Função responsável por criar e salvar logs
 * 
 * @param message 
 * @param type 
 * @param eventType 
 */
export const log = (
    message: string,
    type: LoggerType,
    service: string = 'vpp-aviso',
    severity: SeverityType = 'info'
) => {

    const timestamp = nowForPostgre()

    const log: Logger = { type, severity, service, timestamp, message }

    if ( ENABLE_LOG ) printLogger( log )

    // saveLog( log )

}

const loggerToString = ( log: Logger ) => {

    const severity = log.severity.toUpperCase()
    const time = nowIsoDate()
    const type = log.type.toUpperCase()
    const service = log.service
    const message = log.message

    return `${ severity } - ${ time } -  ${ type } - ${ service } - ${ message }`

}

export const printLogger = ( log: Logger ) => {
    console.debug( loggerToString( log ) )
}

export { logger }
