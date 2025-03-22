

// Interfaces para los bodies
export interface RegisterBody {
  email: string;
  password: string;
  name: string;
}

export interface LoginBody {
  email: string;
  password: string;
}


export interface User {
  email: string;
  password: string;
  name: string;
}