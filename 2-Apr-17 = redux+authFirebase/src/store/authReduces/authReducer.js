import { AuthAction } from '../action/authAction'

const INITIAL_STATE = {
    authUser: {},
    isRegistered: false,
    isLoggedin: false,
    isLodding: false,
    isError: false,
    errorMessage: {}
}

export const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthAction.SIGNUP:
            return Object.assign({}, state, { isLodding: true })

        case AuthAction.SIGNUP_SUCCESS:
            return Object.assign({}, state, { isLodding: false, isRegistered: true })

        case AuthAction.SIGNUP_REJECT:
            return Object.assign({}, state, { isLodding: false, errorMessage: action.value, isError: true })

        case AuthAction.LOGIN_REJECT:
            return Object.assign({}, state, { errorMessage: action.value, isError: true })
        case AuthAction.LOGIN:
            return Object.assign({}, state, { isLoggedin: true, authUser: action.value })
        default:
            return state
    }
}