# inquirer-action-select

Inquirer prompt that lets you choose an item from a list and choose an action to take by pressing a key.

## Installation

```shell
npm i inquirer-action-select
```

## Usage

```javascript
const answer = await actionSelect({
    message: 'Choose a file',
    actions: [
        { value: 'open', name: 'Open', key: 'o' },
        { value: 'edit', name: 'Edit', key: 'e' },
        { value: 'delete', name: 'Delete', key: 'x' }
    ],
    choices: [
        { value: 'image.png', name: 'image.png' },
        { value: 'audio.mp3', name: 'audio.mp3' },
        { value: 'code.py',  name: 'code.py' }
    ]
)
```

```
? Choose a file Open <O> Edit <E> Delete <X>
❯ image.png
  audio.mp3
  code.py
```

## Options

| Property | Type                                                                                                          | Required | Description                                                                                                                                                                                                                                                                         |
|----------|---------------------------------------------------------------------------------------------------------------| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message  | `string`                                                                                                      | yes      | The question to ask                                                                                                                                                                                                                                                                 |
| actions  | `Array<{ value: T, name?: string, key: string }>`                                                             | yes | List of actions the user can take on the selected choice. `name` is the name of the action displayed on the prompt. `value` is what will be returned from the prompt. `key` is the key the user will press to take the specified action. |
| choices  | `Array<{ value: T, name?: string, description?: string, disabled?: boolean \| string } \| Separator>`         | yes      | List of the available choices. The `value` will be returned as the answer, and used as display if no `name` is defined. Choices who're `disabled` will be displayed, but not selectable. The `description` will be displayed under the prompt when the cursor land over the choice. |
| default  | `string`                                                                                                      | no       | Defines in front of which item the cursor will initially appear. When omitted, the cursor will appear on the first selectable item.                                                                                                                                                 |
| pageSize | `number`                                                                                                      | no       | By default, lists of choice longer than 7 will be paginated. Use this option to control how many choices will appear on the screen at once.                                                                                                                                         |
| loop     | `boolean`                                                                                                     | no       | Defaults to `true`. When set to `false`, the cursor will be constrained to the top and bottom of the choice list without looping.                                                                                                                                                   |
| theme    | See [Theming](https://github.com/SBoudrias/Inquirer.js/blob/master/packages/select/README.md) in Select docs. | no       | Customize look of the prompt.                                                                                                                                                                                                                                                       |

## Returns

| Property | Type | Description                               |
|-|-|-------------------------------------------|
| action | `T` | `value` specified for the selected action |
| answer | `T` | `value` specified for the selected choice |