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
    validateFields(['userName', 'password'], {}, (errors, values) => {
      e.preventDefault()
      if (!errors) {
        fetchAPI('createUser', {
          username: values.userName,
          password: values.password
        }).then(function (data) {
          console.log(data)
          browserHistory.go('/user/login')
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
        <Header selectedKey='REGISTER' />
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
