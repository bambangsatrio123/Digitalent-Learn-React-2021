import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Input } from "antd";
import useUser from "../hooks/useUser";
import { Content } from "antd/lib/layout/layout";

export default function LoginPage() {
  const [, setUser] = useUser();

  const history = useHistory();

  const onFinish = (values) => {
    setUser({name: values.username, isLogged: true });
    history.replace('/');
  };

  return (
    <Content style={{ minHeight: "100vh", padding: 16 }}>
      <div style={{ width: "50%", margin: "auto", textAlign: "center" }}>
        <Form name="basic" onFinish={onFinish} autoComplete="off">
          <Form.Item 
            label="Username" 
            name="username" 
            rules={[{ 
              required: true, 
              message: "Please input your username!" 
              },
              () => ({
                validator(_, value) {
                  if (!value.match(/^[0-9a-z]+$/)  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Username only allow alphanumeric!'));
                },
              }),
            ]}
            >
          <Input />
          </Form.Item>

          <Form.Item
            label="email"
            name="email"
            rules={[{
              type: "email", 
              required: true, 
              message: 'The input is not valid E-mail!' 
            },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]}
            >
            <Input />
          </Form.Item>

          <Form.Item 
            label="re-validate Email" 
            name="re-validate" 
            rules={[{ 
              type: "email", 
              required: true, 
              message: "This input is not Email!", 
              }, 
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('email') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two email that you entered do not match!'));
                },
              }),
            ]}>
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
}
