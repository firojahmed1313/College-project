# SmartPool

# 🏁 Installation
### 💻 Running locally

To run the SmartPool project locally, follow these steps:

1. Install [NodeJs](https://www.nodejs.org/), [MongoDB](https://www.mongodb.com) and [MongoDB Compass (optional)](https://www.mongodb.com/products/compass) on your machine.
2. Clone the project repository.
3. Navigate to the project directory.
4. Create a `.env` file in the root folder copy and paste the content of `.env.sample`, and add the necessary credentials.
5. Install the packages:

```bash
npm install
```

6. Run the project:

```bash
npm run dev
```


5. For Environment variables, we have provided some default values in the `ENV` to reduce the burden, but some parameters are mandatory:

   - `PORT`: Do not change the value, let it be set to 8080 to view the swagger docs after deployment.
   - `MONGODB_URI`: Provide the MongoDB Atlas database URL. An example is prefilled for you, edit/update it to continue.
   - `ACCESS_TOKEN_SECRET`: It is advised to change the default value to your own secret value.
