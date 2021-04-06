//
//     Global interfaces
//

import { MongoClient } from "mongodb"

/**
 * Reescreve Interface `global.NodeJS.ProcessEnv`
 */
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'test' | 'production'
            PORT?: number
            MONGO_DB_NAME: string
            MONGO_ATLAS_URL: string
            ENABLE_LOG?: string
        }
        interface Global {
            connection: MongoClient
        }
    }
}

// convert it into a module by adding an empty export statement.
export { }
