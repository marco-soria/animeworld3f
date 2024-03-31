export const isAuthenticated = () => {
    const token = localStorage.getItem("access_token") || null;
  
    if (!token) {
      return false;
    }
  
    const [, payload] = token.split(".");
    const data = JSON.parse(atob(payload));
    const exp = data.exp;
  
    if (exp < Date.now() / 1000) {
      return false;
    }
  
    return true;
  };