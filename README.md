# 📡 MyPortfolioAPI

Welcome to the **API server** for my personal portfolio! This backend is built with **Express.js** and serves data from **static JSON-like JavaScript files** for certifications, projects, and blogs used in my frontend portfolio site. This API powers the portfolio website by providing real-time data that is dynamically displayed in the frontend.

---

## 🌐 Live API

You can access the live API hosted on **Vercel**:

🔗 [https://my-portfolio-api-lake.vercel.app](https://my-portfolio-api-lake.vercel.app)

### 📁 Available Endpoints

| Endpoint          | Description                          |
| ----------------- | ------------------------------------ |
| `/`               | Base route with API information      |
| `/certifications` | Returns a list of certifications     |
| `/projects`       | Returns a list of portfolio projects |
| `/blogs`          | Returns a list of blog articles      |

---

## 🚀 Tech Stack

- **Backend:** Express.js
- **Hosting:** Serverless deployment on **Vercel**
- **Data Format:** JSON (static in files)
- **CORS Enabled**

---

## 📦 Setup Instructions (Local Development)

1. **Clone the repository**

```bash
git clone https://github.com/Nirob-Barman/MyPortfolioAPI.git
cd MyPortfolioAPI
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the server:**

```bash
npm run dev
```

4. **Open your browser and visit:**

```bash
http://localhost:5000
```

## 🗃 Project Structure

```
MyPortfolioAPI/
├── data/
│   ├── blogsData.js
│   ├── certifications.js
│   └── projectsData.js
├── index.js
├── package.json
└── vercel.json
```



## 🚢 Deployment (Vercel)
This project is serverlessly deployed on Vercel, enabling fast and scalable API access.

<details>
<summary>Click to view vercel.json</summary>

```json
{
    "version": 2,
    "builds": [
        {
            "src": "/index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/",
            "methods": [
                "GET",
                "POST",
                "PUT",
                "PATCH",
                "DELETE",
                "OPTIONS"
            ]
        }
    ]
}
```

</details>


## 🔗 Related Projects

- 🎨 **Frontend Portfolio:** [MyPortfolio](https://github.com/Nirob-Barman/MyPortfolio)
- 🌐 **Live Site:** [nirob-barman-19.web.app](https://nirob-barman-19.web.app)


## ✍️ Author

- 👤 **Nirob Barman**  
- [![Medium](https://img.shields.io/badge/Medium-Blog-black?logo=medium)](https://nirob-barman.medium.com/)
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/nirob-barman/)
- [![Portfolio](https://img.shields.io/badge/Portfolio-Visit-brightgreen?logo=firefox-browser)](https://nirob-barman-19.web.app/)
- [![Email](https://img.shields.io/badge/Email-Contact-orange?logo=gmail)](mailto:nirob.barman.19@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
