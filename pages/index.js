import { useRouter } from "next/router";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);

  const router = useRouter();

  //localstorage state for logged in user
  const [loggedInUser, setLoggedInUser] = useLocalStorageState("loggedInUser", {
    defaultValue: {},
  });

  //fetch users
  const { data } = useSWR("/api/users");
  if (!data) {
    return <div>...is Loading</div>;
  }
  //login function
  function handleLogin(event) {
    event.preventDefault();

    // // user check email & password
    // const foundUser = data.find(
    //   (user) => user.email === event.target.email.value
    // );
    // if (!foundUser) {
    //   alert("incorrect email");
    // } else if (foundUser.password === event.target.password.value) {
    //   setLoggedInUser(foundUser);
    //   router.push("/feed");
    // } else {
    //   alert("incorrect password");
    // }
  }

  return (
    <StyledSection>
      <h1>Welcome to Netrix</h1>
      <p>This is a Web Application to discover, learn and create Magic!</p>
      {/* <StyledForm onSubmit={handleLogin}> */}
      {/* <label htmlFor="">Email</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required /> */}
      {/* <button type="submit">Login</button>
      </StyledForm> */}
      <button
        type="button"
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
      <br />
      <p>Psst! ... Try the test login!</p>
      <h3>Email: test@test</h3>
      <h3>Password: test</h3>
    </StyledSection>
  );
}

//styling
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const StyledSection = styled.section`
  padding: 10px;
  margin: 10px;
  text-align: center;
  border: 1px solid black;
`;
