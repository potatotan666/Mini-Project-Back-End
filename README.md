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
