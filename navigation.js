/* Google Font Import (Add in your HTML <head> if not already) */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Roboto:wght@300;400;500&display=swap');

/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(to bottom right, #f5fff8, #e6f4ea);
    color: #2e3c2f;
    scroll-behavior: smooth;
    line-height: 1.8;
}

/* Layout */
.container {
    display: flex;
    min-height: 100vh;
}

/* Sidebar Navigation */
.sidebar {
    width: 260px;
    background: linear-gradient(to bottom, #d0e9ca, #bce2b6);
    padding: 30px 20px;
    position: sticky;
    top: 0;
    height: 100vh;
    box-shadow: 3px 0 10px rgba(0,0,0,0.08);
    z-index: 10;
}

.sidebar h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: #1b5e20;
    margin-bottom: 25px;
    border-bottom: 2px solid #81c784;
    padding-bottom: 10px;
}

.sidebar ul {
    list-style: none;
}

.sidebar li {
    margin: 18px 0;
}

.sidebar a {
    text-decoration: none;
    color: #2e7d32;
    font-weight: 500;
    font-size: 1rem;
    display: block;
    transition: all 0.3s ease;
    padding: 8px 12px;
    border-radius: 8px;
}

.sidebar a:hover,
.sidebar a.active {
    background-color: #a5d6a7;
    color: #1b5e20;
}

/* Main content */
.content {
    flex: 1;
    padding: 50px;
    animation: fadeIn 0.6s ease-in-out;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
}

#rice_head {
    font-family: 'Playfair Display', serif;
    font-size: 2.8rem;
    text-align: center;
    margin-bottom: 40px;
    color: #2e7d32;
    position: relative;
}

#rice_head::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #81c784;
    margin: 12px auto 0;
    border-radius: 4px;
}

/* Image section */
#paddy_img {
    text-align: center;
    margin-bottom: 40px;
}

#paddy_img img {
    max-width: 90%;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    transition: transform 0.5s ease;
}

#paddy_img img:hover {
    transform: scale(1.03);
}

/* Section Styling */
section {
    margin-bottom: 60px;
    padding: 30px;
    background-color: #ffffffcc;
    border-left: 6px solid #aed581;
    border-radius: 12px;
    box-shadow: 0 6px 14px rgba(0,0,0,0.06);
    transition: transform 0.4s ease;
}

section:hover {
    transform: translateY(-5px);
}

h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #33691e;
}

h3 {
    font-size: 1.2rem;
    margin-top: 20px;
    color: #558b2f;
}

ul, ol {
    padding-left: 25px;
}

li {
    margin-bottom: 10px;
    font-size: 1rem;
    transition: all 0.2s ease;
}

li:hover {
    color: #1b5e20;
    transform: translateX(5px);
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
        box-shadow: none;
    }

    .content {
        padding: 30px 20px;
    }

    section {
        padding: 20px;
    }
}
