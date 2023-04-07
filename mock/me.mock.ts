import type { MockMethod } from 'vite-plugin-mock'

export const meMock: MockMethod = {
  url: '/api/v1/me',
  method: 'get',
  timeout: 100,
  statusCode: 401,
  response: () => {
    return ''
  },
}
