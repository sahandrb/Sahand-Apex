// script.js

// ===========================
// 1️⃣ منوی موبایل
// ===========================
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===========================
// 2️⃣ تابع بارگذاری هر بخش
// ===========================
async function loadSection(id, path) {
  const container = document.getElementById(id);
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Fail to load ' + path);
    const html = await response.text();
    container.innerHTML = html;
  } catch (err) {
    console.error(err);
    container.innerHTML = `<p style="color:red;text-align:center;">خطا در بارگذاری بخش ${id}</p>`;
  }
}

// ===========================
// 3️⃣ لود تمام بخش‌ها
// ===========================
const sections = [
  {id: 'hero', path: 'hero.html'},
  {id: 'introduction', path: 'introduction.html'},
  {id: 'story', path: 'story.html'},
  {id: 'office', path: 'office.html'},
  {id: 'petshop', path: 'petshop.html'},
  {id: 'philosophy', path: 'philosophy.html'},
  {id: 'bio', path: 'bio.html'},
  {id: 'footer', path: 'footer.html'}
];

sections.forEach(sec => loadSection(sec.id, sec.path));

// ===========================
// 4️⃣ Smooth Scroll برای لینک‌ها
// ===========================
document.addEventListener('click', function(e){
  if(e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')){
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if(targetEl){
      targetEl.scrollIntoView({behavior:'smooth'});
    }
  }
});

// ===========================
// 5️⃣ افکت‌های عمومی (مثل float background و fade-in)
// ===========================
// این بخش می‌تونه فراخوانی JS داخلی هر سکشن را به عهده داشته باشد
// برای مثال Hero, Office, Petshop و ... هر کدام افکت float خودشان را دارند
