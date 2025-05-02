# Prompt Engineering

The Basic Quiz app using large language models to generate question data.  The prompts that are used are described in this document.

## LLM Prompt

Use the following verbiage:

Generate a list of [number of questions] [topic] questions and answers.  The questions will each have four possible answers with the first answer always being the first in the list of answers.  The format should be as follows.
```js
[
    {
      id: 'q1',
      text: 'Which questions should I ask?',
      answers: [
        'Valid questions.',
        'One invalid question.',
        'Two invalid questions.',
        'Three invalid questions.',
      ],
    },
]
```
