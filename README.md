🎬 Movie Website

A simple React-based Movie Website where users can sign up, sign in, explore a list of movies, and add favorites to their wishlist — all managed using local state (Redux Toolkit).

🚀 Features

🔐 Signup / Signin – User can create an account and log in (handled locally).

🏠 Home Page – Displays movie cards from static data.

❤️ Like Movies – Click on the heart icon to add or remove movies from the wishlist.

💾 Wishlist Section – Displays all liked movies.

🔍 Search Functionality – Filter movies by name.

🌗 State Management – Handled using Redux Toolkit.

🧰 Tech Stack

Frontend: React.js (Vite or CRA)

State Management: Redux Toolkit

Styling: CSS Modules

Data: Static JSON (data.js)

📁 Folder Structure
```
src/
│
├── components/
│ ├── SignUpPopUp.jsx
│ ├── ValidationSchema.jsx
│
├── CSS/
│ ├── Card.module.css
│ ├── Carousel.css
│ ├── CustomTextInputs.css
│ ├── Favourites.module.css
│ ├── Home.module.css
│ ├── Navbar.module.css
│ ├── SignInInputs.module.css
│ ├── SignUpInputs.module.css
│ └── SignUpUI.module.css
│
├── data/
│ └── data.js
│
├── store/
│ ├── favouriteSlice.js
│ ├── searchFilterSlice.js
│ ├── signinSlice.js
│ ├── signupSlice.js
│ └── index.js
│
├── App.jsx
├── App.css
├── main.jsx
├── index.css
└── index.html
```

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/<your-username>/movie-website.git
cd movie-website

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev

Then open http://localhost:5173/
in your browser.

🧩 How It Works

Sign Up – Register using name, email, and password (stored locally).

Sign In – Login with registered credentials.

Browse Movies – View a list of static movies from data.js.

Add to Wishlist – Click ❤️ to like/unlike movies.

View Wishlist – Go to “Favourites” to see liked movies.

Search – Filter movies by title dynamically.

👨‍💻 Author
Nisarg
📧 solankinisarg815@gmail.com
💼 https://www.linkedin.com/in/nisarg-solanki-808113292/
