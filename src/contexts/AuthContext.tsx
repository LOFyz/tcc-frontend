import { parseCookies, setCookie, destroyCookie } from 'nookies';
import React from 'react';
import { Redirect } from 'react-router-dom';
import api from '../services/api';
import {
  AuthContextType,
  AuthResponse,
  SignInData,
  User,
} from './AuthContextTypes';

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [autenticated, setAutenticated] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    const { 'ifconnect.token': token } = parseCookies();

    if (token && !user) {
      const { 'ifconnect.user': userID } = parseCookies();

      api.get<User>(`/users/${userID}`).then(({ data: user }) => {
        setUser(user);
      });
    }
  }, []);

  async function signIn({ email, password }: SignInData): Promise<void> {
    try {
      const {
        data: { token, user },
      } = await api.post<AuthResponse>('/auth', {
        email,
        password,
      });

      api.defaults.headers.Authorization = `Bearer ${token.token}`;

      setUser(user);

      setCookie(undefined, 'ifconnect.token', token.token, {
        expires: new Date(token.expires_at),
      });

      setCookie(undefined, 'ifconnect.user', String(user.id), {
        expires: new Date(token.expires_at),
      });

      setFailed(false);
      setAutenticated(true);
    } catch (error) {
      console.log(error);
      setFailed(true);
      setAutenticated(false);
    }
  }

  function logOut(): void {
    destroyCookie(undefined, 'ifconnect.token', { path: '/' });
    destroyCookie(undefined, 'ifconnect.user', { path: '/' });

    setFailed(false);
    setAutenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ user, signIn, logOut, autenticated, failed }}
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
