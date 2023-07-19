interface Login {
  onLogin: (email: string, password: string) => void;
  path?: string;
}

export default Login;
