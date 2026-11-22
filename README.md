# 🎯 JEE Formula Vault

> An intuitive, story-powered, visual formula vault for high-yield JEE Main & Advanced revision.

## ✨ Features
- **Proper LaTeX / KaTeX Rendering**: Formatted with real mathematical notation.
- **Intuitive Story Explanations**: Tells you *why* each formula exists and the physical mental model behind it.
- **Exam Traps & Kota Tips**: Highlights the exact traps where JEE question setters fool students.
- **Interactive Diagrams**: Embedded SVG diagrams for concepts like photoelectric effect, crystal field splitting, Bohr orbits, and tangency.
- **Subject & Chapter Filtering**: Easily toggle between Physics, Chemistry, and Math.
- **Real-Time Instant Search**: Search any formula, concept, or variable name.
- **⭐ Bookmark Revision List**: Save the toughest formulas to review the morning of your exam.
- **Copy Formula**: One-click copy LaTeX code.

## 🚀 How to Open
1. Open File Explorer to:
   `C:\Users\chary\.gemini\antigravity\scratch\jee-formula-vault`
2. Double-click **`index.html`** to open it in your browser (Chrome, Edge, Brave, etc.).
3. No installation, server, or npm packages required—it runs locally and instantly!

## 🛠️ How to Add More Formulas
Simply open `data.js` and add a new object to `FORMULAS_DATA`:
```javascript
{
  id: "p8",
  subject: "physics", // 'physics', 'chemistry', or 'math'
  chapter: "Electrostatics",
  title: "Electric Dipole on Axial & Equatorial Line",
  latex: "E_{\\text{axial}} = \\frac{2kp}{r^3}, \\quad E_{\\text{equatorial}} = \\frac{kp}{r^3}",
  story: "At large distances, the opposite charges almost cancel out...",
  funNote: "Notice it drops as 1/r³ instead of 1/r² like a point charge!",
  diagram: null
}
```
