/* eslint-disable camelcase */
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import React from 'react';
import api from '../services/api';
import {
  AuthContextType,
  AuthResponse,
  SignInData,
  SignUpData,
  User,
} from './AuthContextTypes';

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [autenticated, setAutenticated] = React.useState(false);

  React.useEffect(() => {
    const { 'ifconnect.token': token } = parseCookies();
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setAutenticated(!!token);

    if (token && !user) {
      const { 'ifconnect.user': userID } = parseCookies();

      api.get<User>(`/users/${userID}`).then(({ data: user }) => {
        setUser(user);
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function signIn({ email, password }: SignInData): Promise<void> {
    try {
      const {
        data: { token, user },
      } = await api.post<AuthResponse>('/auth', {
        email,
        password,
      });

      api.defaults.headers.common['Authorization'] = `Bearer ${token.token}`;

      setUser(user);

      setCookie(undefined, 'ifconnect.token', token.token, {
        expires: new Date(token.expires_at),
      });

      setCookie(undefined, 'ifconnect.user', String(user.id), {
        expires: new Date(token.expires_at),
      });

      setAutenticated(true);
    } catch (error) {
      console.log(error);
      setAutenticated(false);
      throw new Error(error);
    }
  }

  async function signUp({
    name,
    email,
    password,
    is_teacher,
  }: SignUpData): Promise<void> {
    try {
      await api.post('/users', {
        name,
        email,
        password,
        is_teacher,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  function logOut(): void {
    destroyCookie(undefined, 'ifconnect.token', { path: '/' });
    destroyCookie(undefined, 'ifconnect.user', { path: '/' });

    setAutenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ user, signIn, signUp, logOut, autenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a auth provider');
  }

  return context;
};
