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
          <div className="unsuccess-msg">
            <span>Wrong password, please try again</span>
            <span>X</span>
          </div>
          <div className="login-box">
            <div className="login-input">
              <div className="input-title">
                <p>Username or email</p>
                <p></p>
              </div>
              <div className="input-bar">
                <div className="input-icon">
                  <Icon label="accounts" />
                </div>
                <div className="input-itself">
                  <input placeholder="Your username/email" />
                </div>
                <div className="see-password">
                  {/* <Icon label="alerts" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="login-box">
            <div className="login-input">
              <div className="input-title">
                <p>Password</p>
                <p>Forgotten password?</p>
              </div>
              <div className="input-bar">
                <div className="input-icon">
                  <Icon label="accounts" />
                </div>
                <div className="input-itself">
                  <input placeholder="Your password" />
                </div>
                <div className="see-password">
                  <Icon label="alerts" />
                </div>
              </div>
            </div>
          </div>
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
