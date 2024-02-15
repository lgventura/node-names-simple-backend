# test-enrichly-react-quiz-be

This is a Node.js project consisting of an API with two routes. One route returns a list of strings from a JSON file, and the other route validates whether a given string is part of the JSON file's list of strings.

## Instalattion

1. Clone the repository:

```bash
git clone https://github.com/lgventura/test-enrichly-react-quiz-be.git
```

## Usage

```javascript
cd test-enrichly-react-quiz-be

npm install

npm start

```

The server will starts on http://localhost:4000.

## Routes

### List Names

- URL: /api/strings
- Method: GET
- Description: Return the ist of names

### Validation

- URL: /api/validation/:string
- Method: GET
- Description: Make the validation between the type name and list of names

## Dependencies

- express
- cors
- node js
