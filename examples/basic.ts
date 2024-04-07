import actionSelect from "../src/index";

const example = async () => {
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
    })
}

example()