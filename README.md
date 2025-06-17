# Module 2 Assignment-MongoDB and Mongoose

This project was built as part of my Module 2 assignment using all requirements

## Collections

- **Users**
- Fields: `username`, `email`, `age`, `isAdmin`
- **Posts**
- Fields: `title`, `content`, `user`, (Object Id references a User)

## Relationship

Each **Posts** "has a User - connected through reference field(`user: ObjectId`).

## Features

- Create and retrieve user (`/users`)
- Create and retrieve posts (`/posts`)
- Each post is linked to a user
- Uses Mongoose schema validation
- Populates user info in post results

## How to run

1. Start MongoDB (I used `mongod`)
2. Run the app:
3. Use **Postman** to test:

- `POST /users`
- `GET /users`
- `POST /users`
- `GET /users`

## Notes

- I tested everything in Postman and confirmed app worked and relationships showed
- Project submitted via Github [link] (https:// https://github.com/jgil0624/gil_jennifer_wdv353.git)
