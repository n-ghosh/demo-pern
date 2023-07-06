/* this file is not necessary to the app.
It simply acts as a clipboard for commands I put in the terminal. 
*/
CREATE DATABASE pern_todo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY, /* SERIAL is a postgresql datatype that auto increments. 
    PRIMARY KEY is always unique */
    description VARCHAR(255)
);
