import React from "react";
import {
  Block,
  Button,
  BlockHeader,
  BlockBody,
  BlockFooter,
  AlertMessage,
  Input,
  TermsOfUse,
  Icon,
  LandingLayout,
  Form,
} from "@kerberos-io/ui";
import { login } from "../../actions";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./signup.scss";
const termsofuse = {
  text: `We at Kerberos.io are committed to keeping your data private and protected.
    Due to the changes in the legal environment in the European Union and as a
    part of our continuing effort to improve our service, we have updated our `,
  href: "",
};

const mapStateToProps = (state: any) => ({
  loginError: state.auth.loginError,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatchLogin: (username: any, password: any) => {
    dispatch(login(username, password));
  },
});
function Signup(props: any) {
  const { loginError, error } = props;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { dispatchLogin } = props;
    const { target } = event;
    const data = new FormData(target);
    dispatchLogin(data.get("username"), data.get("password"));
  };
  const usernameProps = {
    name: "username",
  };
  const passwordProps = {
    name: "password",
  };
  const emailProps = {
    name: "email",
  };
  return (
    <LandingLayout
      title="Kerberos Glass"
      version="v1.0"
      description="A single pane of glass for Kerberos Open Source and Kerberos Enterprise agents"
    >
      <section className="signup-body">
        <Block>
          <form onSubmit={handleSubmit} noValidate>
            <BlockHeader>
              <div>
                <Icon label="verify" /> <h4>Signup</h4>
              </div>
              {/* <Input                        
                        iconright="arrow-down-full-sm"
                        type="button"
                        value="EN"
                        /> */}
            </BlockHeader>
            {loginError && <AlertMessage message={error} />}
            <BlockBody>
              <Input
                label="username"
                iconleft="accounts"
                placeholder="Your username"
                type="text"
                {...usernameProps}
                iconright=""
              />
              <Input
                label="email"
                iconleft="email"
                placeholder="Your email address"
                type="email"
                {...emailProps}
              />
              <Input
                label="password"
                iconleft="locked"
                placeholder="Your password"
                iconright="activity"
                seperate
                type="password"
                {...passwordProps}
              />
              <Input
                label="Confirm password"
                iconleft="locked"
                placeholder="Repeat your password"
                iconright="activity"
                seperate
                type="password"
                {...passwordProps}
              />

              <TermsOfUse {...termsofuse} />
            </BlockBody>
            <BlockFooter>
              {/* <Button icon="" type="outlined" label="Sign-up" /> */}
              <p></p>
              <Button type="default" icon="verify" label="Sign-up" />
            </BlockFooter>
          </form>
        </Block>
      </section>
    </LandingLayout>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
