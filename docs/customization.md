# Customization

The Basic Quiz app can be customized by modifying a few files:

- `src/services/DataService.ts`
- `src/index.css`

## Modifying the data used for the quiz

Quiz data questions and answers can easily be modified by changing the source file or URL in the `DataService.ts` file.

The application uses data files that are stored in the `src/data` directory to generate the questions and answers in the quiz.  The location of the file is in the first line of the `DataService.ts` file.

```ts
import QUESTIONS from '../data/oneQuestions.ts';
```

## Modifying the style

The application makes extensive use of Tailwind CSS to provide the look and feel of the application.  Modifications to the look and feel of the application can be made by making changes to the `index.css` file.  The application uses some inline styles in components.  These can also be modified.

## References

- [Tailwind CSS](https://tailwindcss.com/)