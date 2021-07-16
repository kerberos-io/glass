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
  AlertMessage,
  Footer,
  FooterList
} from "@kerberos-io/ui";
const footerData = [
  {
    title: "Kerberos.io",
    titlehref: "",
    items: [
      {
        item: "@ 2021 Verstraeten.io",
        itemhref: "sss",
      },
      {
        item: "All right reserved",
        itemhref: "",
      },
      {
        item:"socials",
        socials:[
          <Icon label="activity" />,
          <Icon label="activity" />,
          <Icon label="activity" />,
          <Icon label="activity" />
        ]
      }
    ],
  },
  {
    title: "Products",
    titlehref: "",
    items: [
      {
        item: "Opensource Agent",
        itemhref: "",
      },
      {
        item: "Enterprise Agent",
        itemhref: "",
      },
      {
        item: "Kerberos Hub",
        itemhref: "",
      },

      {
        item: "Kerberos Vault",
        itemhref: "",
      },
    ],
  },
  {
    title: "Support",
    titlehref: "",
    items: [
      {
        item: "Documantation",
        itemhref: "",
      },
      {
        item: "Enterperise Support",
        itemhref: "",
      },

      {
        item: "Reddit Community",
        itemhref: "",
      },
    ],
  },
  {
    title: "Company",
    titlehref: "",
    items: [
      {
        item: "About",
        itemhref: "",
      },
      {
        item: "Contact",
        itemhref: "",
      },
      {
        item: "Blog",
        itemhref: "",
      },
      {
        item: "Careers",
        itemhref: "",
      },
    ],
  },
];
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
        <Footer>
        {footerData.map((items) => (
          <FooterList {...items} />
          ))}
        </Footer>
    </div>
  );
}
