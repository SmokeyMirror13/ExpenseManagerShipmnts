import React from "react";
import { verify } from 'jsonwebtoken';
import { Link } from "react-router-dom";
import { Form, Input, Space, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import emanager from "../../api/expensemanager";

const SignIn = () => {
  const onFinish = (values) => {
    emanager
    .post('/api/v1/login', JSON.stringify(values))
    .then(response => {
        verify(response,'ashdfaslf', (err, decoded) => {
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log(decoded);
            }
        })
    })
    .catch(error => console.log(error))
  };
  return (
      <center>
      <Space align="center">
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{maxWidth: "300px"}}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button style={{width: "100%"}} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <center>OR</center>
        <Link to="/signup">
          <Button style={{width: "100%"}} type="primary" className="login-form-button">Sign Up</Button>
        </Link>
      </Form.Item>
    </Form>
    </Space>
    </center>
  );
};

export default SignIn;
