import { Collection, Db } from 'mongodb'
import { Logger } from '../../models/logger'

const LOGGER_COLLECTION = 'logger'

let loggerCollection: Collection<Logger>

export const createCollections = ( database: Db ) => {
    loggerCollection = database.collection<Logger>( LOGGER_COLLECTION )
}

export { loggerCollection }
