/* eslint-disable camelcase */
export type User = {
  id: number;
  email: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  is_teacher: boolean;
  profile_id: number | null;
  profileImage: {
    id: number;
    file: string;
    name: string;
    type: string;
    subtype: string;
    created_at: Date;
    updated_at: Date;
    url: string;
  };
};

export type Post = {
  description: string;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  id: number;
  likes: number;
};

export type Classes = {
  name: string;
  subject: string;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  id: number;
};

export type Event = {
  name: string;
  creator_id: number;
  description: string;
  date: Date;
  created_at: Date;
  updated_at: Date;
  id: number;
};

export type Token = {
  type: string;
  token: string;
  expires_at: string; // eslint-disable-line camelcase
};

export type SignInData = {
  email: string;
  password: string;
};

export type SignUpData = {
  name: string;
  email: string;
  password: string;
  is_teacher: boolean;
};

export type AuthResponse = {
  token: Token;
  user: User;
};

export type AuthContextType = {
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  logOut: () => void;
  autenticated: boolean;
};
