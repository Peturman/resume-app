import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { Header } from 'components/Header/Header'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './style.less'
const FormItem = Form.Item

class Login extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    const { form, login } = this.props
    const { validateFields } = form
    validateFields(['userName', 'password'], {}, (errors, values) => {
      e.preventDefault()
      if (!errors) {
        login(values).then(function (data) {
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
        <Header selectedKey='LOGIN' />
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
                <Checkbox>记住我</Checkbox>
              )}
              <a className='login-form-forgot' href=''>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type='primary' htmlType='submit' className='login-form-button'>
                登录
              </Button> Or <Link to={{ pathname: '/user/register' }}>立即注册</Link>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  form: React.PropTypes.object,
  login: React.PropTypes.func
}

const WrappedNormalLoginForm = Form.create()(Login)

export default WrappedNormalLoginForm
