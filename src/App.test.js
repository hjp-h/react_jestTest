/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

let wrapper;

// 运行每一个测试用例前先渲染组件
beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  wrapper = render(<App />);
});

// 即将开始一个单元测试
describe('Should render App component correctly', () => {
  // 初始化文本内容为 "Hello World!"
  test('Should render "Hello World!" correctly', () => {
    // getByTestId: 通过属性 data-testid 来获取对应的  DOM
    // 这里我们获取到的是上面 HelloWorld 组件中的 div 标签
    const app = wrapper.getByTestId('container');
    expect(app).toBeInTheDocument();
    // 判断获取到的标签是否是 div
    expect(app.tagName).toEqual('DIV');
    // 判断 div 标签的 text 是否匹配正则 /world/i
    expect(app.textContent).toMatch(/world/i);
  });

  // 点击后文本内容为 "Hello Jack!"   test的别名it
  it('Should render "Hello Jack!" correctly after click', () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const app = wrapper.getByTestId('container');
    // fireEvent: 模拟点击事件
    fireEvent.click(app);
    expect(app.textContent).toMatch(/jack/i);
  });
});
