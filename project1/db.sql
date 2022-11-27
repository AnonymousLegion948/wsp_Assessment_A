DROP TABLE IF EXISTS todo;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    password varchar(255)
);

CREATE TABLE todo(
    id SERIAL PRIMARY KEY,
    title varchar(255),
    description varchar(255),
    is_comleted boolean,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (name,password) VALUES ('jason@tecky.io', '1234')