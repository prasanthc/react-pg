import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

export function Home() {
  // const { authState, authService } = useOktaAuth();

  // const login = () => { authService.login('/'); }
  const logout = () => { return alert("logout"); }
  const userText = <div><p>You are signed in!</p><button onClick={ logout }>Logout</button></div>

  return <div className="page-home"><h1>Welcome to Books with Hooks</h1>{ userText }</div>;
}
