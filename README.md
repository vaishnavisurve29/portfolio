# Personal Portfolio Website - Full Stack Developer (Beginner Level)

A clean, modern, and fully responsive personal portfolio website tailored for **Vaishnavi Surve** (Computer Engineering student / Fresher Full Stack Developer). Built with semantic **HTML5**, clean **CSS3** (Variables, Flexbox, Grid, and Media Queries), and lightweight vanilla **JavaScript**.

---

## 🚀 Live Demo & Repository
- **Developer**: Vaishnavi Surve
- **GitHub Repository**: [https://github.com/vaishnavisurve29/portfolio](https://github.com/vaishnavisurve29/portfolio)
- **Live URL (GitHub Pages)**: [https://vaishnavisurve29.github.io/portfolio/](https://vaishnavisurve29.github.io/portfolio/)
- **Contact Email**: `vaishnavisurve@65gmail.com`

---

## 📌 Project Structure

```
shadowfox/
├── index.html        # Main semantic HTML5 document containing all 5 required sections
├── css/
│   └── style.css     # Modern, clean CSS3 styling, design tokens & responsive media queries
├── js/
│   └── script.js     # Accessible mobile navigation, scroll spy, and client-side form validation
└── README.md         # Project documentation, running instructions, and deployment guide
```

---

## ✨ Features & Requirements Satisfied

### 1. Home / Introduction Section (`#home`)
- Introduction with developer name (**Vaishnavi Surve**), live badge, and title: **Aspiring Full Stack Developer & Computer Engineering Student**.
- Clear call-to-action (CTA) buttons: *"View Projects"* and *"Contact Me"*.
- Direct link to GitHub (`https://github.com/vaishnavisurve29`), LinkedIn placeholder link, and Email (`vaishnavisurve@65gmail.com`) with accessible SVG icons.
- Interactive code window mockup highlighting developer details and core strengths.

### 2. About Section (`#about`)
- Academic background highlighting Computer Engineering coursework (Data Structures, OOP, DBMS, Web Technologies).
- Clear career interests focusing on Full-Stack Development and software engineering.
- Realistic, fresher-appropriate tone with zero exaggerated claims.

### 3. Skills & Tools Section (`#skills`)
- Categorized into 3 logical groups:
  - **Programming Languages**: C++, Java, Python, JavaScript (ES6+).
  - **Frontend Development**: HTML5, CSS3, Responsive Design, Accessibility (ARIA).
  - **Databases & Tools**: SQL, Git & GitHub, VS Code, Browser DevTools.

### 4. Projects Section (`#projects`)
- 4 realistic, student-focused technical project cards:
  1. **Personal Developer Portfolio** (HTML5, CSS3, JavaScript) — *Live Portfolio / Open Source*
  2. **Interactive Task & Notes Manager** (JavaScript, DOM Manipulation, LocalStorage) — *Coursework / Web Practice*
  3. **Student Record Management System** (C++/Python, SQL Database, OOP) — *Coursework / Database Prototype*
  4. **Weather & Forecast Web App** (JavaScript Fetch API, REST API integration) — *API Integration / Practice*
- Each card includes descriptive tags, project summaries, and direct buttons for source code and demos.

### 5. Contact Section (`#contact`)
- Direct contact details panel (Email: `vaishnavisurve@65gmail.com`, GitHub: `vaishnavisurve29`, LinkedIn).
- Comprehensive **client-side form validation**:
  - Full Name validation (required, minimum length).
  - Email format validation (regex matching `name@domain.ext`).
  - Subject and Message validation (minimum character constraints).
  - Real-time error clearance on input and inline error messages with `aria-invalid` states.
  - Informative submission success banner explaining client-side validation nature.

### 6. Responsive Design & Accessibility
- Mobile-first responsive layout with media queries at `1024px`, `768px`, and `480px`.
- Accessible mobile drawer hamburger menu with smooth transitions and `aria-expanded` toggle.
- Skip-to-content accessibility link.
- Fully fluid container layouts ensuring **zero horizontal scrolling / overflow**.

### 7. Footer
- Quick navigation links, social profile shortcuts, copyright notice (`Vaishnavi Surve`), and smooth "Back to Top" navigation.

---

## 💻 How to Run the Project Locally

No build tools, Node.js packages, or complex environments are required!

### Option 1: Direct Browser Open (Easiest)
1. Navigate to the `shadowfox` folder on your computer.
2. Double-click `index.html` (or right-click -> **Open with** -> your favorite browser such as Chrome, Edge, Firefox, or Brave).

### Option 2: VS Code Live Server Extension
1. Open the `shadowfox` folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions Marketplace (`Ctrl+Shift+X`).
3. Right-click `index.html` and select **"Open with Live Server"** (or click the *Go Live* button at the bottom right).
4. The site will launch automatically at `http://127.0.0.1:5500`.

### Option 3: Python Built-in HTTP Server
In your terminal/PowerShell inside the `shadowfox` directory:
```bash
python -m http.server 8000
```
Open your browser and navigate to `http://localhost:8000`.

---

## 🌐 How to Deploy to GitHub Pages (Step-by-Step)

1. **Create Repository on GitHub**:
   - Go to [GitHub - New Repository](https://github.com/new).
   - Repository name: `portfolio` (or `portfolio-website`).
   - Choose **Public** and do not add a README (since you already have this one).
   - Click **Create repository**.

2. **Push Local Code to GitHub**:
   Open PowerShell in `c:\Users\vaishnavi\OneDrive\Desktop\shadowfox` and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Full Stack Developer Portfolio for Vaishnavi Surve"
   git branch -M main
   git remote add origin https://github.com/vaishnavisurve29/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - On GitHub, go to your `portfolio` repository -> **Settings** -> **Pages** (in left sidebar).
   - Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
   - Select Branch: `main`, Folder: `/ (root)`, and click **Save**.
   - Your website will be live in ~1 minute at:
     **`https://vaishnavisurve29.github.io/portfolio/`**

---

## 🔗 Updating Your Exact LinkedIn URL

Once you have your exact LinkedIn URL slug (e.g., `vaishnavi-surve-123456`):
1. Open `index.html`.
2. Find `[YOUR_LINKEDIN]` and replace it with your exact URL or slug.
3. Commit and push the update to GitHub.
