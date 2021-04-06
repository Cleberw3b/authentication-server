import { Request, Response, NextFunction } from 'express'
import { findErrorByStatus, notFound, createHttpStatus, HttpStatusResponse, serviceUnavailable } from './httpStatus'
import { logger, log } from './loggerUtil'

/**
 * Middleware para capturar status 404 e criar error
 */
export const notFountMiddleware = ( req: Request, res: Response, next: NextFunction ) => {
    next( createHttpStatus( notFound ) )
}

/**
 * Exports middleware para tratar erros internos do servidor express
 */
export const errorMiddleware = ( error: HttpStatusResponse, req: Request, res: Response, next: NextFunction ) => {
    if ( res.headersSent ) return

    res.statusMessage = error.message

    log( res.statusMessage, 'event', 'Error Middleware', 'error' )

    try {
        return res
            .status( error.status )
            .send( createHttpStatus( findErrorByStatus( error.status ), error.message ) )

    } catch ( error ) {
        console.error( error.message )
        log( error.message, 'event', 'Error Middleware', 'critical' )
    }
}

/**
 * Middleware function to handle authorization
 */
export const corsMiddleware = ( req: Request, res: Response, next: NextFunction ) => {
    // Allow Origins
    res.header( 'Access-Control-Allow-Origin', '*' )
    // Allow Methods
    res.header( 'Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS' )
    // Allow Headers
    res.header( 'Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization' )
    // Handle preflight, it must return 200
    if ( req.method === 'OPTIONS' ) {
        // Stop the middleware chain
        return res.status( 200 ).end()
    }
    // Call next middleware 
    next()
}

/**
 * Middleware to handle authorization
 */
export const authMiddleware = async ( req: Request, res: Response, next: NextFunction ) => {
    // get token from request header Authorization
    // const token = req.headers.authorization

    // TODO
    // Token verification
    // Catch the JWT Expired or Invalid errors
    // return res.status( 401 ).send( { msg: err.message } )

    // Call next middleware
    next()
}

/**
 * Middleware para logar as requests
 */
export const loggerRequest = logger( 'from :remote-addr - :method :url HTTP/:http-version', {
    immediate: true,
    stream: {
        write: ( message: string ) => {
            log( message.trim(), 'request' )
        }
    }
} )

/**
 * Middleware para logar os responses
 */
export const loggerResponse = logger( 'to :remote-addr - STATUS :status in :response-time ms', {
    stream: {
        write: ( message: string ) => {
            log( message.trim(), 'response' )
        }
    }
} )
