interface TokenPayload {
  exp: number;
  user_id: number;
}

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("access_token") || null;

  if (!token) {
    return false;
  }

  const [, payload] = token.split(".");
  const data: TokenPayload = JSON.parse(atob(payload));
  const exp = data.exp;

  if (exp < Date.now() / 1000) {
    return false;
  }

  return true;
};
