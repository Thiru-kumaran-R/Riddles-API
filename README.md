# Riddles API

Welcome to the Riddles API! This API provides a collection of riddles across various categories including funny, math, logic, and mystery. It's a fun way to challenge your mind and entertain yourself or your users with interesting riddles.

## Base API URL

https://riddles-api-eight.vercel.app/{ category }

## Routes

- **Funny Riddles**: `/funny`

  - Endpoint to get funny riddles that will tickle your funny bone.

- **Math Riddles**: `/math`

  - Endpoint to get math-related riddles that will test your mathematical skills.

- **Logic Riddles**: `/logic`

  - Endpoint to get logic-based riddles that will make you think outside the box.

- **Mystery Riddles**: `/mystery`

  - Endpoint to get mysterious riddles that will keep you guessing.

- **Science Riddles**: `/science`

  - Endpoint to get science riddles that incorporate scientific concepts or phenomena..

## Endpoints

### GET/Riddles

Retrive riddles of specific catefory

#### Get riddle based on science

```bash
https://riddles-api-eight.vercel.app/science
```
#### Get riddle based on math

```bash
https://riddles-api-eight.vercel.app/math
```
#### Get riddle based on mystery

```bash
https://riddles-api-eight.vercel.app/mystery
```

#### Get funny riddle

```bash
https://riddles-api-eight.vercel.app/funny
```
#### Get riddle based on logics

```bash
https://riddles-api-eight.vercel.app/logic
```


#### Response

```json
{
  "id": "string",
  "riddle": "string",
  "answer": "string",
  "category": "string"
}
```

### POST/Riddles

Post riddle on specific catefory

#### Request

POST/{ category }

#### Post Riddle

```bash
 https://riddles-api-eight.vercel.app/{category}
```

#### Request

```json
{
  "riddle": "string",
  "answer": "string",
  "category": "string"
}
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Thiru-kumaran-R/Riddles-API.git
   ```

2. Go to project folder:

   ```bash
   cd project
   ```

3. Start the server:

   ```bash
   npm start
   ```

## Error Handling

In case of any error, the API will return a JSON response with an appropriate status code and error message

**Example**

```bash
{
"message": "No such route exits",
"status": 404
}
```
