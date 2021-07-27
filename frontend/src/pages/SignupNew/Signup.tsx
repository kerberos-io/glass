import React from "react";
import { Block, BlockBody, BlockFooter, BlockHeader,Button,Input,TermsOfUse,Icon,LandingLayout } from "@kerberos-io/ui";
import "./signup.scss"

const termsofuse={
    text:`We at Kerberos.io are committed to keeping your data private and protected.
    Due to the changes in the legal environment in the European Union and as a
    part of our continuing effort to improve our service, we have updated our `,
    href:""
}

export default function Signup(){
    return(   
        <LandingLayout>
            <section className="login-signup-body">
                <Block>
                    <BlockHeader>
                    <div>
                        <Icon label="verify" /> <h4>Signup</h4>
                    </div>
                    <Input                        
                        iconright="arrow-down-full-sm"
                        type="button"
                        value="EN"
                        />
                </BlockHeader>
                <BlockBody>
                    <Input
                        label="username"
                        iconleft="accounts"
                        placeholder="Your username"
                        type="text"
                    />
                    <Input
                        label="email"
                        iconleft="email"
                        placeholder="Your email address"
                        type="email"
                    />
                    <Input
                        label="password"
                        iconleft="locked"
                        placeholder="Your password"
                        iconright="activity"
                        seperate
                        type="password"
                    />
                    <Input
                        label="Confirm password"
                        iconleft="locked"
                        placeholder="Repeat your password"
                        iconright="activity"
                        seperate
                        type="password"
                    />

                    <TermsOfUse {...termsofuse}/>
                </BlockBody>
                <BlockFooter>
                    <Button icon="verify" type="outlined" label="Sign-up" />
                    <Button type="transparent" icon="verify" label="Sign-up" />
                </BlockFooter>
            </Block>
        </section>
    </LandingLayout>
    )
}
    