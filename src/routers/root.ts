//
//      Rota Raiz
//

import { Router } from 'express'
import { Request, Response, NextFunction } from 'express-serve-static-core'
import { permanentRedirect } from '../utils/httpStatus'
const router = Router()

/**
 * GET -> Redirecionando para o health check.
 */
router.get( '/', ( req: Request, res: Response, next: NextFunction ) => {

  res.writeHead( permanentRedirect.status, {
    Location: '/healthcheck'
  } ).end()
} )

export { router as rootRouter }
