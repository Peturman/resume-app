import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Header } from 'components/Header/Header'
import fetchAPI from 'api'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './style.less'
const FormItem = Form.Item

class Login extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    const { form } = this.props
    const { validateFields } = form
    validateFields(['userName', 'password'], {}, (errors, values) => {
      e.preventDefault()
      if (!errors) {
        fetchAPI('createAccessToken', {
          username: values.userName,
          password: values.password,
          grant_type: 'password',
          client_id: 'android',
          client_secret: 'SomeRandomCharsAndNumbers'
        }).then(function (data) {
          localStorage.setItem('token', data.access_token)
          browserHistory.go(-1)
        })
      } else {
        return false
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Header title='全栈之路' />
        <div className='form-container'>
          <Form onSubmit={this.handleSubmit} className='login-form'>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }]
              })(
                <Input prefix={<Icon type='user' style={{ fontSize: 13 }} />} placeholder='Username' />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }]
              })(
                <Input prefix={<Icon type='lock' style={{ fontSize: 13 }} />} type='password' placeholder='Password' />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className='login-form-forgot' href=''>Forgot password</a>
            </FormItem>
            <FormItem>
              <Button type='primary' htmlType='submit' className='login-form-button'>
                Log in
              </Button>
              Or <a href=''>register now!</a>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  form: React.PropTypes.object
}

const WrappedNormalLoginForm = Form.create()(Login)

export default WrappedNormalLoginForm
