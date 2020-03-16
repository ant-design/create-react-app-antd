import React from 'react';
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button, Typography } from 'antd';
import './App.css';

const { Option } = Select;
const { Title } = Typography;

const App = () => (
  <>
    <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 60 }}>
      <Title level={2}>
        <img
          style={{width: 40, height: 40, marginRight: 12, verticalAlign: 'bottom' }}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="Ant Design"
        />
        Ant Design
      </Title>
    </section>
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
      <Form.Item label="数字输入框">
        <InputNumber min={1} max={10} defaultValue={3} />
        <span className="ant-form-text"> 台机器</span>
        <a href="https://ant.design">链接文字</a>
      </Form.Item>
      <Form.Item label="开关">
        <Switch defaultChecked />
      </Form.Item>
      <Form.Item label="滑动输入条">
        <Slider defaultValue={70} />
      </Form.Item>
      <Form.Item label="选择器">
        <Select defaultValue="lucy" style={{ width: 192 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" disabled>disabled</Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>
      <Form.Item label="日期选择框">
        <DatePicker />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button style={{ marginLeft: 8 }}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  </>
);

export default App;
