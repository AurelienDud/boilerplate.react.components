import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import Example from './index'

const defaultProps = {
  label: "hello"
}

/**
 * Enzyme rendering
 */
test('Test using Enzyme', () => {
  const component = shallow(
    <Example {...defaultProps} />
  )

  expect(component.text()).toEqual(defaultProps.label)
})

/**
 * Snapshot
 */
test('Test using snapshot', () => {
  const component = renderer.create(
    <Example {...defaultProps} />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})