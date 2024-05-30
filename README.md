# SmartPool
## Tech Stack

**Client:** React
**Server:** Node, Express
**Database:** MongoDB

# 🏁 Installation
### 💻 Running locally

To run the SmartPool project locally, follow these steps:

1. Install [NodeJs](https://www.nodejs.org/), [MongoDB](https://www.mongodb.com) and [MongoDB Compass (optional)](https://www.mongodb.com/products/compass) on your machine.
2. Clone the project repository.
3. Navigate to the `Api` project directory.
```bash
cd Api
```
4. Go to `config/config.env`, and add the necessary credentials.
```bash
cd config/config.env
```
5. Install the packages:

```bash
npm install
```

6. Run the project:

```bash
npm run dev
```


7. For Environment variables, we have provided some default values in the `ENV` to reduce the burden, but some parameters are mandatory:

   - `PORT`: Do not change the value, let it be set to 5000 to view the swagger docs after deployment.
   - `DB_URL`: Provide the MongoDB Atlas database URL. An example is prefilled for you, edit/update it to continue.
   - `ACCESS_TOKEN_SECRET`: It is advised to change the default value to your own secret value.
   - `FRONTED_URL`: Change the URL to your front-end URL for cors.
8. 










## Documentation

[Documentation](https://linktodocumentation)
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
