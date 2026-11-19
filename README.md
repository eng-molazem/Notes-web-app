# NotesApp

**🇬🇧 [English](#-english) | 🇸🇦 [العربية](#-العربية)**

---

## 🇬🇧 English

### Overview

A full-stack notes application built with React, Node.js, Express, and MongoDB, featuring user authentication and full CRUD note management.

### Features

- User registration and login.
- Create, read, update, and delete (CRUD) notes.
- Secure authentication with JWT.
- Responsive design.

### Tech Stack

| Layer | Technologies |
|---|---|
| Backend | Node.js, Express.js, MongoDB (Mongoose), JWT, bcryptjs, cookie-parser |
| Frontend | React.js, Redux Toolkit, React Router, Vite |

### Getting Started

#### Prerequisites
- Node.js installed
- MongoDB installed and running

#### Installation

```bash
# Backend
cd Backend
npm install

# Frontend
cd Frontend
npm install
```

#### Running the Application

```bash
# Backend
cd Backend
npm start

# Frontend
cd Frontend
npm run dev
```

Then open `http://localhost:5173` in your browser.

#### Environment Variables (Backend `.env`)

```
PORT=5000
SecriteKey=your_secret_key
```

### API Endpoints

**Auth**
- `POST /auth/register` — Register a new user
- `POST /auth/login` — Login user
- `POST /auth/logout` — Logout user
- `GET /auth/islogin` — Check if user is logged in

**Notes**
- `POST /notes/create` — Create a new note
- `GET /notes/getnotes` — Get all notes
- `PUT /notes/update/:id` — Update a note
- `DELETE /notes/delete/:id` — Delete a note

### License

ISC

### Author

**Mohammad Molazem** — [GitHub](https://github.com/eng-molazem) · [LinkedIn](https://www.linkedin.com/in/mohammad-molazem/)

---

## 🇸🇦 العربية

### نظرة عامة

تطبيق ملاحظات متكامل (Full-stack) مبني بـReact وNode.js وExpress وMongoDB، مع نظام مصادقة للمستخدمين وإدارة كاملة للملاحظات (CRUD).

### المزايا

- تسجيل حساب ودخول للمستخدمين.
- إنشاء، قراءة، تعديل، وحذف الملاحظات (CRUD).
- مصادقة آمنة عبر JWT.
- تصميم متجاوب.

### البنية التقنية

| الطبقة | التقنيات |
|---|---|
| الخلفية (Backend) | Node.js, Express.js, MongoDB (Mongoose), JWT, bcryptjs, cookie-parser |
| الواجهة (Frontend) | React.js, Redux Toolkit, React Router, Vite |

### التشغيل محلياً

#### المتطلبات
- Node.js مثبّت
- MongoDB مثبّتة وتعمل

#### التثبيت

```bash
# الخلفية
cd Backend
npm install

# الواجهة
cd Frontend
npm install
```

#### تشغيل التطبيق

```bash
# الخلفية
cd Backend
npm start

# الواجهة
cd Frontend
npm run dev
```

ثم افتح `http://localhost:5173` في المتصفح.

#### متغيرات البيئة (Backend `.env`)

```
PORT=5000
SecriteKey=your_secret_key
```

### نقاط الوصول (API Endpoints)

**المصادقة**
- `POST /auth/register` — تسجيل مستخدم جديد
- `POST /auth/login` — تسجيل الدخول
- `POST /auth/logout` — تسجيل الخروج
- `GET /auth/islogin` — التحقق من حالة تسجيل الدخول

**الملاحظات**
- `POST /notes/create` — إنشاء ملاحظة جديدة
- `GET /notes/getnotes` — جلب كل الملاحظات
- `PUT /notes/update/:id` — تعديل ملاحظة
- `DELETE /notes/delete/:id` — حذف ملاحظة

### الترخيص

ISC

### المطوّر

**محمد ملازم** — [GitHub](https://github.com/eng-molazem) · [LinkedIn](https://www.linkedin.com/in/mohammad-molazem/)
