# Домашнє завдання: Розширення Express сервера за допомогою мідлварів

## 📌 Опис завдання

**Мета:** вдосконалити Express-сервер за допомогою обов’язкових мідлварів для логування, автентифікації, валідації та обробки помилок.

### ✅ Вимоги:

1. **Технології:** Node.js + Express.js.
2. **Мідлвари:**
    - Логування запитів
    - Обробка помилок
    - Валідація `POST` даних
    - Автентифікація для захищених маршрутів
3. **Роутинг:**
    - `/api/users`, `/api/products`
    - захищено автентифікацією
4. **Порт:** 3000
5. **Формат відповідей:** текстовий або JSON
6. **Архітектура:** MVC з підключеними мідлварами
7. **Менеджер пакетів:** `npm` або `yarn`

---

## 📦 Опис проєкту

Структура:

```
📁 controllers/
  ├── productController.js
  └── userController.js

📁 middlewares/
  ├── adminOnlyMiddleware.js
  ├── authMiddleware.js
  ├── errorHandlerMiddleware.js
  ├── logRequestsMiddleware.js
  └── validationUserInput.js

📁 routes/
  ├── productRoutes.js
  └── userRoutes.js

📄 app.js
```

---

## 🧪 Тестування всіх маршрутів через Postman

### 👤 `/api/users`

#### `POST /register`
- **Body (JSON):**
```json
{ "username": "test", "password": "1234" }
```

#### `POST /login`
- **Body (JSON):**
```json
{ "username": "admin", "password": "1234" }
```

#### `GET /profile`
- **Headers:** `Authorization: admin`

#### `PUT /profile`
- **Headers:** `Authorization: admin`
- **Body (JSON):**
```json
{ "username": "newName" }
```

---

### 🛒 `/api/products`

#### `GET /products`
- Отримати список товарів

#### `GET /products/:id`
- Наприклад: `/api/products/123`

#### `POST /products`
- **Headers:** `Authorization: admin`
- **Body (JSON):**
```json
{ "name": "Product A", "price": 100 }
```

#### `PUT /products/:id`
- **Headers:** `Authorization: admin`
- **Body (JSON):**
```json
{ "name": "Updated Product", "price": 120 }
```

#### `DELETE /products/:id`
- **Headers:** `Authorization: admin`

---

## 🚀 Запуск

```bash
npm install
npm start
# або
npx nodemon app.js
```

Сервер буде доступний на `http://localhost:3000/`

---

## ✅ Результат

- Використані всі необхідні мідлвари
- Роутинг відокремлений
- Дотримано архітектури MVC
- Повна відповідність ТЗ
