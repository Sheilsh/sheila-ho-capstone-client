# ShorePark

ShorePark is an application used by condominium residents to register their visitors' cars for 'day of' parking spaces. The app allows the user to book an available space for either 1 hour, 2 hours, 3 hours or 24 hours.

On the home screen the user will see any active parking that is currently ongoing and the time remaining before expiration. The home screen also features a 'book now' button which directs the user to the booking page. The home screen also includes various shortcuts in the form of a navigation bar where the following shortcuts can be found:

- Calendar view - which directs the user to the 'book now' page where they can see available spaces and time remaining if booked for each space
- History (or previous bookings) - where the user can view previous booked spaces and cancel existing bookings
- Profile - where they can find & update their personal information and also save favorite license plate values, and also see contact information

To allow a fair opportunity for all residents, and to limit the folks that may take advantage and book several future spots, the app was designed to only allow residents to book for the 'day of', where it will be a first come first serve basis.

## Features

- Access profile to update or change personal informaion
- View all parking spots to check availability
- Book a parking spot for a set timeframe
- Receive confirmation pop-up
- View active/historic bookings
- Shows map of parking location
- Cancel current bookings

## Tech Stack

**Client:** HTML/CSS, JavaScript, React, Sass, Axios

**Server:** Node.js, Express js, Knex.js

**Database:** MySQL

## Run Locally

Clone the project

```bash
  git clone https://github.com/Sheilsh/sheila-ho-capstone-client
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Roadmap

- Add Login and Authentication
- Allow users to Create Account
- Allow users to do future bookings
- Allow users to edit license plates
- Adding multiple condo buildings to the app which can be monitored collectively

## Authors

- [@Sheilsh](https://github.com/Sheilsh)
