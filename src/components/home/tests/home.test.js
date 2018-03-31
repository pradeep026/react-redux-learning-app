import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import HomeComponent from '../home';

const initializeComponent = () => {
    return shallow(<HomeComponent />);
};

it(`Home component renders`, () => {
  const component = initializeComponent();
  expect(component.find('h1').length).toBe(1);
  expect(component.find('h1').text().trim()).toEqual('Home');
});
