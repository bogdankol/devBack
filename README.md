These are the steps to run app:

open folder in a code-editor window. In terminal write "pwd" to be sure that you're in this exact folder. 
write there "npm i" - that would install all the packages needed for server. 1-2) Look through ".env-example" - you must create your own ".env" file for server to run and to access database. Example of .env file: "PORT=5000" "MONGO_CONNECTION_STRING=mongodb+srv://<DB_USER>:<DB_USER_PASS>@<DB_CLUSTER>/<DB_NAME>?retryWrites=true&w=majority" "DB_USER=bogdank208" "DB_USER_PASS=yourPassword" "DB_NAME=devPuzzle" "DB_CLUSTER=cluster1.oxgru.mongodb.net" "SECRET_KEY=secret" "BASE_URL=http://localhost:5000"
"FRONTEND_URL=http://localhost:4000/loadingscreen/"
"GOOGLE_CLIENT_ID=85225226982-fpelt2h5q4mstt11pquhlc8je2rplfnm.apps.googleusercontent.com"
"GOOGLE_CLIENT_SECRET=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"
By default the app's port should be 5000, if you want it to be different - don't forget to make appropriate changes in "app" files.

write in terminal npm run start:dev to lunch server. When it writes "Database connection successful Server running on port: 5000" that means that server is on.