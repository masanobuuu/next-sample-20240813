import type { Meta, StoryObj } from '@storybook/react'
import RadioButton from './index'

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  parameters: {
    //中央に表示
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['normal', 'border'],
      control: { type: 'radio' },
      defaultValue: 'normal',
      // docsに表示する内容を設定
      description: 'ラジオボタンバリアント',
      table: {
        type: { summary: 'normal | border' },
        defaultValue: { summary: 'normal' },
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
    onChange: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof RadioButton>


// Normalボタン
export const Normal: StoryObj = {
  args: { 
    variant: "normal", 
    options: [ "Option 1", "Option 2", "Option 3" ],
    }
}

// Borderボタン
export const Border: StoryObj = {
  args: { 
    variant: "border", 
    options: [ "Option 1", "Option 2", "Option 3" ],
    }
}

// Disabledボタン
export const Disabled: StoryObj = {
  args: { 
    disabled: true, 
    options: [ "Option 1", "Option 2", "Option 3" ],
    }
}