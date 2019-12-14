# eecs341
A course project for EECS341 (Intro to Database System) at CWRU

## Tech Stack:

- Backend:
  - Java 8
    - SpringBoot
    - MyBatis
  - Maven
  - PostgreSQL
- Frontend:
  - Bootstrap
  - node.js
    - React.js
    
## How to run this program locally

### Backend

Change to the backend directory, and then run the following command to start the backend service:
```bash
mvn spring-boot:run
```  
This will start the backend service on port 8080.

### Frontend

Make sure you have at least node.js version 8 installed. Move into the frontend folder, run:
```bash
npx serve
```
The frontend UI will then be hosted on port 5000. Go to [http://localhost:5000](http://localhost:5000) to start browsing.
