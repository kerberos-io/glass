import React from "react";
import "./login.scss";
import {
  Button,
  Gradient,
  Icon,
  Block,
  BlockBody,
  BlockHeader,
  BlockFooter,
  InputBox,
  AlertMessage
} from "@kerberos-io/ui";
export default function Login() {
  return (
    <div id="page-login">
      <Gradient />
      <div className="page-header">
        <h4>Kerberos Hub v3.0</h4>
        <p> Control panel and management for all Kerberos services</p>
      </div>
      <Block>
        <BlockHeader>
          <div className="left">
            <Icon label="logout" />
            <h3>Login</h3>
          </div>
          <div className="right">En</div>
        </BlockHeader>
        <BlockBody>
          <AlertMessage message="Wrong password, please try again!" />          
          <InputBox
            titleleft="Username or email"
            iconleft="accounts"
            placeholder="Your username/email"
          />
          <InputBox
            titleleft="Password"
            hint="Forgotten password?"
            iconleft="accounts"
            placeholder="Your password"
            iconright="activity"
            seperate
          />
        </BlockBody>
        <BlockFooter>
          <div className="left">
            <Button icon="" type="outlined" label="Sign-up" />
          </div>
          <div className="right">
            <Button type="default" icon="logout" label="Login" />
          </div>
        </BlockFooter>
      </Block>
      <div className="page-footer"></div>
    </div>
  );
}
