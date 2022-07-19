# Mini Project Back End

NodeJS, Express, JWT

## Api Contract

#Merchant

- Merchant Object

```
{
    id : int
    name : string
    password : string
    address : string
    join_date : datetime
    phone_number : string
}
```

# POST /merchant/login

---

Log in system using token as authorization key

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

# GET /merchant

---

Return All Merchant in The System

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    id : int
    name : string
    password : string
    address : string
    join_date : datetime
    phone_number : string
}
```

# GET /merchant/:id

---

Return specified merchant by name

- **URL Params**  
  Required: `name=string`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    id : int
    name : string
    password : string
    address : string
    join_date : datetime
    phone_number : string
}
```

# PUT /merchant/password/:id

---

Updating merchant password

- **URL Params**  
  Required: `id=int`
- **Data Params**

```
    {
        password : string
    }
```

- **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
- **Success Response:**
- **Code:** 200  
  **Content:**
- **Error Respons:"**
- **Code:** 401
  **Content:** `{message :"Unauthorized!"}`
  OR
- **Code:** 400
  **Content:** `{message :"Please fill all form!"}`

# POST /merchant/

---

Create new merchant

- **URL Params**  
  Required: `name=string`
- **Data Params**
  ```
    {
        name:string,
        password:string,
        address:string,
        phone_number:string
    }
  ```
- **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
- **Success Response:**
- **Code:** 201  
  **Content:** `{message: "Success create new data!"}`

# DELETE /merchant/:id

---

Delete specific merchant

- **URL Params**  
  Required: `id=int`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
- **Success Response:**
- **Code:** 200  
  **Content:**
- **Error Respons:"**
- **Code:** 401
  **Content:** `{message :"Unauthorized!"}`
  OR
- **Code:** 200
  **Content:** `{message :"Success deleting data!"}`

#Product

# GET /product/

---

Return specified merchant by name

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    id : int
    merchant_id : int
    name : string
    quantity : int
    price : int
    created_at : datetime
    created_by : datetime
    updated_at : datetime
    updated_by : datetime
}
```

# POST /product/

---

Create new product

- **URL Params**  
  None
- **Data Params**
  ```
    {
        name : string
        quantity : int
        price : int
    }
  ```
- **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
- **Success Response:**
- **Code:** 201  
  **Content:** `{message: "Success create new data!"}`
- **Code:** 400
  **Content:** `{message :"Please fill all form!"}`

# PUT /product/price/:id

---

Updating product price

- **URL Params**  
  Required: `id=int`
- **Data Params**
  ```
    {
        price : int
    }
  ```
- **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
- **Success Response:**
- **Code:** 200  
  **Content:**
- **Error Respons:"**
- **Code:** 401
  **Content:** `{message :"Unauthorized!"}`
  OR
- **Code:** 200
  **Content:** `{message :"Success updating price!"}`

  # PUT /product/quantity/:id

---

Updating product quantity

- **URL Params**  
  Required: `id=int`
- **Data Params**
  ```
    {
        quantity : int
    }
  ```
- **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
- **Success Response:**
- **Code:** 200  
  **Content:**
- **Error Respons:"**
- **Code:** 401
  **Content:** `{message :"Unauthorized!"}`
  OR
- **Code:** 200
  **Content:** `{message :"Success updating price!"}`

# DELETE /merchant/:id

---

Delete specific merchant

- **URL Params**  
  Required: `id=int`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
- **Success Response:**
- **Code:** 200  
  **Content:**
- **Error Respons:"**
- **Code:** 401
  **Content:** `{message :"Unauthorized!"}`
  OR
- **Code:** 200
  **Content:** `{message :"Success deleting data!"}`
