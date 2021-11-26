import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth/useAuth';

const PrivateRoute = ({children, ...rest}) => {

    const {user, isLoading} = useAuth();
    if(isLoading){
        return (
            <Container className='text-center py-4'>
                <img src="https://i.ibb.co/N9NYP1t/load.gif" alt="loading" />
            </Container>
        )
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/register",
                state: { from: location }
              }}
            />
          )
        }
      />
            
    );
};

export default PrivateRoute;