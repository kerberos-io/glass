import React from "react";
import { Block,Button,BlockHeader,BlockBody,BlockFooter,AlertMessage,Input, Icon,LandingLayout,Form} from "@kerberos-io/ui";
import { login } from '../../actions';
import { withRouter,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./login.scss"

const mapStateToProps = (state:any) => ({
    loginError: state.auth.loginError,
    error: state.auth.error,
  });
  
  const mapDispatchToProps = (dispatch:any) => ({
    dispatchLogin: (username:any, password:any) => {
      dispatch(login(username, password));
    },
  });
 function Login(props:any){
    const { loginError, error } = props;

    const handleSubmit=(event:React.SyntheticEvent|any)=>{
        event.preventDefault();
        const { dispatchLogin } = props;
        const { target } = event;
        const data = new FormData(target);
        dispatchLogin(data.get('username'), data.get('password'));
    }
    const usernameProps={
        name:"username"
    }
    const passwordProps={
        name:"password"
    }
    return(
        <LandingLayout>
        <section className="login-signup-body">
            <Block>
                <form onSubmit={handleSubmit}>
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
                {loginError && <AlertMessage  message={error} />}  
                <BlockBody>
                    <Input
                      label={"username or email"}
                      placeholder={"Your username/email"}
                      readonly={false}
                      disabled={false}
                      type="text"
                     {...usernameProps}
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
                       {...passwordProps}
                       hint="Forgotten password?"
                       iconleft="accounts"
                       iconright="activity"
                       seperate
                    />
                </BlockBody>
                <BlockFooter>
                    <Link to="/signup">
                    <Button icon="" type="outlined" label="Sign-up" />
                    </Link>
                    <Button type="submit" icon="logout" label="Login" />
                </BlockFooter>
                </form>
            </Block>
        </section>
        </LandingLayout>
    )
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Login)
  );
  