import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';


// Prueba unitaria
describe('pruebas en authReducer', () => {

    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })

    })

    // 2 Prueba Autenticar or el nombre de usuario.
    test('debe autenticar y colocar el nombre de usuario', () => {
        // arreglar crear variables e importaciones
        const action = {
            type: types.login,
            payload: {
               name: 'Jenny'
            }
        }
        // Actuar, hacer la prueba
        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({ logged: true, name: 'Jenny' })
    })

    // 3 Borra nombre

    test('debe borrar el nombre', () => {})

    // Arreglar 
    const  action = {
        type: types.logout,

    }
    const state = authReducer({logged: true}, action)
    // Actuar
    expect(state).toEqual({logged: false})

})   