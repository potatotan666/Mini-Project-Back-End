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

# POST /merchant

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

# POST /merchant/:id

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
- **Code:** 400
  **Content:** `{message :"Please fill all form!"}`

```
{
    password : string
}
```

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
