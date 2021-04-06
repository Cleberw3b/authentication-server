//
//     Errors
//

import { errorCode } from './errorCode'

/**
 * Define Interface AppError
 */
export interface AppError {
    errorCode: errorCode
    description: string
    tip: string
    example?: string[]
}

/**
 * NEVER USE
 */
export const voidError: AppError = {
    errorCode: 0x000,
    description: 'It should never happen, call a developer',
    tip: 'Miss developed',
    example: ['Do not use']
}

/**
 * Lista com todos os erros relacionados a Client
 */
export const errorsList: AppError[] = [
]


/**
 * Retorna um error object dependendo do código referenciado
 * 
 * @param errorCode 
 */
export const findError = ( errorCode: errorCode ) => {
    return errorsList.find( error => error.errorCode === errorCode ) || voidError
}
