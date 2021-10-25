import React from "react";

import Input from "../../Input";
import Button from "../../Button";

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <form
        onSubmit={() => {
          console.log("submitted sign in!");
        }}
      >
        <Input label="Email" id="email" type="email" />
        <Input label="Password" id="password" type="password" />
        <Button submitButton>Sign in</Button>
      </form>
    </div>
  );
}
