## Pawfect Match

Find your Paw Pal! - Follow the link to use [pawfect-match-23.netlify.app/](https://pawfect-match-23.netlify.app/) or see installtion instructions below.

### What we wanted to acheive:

Our app aims to provide users with personalised dog breed recommendations based on their preferences and lifestyle. We strive to create an engaging and user-friendly experience that helps individuals find the perfect furry companion for their home and lifestyle.

### How will it work?

It'll do this by taking the users information such as house size, training requirements/experience etc in a questionnaire. Some of the users responses are sent as params to [API-Ninjas dog API](https://api-ninjas.com/api/dogs), and the rest of the responses are matched by filtering down the API result. The results will be shown to user and hopefully they will find their pawfect match! . User can signup to save their favourite dog breeds, which means they can come back at a later date to see results, and can also change response to the questionnaire.

### Tech used:

- React js
- React-router
- Firebase/Auth/Firestore
- Axios
- Git
- Toastify
- JavaScript/JSX
- HTML/CSS
- VSCode
- Jest
- Postman

### Installation instructions:

1. Clone the repository:

```
git clone https://github.com/codegregcode/pawfect-match
```

2. Navigate to the project directory:

```
cd pawfect-match
```

3. Install the dependencies:

```
npm install
```

Configuration

1. Create a Firebase project and enable Firebase Authentication and Firebase Firestore.
2. Create an API Ninja's account to get an API key
3. Setup a .env file:

   ```
   REACT_APP_API_KEY=your_api_ninja_key
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_DATABASE_URL=your_firebase_database_url
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=1your_firebase_app_id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
   ```

To use Pawfect Match, follow these steps:

1. Launch the app by running the following command:

```
shell

npm start
```

1. Access the app in your web browser at https://localhost:3000
2. Now you can use the app to find your Pawfect Match!

### Built by...

- [Abi](https://github.com/Abi-Turner)
- [Ernesto](https://github.com/erns2angustia)
- [Greg](https://github.com/codegregcode)
