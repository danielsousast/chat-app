export const getSignUpError = (errorCode:string) => {
    switch (errorCode) {
        case 'auth/email-already-in-use':
            return 'Este e-mail já está em uso'
        case 'auth/invalid-email':
            return 'Este não é e-mail válido'      
        case 'auth/operation-not-allowed':
            return 'Tente novamente mais tarde'      
        case 'auth/weak-password':
            return 'Tente uma senha melhor'                           
        default:
            return 'Tente novamente mais tarde';
    }
} 

export const getSignInError = (errorCode:string) => {
    switch (errorCode) {
        case 'auth/invalid-password':
            return 'E-mail ou senha não conferem'   
        case 'auth/invalid-email':
            return 'E-mail ou senha não conferem'              
        case 'auth/operation-not-allowed':
            return 'Tente novamente mais tarde'                   
        default:
            return 'Tente novamente mais tarde';
    }
} 