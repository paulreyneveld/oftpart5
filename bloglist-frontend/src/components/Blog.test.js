import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: "test",
    author: "hello",
    url: "test.com",
    likes: 123
  }

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'test'
  )

  component.debug()

  const span1 = component.container.querySelector('.title')
  expect(span1).toHaveTextContent('test')

  const span2 = component.container.querySelector('.author')
  expect(span2).toHaveTextContent('hello')

  const span3 = component.container.querySelector('.url')
  expect(span3).not.toBeVisible()

  const span4 = component.container.querySelector('.likes')
  expect(span4).not.toBeVisible()

})