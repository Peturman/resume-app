import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { Header } from 'components/Header/Header'
import fetchAPI from 'api'
import { Form, Icon, Input, Button } from 'antd'
import './style.less'
const FormItem = Form.Item

class Register extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    const { form } = this.props
    const { validateFields } = form
    validateFields(['userName', 'password', 'confirm'], {}, (errors, values) => {
      e.preventDefault()
      if (!errors) {
        fetchAPI('createUser', {
          username: values.userName,
          password: values.password
        }).then(function (data) {
          browserHistory.push('/user/login')
        })
      } else {
        return false
      }
    })
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不一致')
    } else {
      callback()
    }
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Header selectedKey='REGISTER' />
        <div className='form-container'>
          <Form onSubmit={this.handleSubmit} className='login-form'>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }]
              })(
                <Input prefix={<Icon type='user' style={{ fontSize: 13 }} />} placeholder='Username' />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input prefix={<Icon type='lock' style={{ fontSize: 13 }} />} type='password' placeholder='Password' />
              )}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: '请确认密码!'
                }, {
                  validator: this.checkPassword
                }]
              })(
                <Input type='password'
                  prefix={<Icon type='lock' style={{ fontSize: 13 }} />}
                  placeholder='Confirm Password' />
              )}
            </FormItem>
            <FormItem>
              <Button type='primary' htmlType='submit' className='login-form-button'>
                注册
              </Button> Or <Link to={{ pathname: '/user/login' }}>登录</Link>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  form: React.PropTypes.object
}

const WrappedNormalLoginForm = Form.create()(Register)

export default WrappedNormalLoginForm
