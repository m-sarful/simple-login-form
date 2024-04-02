import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const authInfo = {name: 'Sarful Islam'}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
   children: PropTypes.node 
};

export default AuthProvider;

