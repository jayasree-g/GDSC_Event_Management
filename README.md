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

## Screenshots

Here are some screenshots from the EventHub application to give you a glimpse of its user interface:

### Home Page

![Home Page](https://github.com/jayasree-g/GDSC_Event_Management/assets/105725585/4972e14c-f1ef-46ef-bfb7-438e88ab03dd)

*Description: This is the landing page*

### Sign-up Page

![Sign-up Page](https://github.com/jayasree-g/GDSC_Event_Management/assets/105725585/5f8ff76f-0924-4113-9d28-aa3fe282ab59)


*Description: This is the sign-up page where new users can register for an account by providing their full name, email, and password.*

### Login Page

![Login Page](https://github.com/jayasree-g/GDSC_Event_Management/assets/105725585/7c67c52d-72f6-4113-bcee-a72cb081517a)


*Description: Registered users can securely log in from this page by entering their email and password.*

### Admin Portal

![Admin Portal](https://github.com/jayasree-g/GDSC_Event_Management/assets/105725585/12f6d774-218d-4863-895f-5d69ebc2c3d9)

#### Add New Event
![Add New Event](https://github.com/jayasree-g/GDSC_Event_Management/assets/105725585/e58e9d14-0eae-4ebf-8ff4-dbd98378532d)

#### Edit an Event
![Edit an Event](https://github.com/jayasree-g/GDSC_Event_Management/assets/105725585/0d6c5bca-fdbc-4ec4-8284-9423e3b1b3b5)


*Description: Admin users have access to the Admin Portal, where they can create new events, edit existing events, and manage event details.*

### User Portal

![User Portal](https://github.com/jayasree-g/GDSC_Event_Management/assets/105725585/e2f7e8c4-ac5c-434c-beb8-36a43e4d72be)

#### Click on the button to Register or Unregister
![Registering](https://github.com/jayasree-g/GDSC_Event_Management/assets/105725585/1f5eb9ef-ecdc-461a-b131-d6f90bd40a6b)


*Description: Regular users can view a list of events on the User Portal and register for events that interest them.*
