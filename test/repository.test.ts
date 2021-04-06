import 'jest'
import { save, load } from '../src/repository/someRepository'

describe( 'Repository Test', () => {

    it( 'Should save', async ( done ) => {

        const expected = save( {} )

        expect( expected ).toBeTruthy()
        done()
    } )

    it( 'Should load', async ( done ) => {

        const expected = load( {} )

        expect( expected ).toBeTruthy()
        done()
    } )
} )
