import { Meta, StoryObj } from '@storybook/react'
import Dropdown from './index'

export default {
    title: 'Molecules/Dropdown',
    component: Dropdown,
    parameters: {
      //中央に表示
      layout: 'centered',
    },
    argTypes: {
      options: {
        control: { type: 'object' },
        description: 'ドロップダウンの選択肢',
        table: {
          type: { summary: 'object' },
        },
      },
      hasError: {
        control: { type: 'boolean' },
        defaultValue: false,
        description: 'バリデーションエラーフラグ',
        table: {
          type: { summary: 'boolean' },
        },
      },
      placeholder: {
        control: { type: 'text' },
        description: 'プレースホルダー',
        table: {
          type: { summary: 'string' },
        },
      },
      value: {
        control: { type: 'text' },
        description: 'ドロップダウンの値',
        table: {
          type: { summary: 'string' },
        },
      },
      onChange: {
        description: '値が変化した時のイベントハンドラ',
        table: {
          type: { summary: 'function' },
        },
      },
    },
  } as Meta<typeof Dropdown>
  

export const Normal: StoryObj = {
    args : {
        options: [
          { value: null, label: '-' },
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'Three' },
        ],
        placeholder: 'Please select items from the list',
      }
  }


export const InitialValue: StoryObj = {
    args : {
        options: [
          { value: null, label: '-' },
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'Three' },
        ],
        placeholder: 'Please select items from the list',
        value: 'one',
      }
  }

  export const Many: StoryObj = {
    args : {
        options: Array.from(Array(20), (_v, k) => {
          return { value: k.toString(), label: k.toString() }
        }),
        placeholder: 'Please select items from the list',
      }
  }