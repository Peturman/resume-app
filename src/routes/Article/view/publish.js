import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Header } from 'components/Header/Header'
import { Form, Input, Button, Select } from 'antd'
import './style.less'
const FormItem = Form.Item
const { TextArea } = Input
const Option = Select.Option

class Publish extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    const { form, createArticle } = this.props
    const { validateFields } = form
    validateFields(['title', 'description', 'sort', 'tags', 'content'], {}, (errors, values) => {
      e.preventDefault()
      if (!errors) {
        createArticle(values).then(function (data) {
          browserHistory.go(-1)
        })
      } else {
        return false
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 2 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 16 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 12,
          offset: 2
        },
        sm: {
          span: 12,
          offset: 4
        }
      }
    }
    const children = []
    return (
      <div>
        <Header selectedKey='PUBLISH' />
        <div className='blog-container publish-box'>
          <h3>发布文章</h3>
          <Form onSubmit={this.handleSubmit} className='login-form'>
            <FormItem
              {...formItemLayout}
              label='标题'
            >
              {getFieldDecorator('title', {
                rules: [{ required: true, message: '请输入文章标题' }]
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label='描述'
            >
              {getFieldDecorator('description', {
                rules: [{ required: true, message: '请输入文章描述' }]
              })(
                <TextArea placeholder='请输入文章描述' autosize={{ minRows: 3, maxRows: 12 }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label='分类'
            >
              {getFieldDecorator('sort', {
                initialValue: 'front',
                rules: [{ required: true, message: '请选择分类' }]
              })(
                <Select style={{ width: 200 }}>
                  <Option value='front'>前端</Option>
                  <Option value='backend'>后端</Option>
                </Select>
                )
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label='标签'
            >
              {getFieldDecorator('tags', {})(
                <Select
                  mode='tags'
                  style={{ width: '100%' }}
                  tokenSeparators={[',']}
                >
                  {children}
                </Select>
              )
              }
            </FormItem>

            <FormItem
              {...formItemLayout}
              label='内容'
              hasFeedback
            >
              {getFieldDecorator('content', {
                rules: [{ required: true, message: '请输入文章内容' }]
              })(
                <TextArea placeholder='请用markdown语法编写文章内容' autosize={{ minRows: 8, maxRows: 20 }} />
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type='primary' htmlType='submit' className='login-form-button'>
                Submit
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

Publish.propTypes = {
  form: React.PropTypes.object,
  createArticle: React.PropTypes.func
}

const WrappedNormalLoginForm = Form.create()(Publish)

export default WrappedNormalLoginForm
