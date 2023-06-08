# ChatGPT Test

## Available scripts

`npm start` - run development server with hot reload mode,

`npm build` - build distributon package,

`npm run lint` - run lints,

`npm run lint:code` - run lint for typescript / javascript files,

`npm run lint:code:fix` - run lint for typescript / javascript files with auto fix option,

`npm run lint:style` - run lint for style files,

`npm run lint:style:fix` - run lint for style files with auto fix option,

## Example

### Input

```
Bears eat 5 fishes. Fishes eat 10 insects everyday. Before 10 days ago, there was a fight between plants and insects. Insects won the plants.
```

### Schema

```json
{
  "title": "Animal",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The animal's name."
    },
    "activity": {
      "type": "string",
      "description": "The animal's activity."
    },
    "count": {
      "type": "number",
      "description": "The animal's activity count."
    },
    "object": {
      "type": "string",
      "description": "The object of animal's activity"
    }
  }
}
```

### Output

```json
{
  "animals": [
    {
      "name": "Bears",
      "activity": "eat",
      "count": 5,
      "object": "fishes"
    },
    {
      "name": "Fishes",
      "activity": "eat",
      "count": 10,
      "object": "insects"
    },
    {
      "name": "Insects",
      "activity": "won",
      "object": "plants"
    }
  ]
}
```
