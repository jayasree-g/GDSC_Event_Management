# EventHub - Event Management Application

EventHub is a web application that simplifies event management by providing an easy-to-use platform for both administrators and users. It allows users to discover, register for, and interact with events.

## Functionalities

1. **Sign-up Page:**

   - New users can register for an account.
   - Registration includes providing a fullname, email, and password.
   - All users (excluding admins) can sign up.

2. **Login Page:**

   - Registered users (both regular users and admins) can securely log in.
   - Users need to enter their email and password for authentication.

3. **Admin Portal:**

   - Admin users have special privileges.
   - They can create new events with details like name, date, location, and description.
   - Admins can also edit existing events and delete events when necessary.

4. **User Portal:**
   - Regular users can view a list of events.
   - They have the option to register for events that interest them.

## Tech Stack
### Frontend:
- React.js
- TypeScript
- Tailwind CSS
- ContextAPI
### Backend:
- NestJS
- Sequelize (for MySQL database)

## How to Run
To run EventHub locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/jayasree-g/GDSC_Event_Management.git
   ```
   ### SET UP FrontEnd
2. **Install frontend depeendencies:**
    ```bash
   cd client
   npm install
   ```
   ### SET UP BackEnd
3. **Install backend depeendencies:**
   ```bash
   cd server
   npm install
   ```

4. **Create the .env File:**
   Duplicate the .env.example file and rename it to `.env`. Open the newly created .env file and replace the placeholder values with the actual values. DB_NAME is the name of the new database you've created.
