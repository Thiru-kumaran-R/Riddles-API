# Riddles API

Welcome to the Riddles API! This API provides a collection of riddles across various categories including funny, math, logic, and mystery. It's a fun way to challenge your mind and entertain yourself or your users with interesting riddles.

## Base URL

https://api.yourdomain.com/riddles

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

#### Request

GET/riddle/{category}

#### Parameters

- `category` (string): The category of riddles to retrieve. Must be one of the following:
  - `funny`
  - `logic`
  - `math`
  - `mystery`
  - `science`
  - `who-am-i`

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

Retrive riddles of specific catefory

#### Request

POST/riddle/{category}

#### Parameters

- `category` (string): The category of riddles to retrieve. Must be one of the following:
  - `funny`
  - `logic`
  - `math`
  - `mystery`
  - `science`
  - `who-am-i`

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
