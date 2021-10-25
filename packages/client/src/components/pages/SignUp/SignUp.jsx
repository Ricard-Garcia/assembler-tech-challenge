import React from "react";

import Input from "../../Input";
import Button from "../../Button";

export default function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form
        onSubmit={() => {
          console.log("submitted sign up!");
        }}
      >
        <Input label="Email" id="email" type="email" />
        <Input label="Password" id="password" type="password" />
        <Button submitButton>Sign up</Button>
      </form>
    </div>
  );
}
