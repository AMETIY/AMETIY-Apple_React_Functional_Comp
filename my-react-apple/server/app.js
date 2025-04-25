const express = require("express");
// console.log(express);
const mysql2 = require("mysql2");
const cors = require("cors");
require("dotenv").config();

let app = express();

// Middleware to parse JSON & form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const corsOption = {                  //Allows request from a specific origin
//   origin: "http://localhost:3003/add-product",
//   methods: ["get", "post"],
// };
// app.use(cors(corsOption));

app.use(cors());

// Creating The Connection
const mySqlConnection = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// 2 Using Express Module
mySqlConnection.connect((err) => {
  if (err) {
    console.log("Error Connecting to The Database:", err.message);
    return;
  }
  console.log("Connected to MYSQL Database!");
});

// ?Route to initialize the database setup
app.get("/", (req, res) => {
  console.log(req.url);
  res.send(`
    
        <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          color: #fff;
        }

        .container {
          text-align: center;
          background-color: rgba(0, 0, 0, 0.3);
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.2rem;
          margin-top: 0;
        }

        // .btn {
        //   margin-top: 2rem;
        //   padding: 10px 20px;
        //   font-size: 1rem;
        //   border: none;
        //   border-radius: 5px;
        //   background-color: #fff;
        //   color: #0077ff;
        //   cursor: pointer;
        //   transition: background-color 0.3s;
        // }

      </style>
    </head>
    <body>
      <div class="container">
        <h1>👋 Welcome User!</h1>
        <p>I am thrilled to have you here 🚀<br />Enjoy your stay and explore the app.</p>
      </div>
    </body>
    </html>
    
  `);
});

//Route to initialize the database setup
app.get("/install", async (req, res) => {
  const queries = [
    `CREATE TABLE IF NOT EXISTS products_table(
      Product_id INT AUTO_INCREMENT,
      Product_url VARCHAR(255) NOT NULL,
      Product_name VARCHAR(255) NOT NULL,
      PRIMARY KEY (Product_id)
    )`,

    `CREATE TABLE IF NOT EXISTS product_description_table (
      Description_id INT AUTO_INCREMENT,
      Product_id INT NOT NULL,
      Product_brief_description VARCHAR(255) NOT NULL,
      Product_description VARCHAR(400) NOT NULL,
      Product_img TEXT,
      Product_link VARCHAR(255) NOT NULL,
      PRIMARY KEY (Description_id),
      FOREIGN KEY (Product_id) REFERENCES products_table(Product_id)
    )`,

    `CREATE TABLE IF NOT EXISTS product_price_table (
      Price_id INT AUTO_INCREMENT,
      Product_id INT NOT NULL,
      Starting_price VARCHAR(255) NOT NULL,   
      Price_range VARCHAR(255) NOT NULL,
      PRIMARY KEY (Price_id),
      FOREIGN KEY (Product_id) REFERENCES products_table(Product_id)
    )`,

    `CREATE TABLE IF NOT EXISTS user_table (
      User_id INT AUTO_INCREMENT,
      User_name VARCHAR(50) NOT NULL,
      User_password VARCHAR(255) NOT NULL,
      PRIMARY KEY (User_id) 
    )`,

    `CREATE TABLE IF NOT EXISTS orders_table (
      Order_id INT AUTO_INCREMENT,
      Product_id INT NOT NULL,
      User_id INT NOT NULL,
      PRIMARY KEY (Order_id),
      FOREIGN KEY (Product_id) REFERENCES products_table(Product_id) ON DELETE CASCADE,
      FOREIGN KEY (User_id) REFERENCES user_table(User_id ) ON DELETE CASCADE
    )`,
  ];

  try {
    // Convert queries into promises
    const mydbQuery = queries.map((query) => {
      return new Promise((resolve, reject) => {
        mySqlConnection.query(query, (err, result) => {
          if (err) {
            console.error("Error executing query:", err.message);
            return reject(err);
          }
          console.log("Query executed successfully");
          resolve(result);
        });
      });
    });

    await Promise.all(mydbQuery);

    // All queries executed successfully
    res.send("<h2 style='color:green'>✅ Tables created successfully!</h2>");
  } catch (err) {
    res
      .status(500)
      .send(
        `<h2 style='color:red'>Error creating tables:  ${err.message} </h2>`
      );
  }
});

// Convert callback-based query into a Promise wrapper
const mydbQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    mySqlConnection.query(query, params, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};
//
app.post("/add-product", async (req, res) => {
  // Insert the data from the form
  try {
    const {
      ProductUrl,
      ProductName,
      ProductBriefDescription,
      ProductDescription,
      ProductImg,
      ProductLink,
      StartingPrice,
      PriceRange,
    } = req.body;

    if (!ProductName || !ProductUrl || !StartingPrice) {
      return res.status(400).send("Missing required fields");
    }

    const insertedData = `INSERT INTO products_table (Product_url, Product_name) VALUES (?, ?)`;
    // console.log(insertedData);
    const newProduct = await mydbQuery(insertedData, [ProductUrl, ProductName]); //
    console.log(newProduct);
    // const productID = newProduct.insertID;
    const productID = newProduct.insertId;

    const insertDescription = `
        INSERT INTO product_description_table
        (Product_id, Product_brief_description, Product_description, Product_img, Product_link)
        VALUES (?, ?, ?, ?, ?)`;

    await mydbQuery(insertDescription, [
      productID,
      ProductBriefDescription,
      ProductDescription,
      ProductImg,
      ProductLink,
    ]);

    const insertPrice = `INSERT INTO product_price_table (Product_id, Starting_price, Price_range) VALUES (?, ?, ?)`;

    await mydbQuery(insertPrice, [productID, StartingPrice, PriceRange]);

    res.send("<h1> Your Product has been added Successfully!");
    // res.redirect("/addiphones");
  } catch (err) {
    console.log("Sorry error adding your product", err);
    res.status(500).send(`${err.message}`);
  }
});

// Route: Get All Products with Description & Price
app.get("/iphones", async (req, res) => {
  const query = `
    SELECT 
      p.Product_id,
      p.Product_name AS Name,
      d.Product_brief_description AS Description,
      p2.Starting_price AS Price,
      p2.Price_range AS Monthly_plan,
      d.Product_link AS Link_destination,
      d.Product_img AS img,
      p.Product_url
    FROM products_table p
    JOIN product_description_table d ON p.Product_id = d.Product_id
    JOIN product_price_table p2 ON p.Product_id = p2.Product_id
  `;

  try {
    const products = await mydbQuery(query); // use our promise wrapper
    res.json({ products }); // send the result as JSON
  } catch (err) {
    console.error("🔥 Error fetching products:", err.message);
    res.status(500).send(" Failed to fetch product data");
  }
});

// // Start The Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running and up!`);
});
