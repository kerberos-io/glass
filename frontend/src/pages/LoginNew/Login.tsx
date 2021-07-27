import React from "react";
import { Block,Button,BlockHeader,BlockBody,BlockFooter,AlertMessage,Input, Icon,LandingLayout} from "@kerberos-io/ui";
import "./login.scss"

export default function Login(){
    return(
        <LandingLayout>
        <section className="login-signup-body">
            <Block>
                <BlockHeader>
                    <div>
                        <Icon label="login" /> <h4>Login</h4>
                    </div>
                    <Input                        
                        iconright="arrow-down-full-sm"
                        type="button"
                        value="EN"
                        />
                </BlockHeader>
                <AlertMessage message="Wrong password, please try again!" />
                <BlockBody>
                    <Input
                      label={"username or email"}
                      placeholder={"Your username/email"}
                      readonly={false}
                      disabled={false}
                      type="text"
                    //   value=""
                      iconleft="accounts"
                      iconright=""
                    />
                    <Input
                       label={"password"}
                       placeholder={"Your password"}
                    //    value=""
                       readonly={false}
                       disabled={false}
                       type="password"
                       hint="Forgotten password?"
                       iconleft="accounts"
                       iconright="activity"
                       seperate
                    />
                </BlockBody>
                <BlockFooter>
                    <Button icon="" type="outlined" label="Sign-up" />
                    <Button type="default" icon="logout" label="Login" />
                </BlockFooter>
            </Block>
        </section>
        </LandingLayout>
    )
}