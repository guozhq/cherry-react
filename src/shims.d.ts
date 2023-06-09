import * as React from 'react'
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    flex?: boolean
    text?: string
    grid?: boolean
    relative?: boolean
    bg?: string
    rounded?: string
    fixed?: boolean
    b?: string
    z?: string
    block?: boolean
    'focus:shadow'?: boolean
    h?: string
    absolute?: boolean
    top?:string
    truncate?: boolean
    left?: string
  }
}