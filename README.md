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

| Method | Endpoint         | Description               |
| ------ | -----------------| ------------------------- |
| GET    | /category        | Retrieve specific emoji   |
| GET    | /category/number | Get a random emoji.       |
| POST   | /category        | Add a new emoji.          |
| PATCH  | /category        | Update an existing emoji. |

## Example

Retrive riddles of science catefory

#### Get riddle based on science

```bash
https://riddles-api-eight.vercel.app/science
```

#### Response

```json
{
  "riddle": "string",
  "answer": "string",
  "category": "string"
}
```

#### Get 100 riddles based on science

```bash
https://riddles-api-eight.vercel.app/science/100
```

#### Response

```json
{
  "riddlesArray": ["riddleQuestions"],
  "answer": "string",
  "category": "string"
}
```



#### Post Riddle

POST/{ category }

```bash
 https://riddles-api-eight.vercel.app/{category}

```

#### Response

```json
{
  "message": "Riddle posted successfully",
  "riddleQuestion": "riddleQuestion._id"
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
