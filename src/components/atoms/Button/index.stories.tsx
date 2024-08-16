import type { Meta, StoryObj } from '@storybook/react'
import Button from './index'

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    //中央に表示
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      // docsに表示する内容を設定
      description: 'ボタンバリアント',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
      description: 'ボタンテキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Disabledフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    width: {
      control: { type: 'number' },
      description: 'ボタンの横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: 'ボタンの縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof Button>


// Primaryボタン
export const Primary: StoryObj = {
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}

// Secondaryボタン
export const Secondary: StoryObj = {
  args: {
    variant: 'econdary',
    children: 'Secondary Button'
  }
}

// Disabledボタン
export const Disabled: StoryObj = {
  args: {
    disabled: 'disabled',
    children: 'Disabled Button'
  }
}