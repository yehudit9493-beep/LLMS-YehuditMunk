
בטח—הנה דף בית מוכן (HTML + CSS/Tailwind) עם עיצוב מודרני. אתה יכול להעתיק לקובץ `index.html` ולהריץ.

> אם אין לך Tailwind מותקן בפרויקט שלך, יש שתי אפשרויות:  
> 1) להשתמש ב-CDN (בדוגמה למטה), או  
> 2) לבנות עם Tailwind דרך npm.  
> בדוגמה למטה השתמשתי ב-CDN.

```html
<!doctype html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>דף בית</title>

    <!-- Tailwind CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
      /* שיפור קטן למעבר חלק */
      html { scroll-behavior: smooth; }
    </style>
  </head>

  <body class="bg-slate-950 text-slate-100">
    <!-- Header -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div class="mx-auto max-w-6xl px-4">
        <div class="flex items-center justify-between py-4">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-lg">
              <!-- אייקון פשוט -->
              <svg viewBox="0 0 24 24" class="h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2l9 6-9 6-9-6 9-6z"/>
                <path d="M3 12l9 6 9-6"/>
                <path d="M3 18l9 6 9-6"/>
              </svg>
            </div>
            <div>
              <p class="font-bold leading-tight">האתר שלך</p>
              <p class="text-xs text-slate-400">דף בית מעוצב ב-Tailwind</p>
            </div>
          </div>

          <nav class="hidden md:flex items-center gap-7 text-sm text-slate-200">
            <a href="#features" class="hover:text-white transition">תכונות</a>
            <a href="#testimonials" class="hover:text-white transition">המלצות</a>
            <a href="#pricing" class="hover:text-white transition">תמחור</a>
            <a href="#faq" class="hover:text-white transition">שאלות</a>
          </nav>

          <div class="flex items-center gap-3">
            <a
              href="#pricing"
              class="hidden sm:inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              הצעת מחיר
            </a>
            <a
              href="#contact"
              class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition"
            >
              צור קשר
            </a>

            <button
              id="menuBtn"
              class="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 hover:bg-white/10 transition"
              aria-label="תפריט"
            >
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 6h16"/>
                <path d="M4 12h16"/>
                <path d="M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        <div id="mobileMenu" class="hidden md:hidden pb-4">
          <nav class="flex flex-col gap-3 text-sm text-slate-200">
            <a href="#features" class="hover:text-white transition">תכונות</a>
            <a href="#testimonials" class="hover:text-white transition">המלצות</a>
            <a href="#pricing" class="hover:text-white transition">תמחור</a>
            <a href="#faq" class="hover:text-white transition">שאלות</a>
          </nav>
          <div class="mt-4 flex gap-3">
            <a
              href="#pricing"
              class="flex-1 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              הצעת מחיר
            </a>
            <a
              href="#contact"
              class="flex-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white hover:opacity-95 transition"
            >
              צור קשר
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <main>
      <section class="relative">
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div class="absolute top-20 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-[40rem] bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-indigo-500/10 blur-3xl"></div>
        </div>

        <div class="mx-auto max-w-6xl px-4">
          <div class="grid items-center gap-10 py-16 md:py-20 md:grid-cols-2">
            <div>
              <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
                <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
                חדש! עיצוב מודרני לדף בית
              </div>

              <h1 class="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
                דף בית שנראה מעולה
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">
                  מהיום הראשון
                </span>
              </h1>

              <p class="mt-5 text-slate-300 leading-relaxed">
                דף נוח לקריאה, כרטיסיות לתכונות, בלוק תמחור, שאלות נפוצות ו-CTA—הכל עם Tailwind.
              </p>

              <div class="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#features"
                  class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition"
                >
                  התחל עכשיו
                </a>
                <a
                  href="#testimonials"
                  class="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-slate-100 hover:bg-white/10 transition"
                >
                  לראות המלצות
                </a>
              </div>

              <div class="mt-8 grid grid-cols-3 gap-3">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-xl font-bold">+120</p>
                  <p class="text-xs text-slate-400">לקוחות</p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-xl font-bold">4.9★</p>
                  <p class="text-xs text-slate-400">דירוג</p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-xl font-bold">&lt; 1h</p>
                  <p class="text-xs text-slate-400">הקמה</p>
                </div>
              </div>
            </div>

            <div>
              <div class="relative rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 shadow-2xl shadow-black/30">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-semibold text-slate-200">תצוגה מקדימה</p>
                  <div class="flex gap-2">
                    <span class="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                  </div>
                </div>

                <div class="mt-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
                  <div class="flex items-center gap-3">
                    <div class="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" class="h-6 w-6 text-white" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 12h-4l-2 3-4-9-2 3H2"/>
                      </svg>
                    </div>
                    <div>
                      <p class="font-bold">קפיצה בויזואל</p>
                      <p class="text-sm text-slate-400">כפתורים, צללים וגרדיאנטים</p>
                    </div>
                  </div>

                  <div class="mt-5 grid gap-3 sm:grid-cols-2">
                    <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p class="text-sm font-semibold">Responsive</p>
                      <p class="text-xs text-slate-400 mt-1">מותאם לכל מסך</p>
                    </div>
                    <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p class="text-sm font-semibold">Tailwind</p>
                      <p class="text-xs text-slate-400 mt-1">קל לעריכה ושדרוג</p>
                    </div>
                    <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p class="text-sm font-semibold">UI נקי</p>
                      <p class="text-xs text-slate-400 mt-1">קריאות גבוהה</p>
                    </div>
                    <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p class="text-sm font-semibold">אינטראקציות</p>
                      <p class="text-xs text-slate-400 mt-1">מעברים והובר</p>
                    </div>
                  </div>

                  <div class="mt-5 flex items-center justify-between">
                    <div>
                      <p class="text-sm text-slate-400">סטטוס</p>
                      <p class="font-bold">מוכן להטמעה</p>
                    </div>
                    <a
                      href="#contact"
                      class="rounded-xl bg-white/10 border border-white/15 px-4 py-2 text-sm font-semibold hover:bg-white/15 transition"
                    >
                      דבר איתנו
                    </a>
                  </div>
                </div>

                <div class="mt-4 flex gap-2">
                  <div class="h-2 flex-1 rounded-full bg-indigo-500/40"></div>
                  <div class="h-2 flex-1 rounded-full bg-fuchsia-500/40"></div>
                  <div class="h-2 flex-1 rounded-full bg-emerald-500/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section id="features" class="py-14 md:py-18">
        <div class="mx-auto max-w-6xl px-4">
          <div class="flex items-end justify-between gap-6">
            <div>
              <p class="text-sm text-fuchsia-300 font-semibold">תכונות</p>
              <h2 class="mt-2 text-2xl md:text-3xl font-extrabold">כל מה שצריך לדף בית שמוכר</h2>
            </div>
            <p class="max-w-md text-slate-300">
              כרטיסיות, היררכיה נכונה, CTA ברור ותחושה פרימיום.
            </p>
          </div>

          <div class="mt-8 grid gap-5 md:grid-cols-3">
            <div class="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div class="h-12 w-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" class="h-6 w-6 text-indigo-200" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2l9 6-9 6-9-6 9-6z"/>
                  <path d="M3 12l9 6 9-6"/>
                </svg>
              </div>
              <h3 class="mt-4 font-bold text-lg">מבנה נקי</h3>
              <p class="mt-2 text-sm text-slate-300 leading-relaxed">
                היררכיה ברורה לעין—כותרות, טקסטים וכרטיסיות שמתנהגים מצוין בכל מסך.
              </p>
            </div>

            <div class="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div class="h-12 w-12 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-400/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" class="h-6 w-6 text-fuchsia-200" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z"/>
                </svg>
              </div>
              <h3 class="mt-4 font-bold text-lg">עיצוב מודרני</h3>
              <p class="mt-2 text-sm text-slate-300 leading-relaxed">
                גרדיאנטים, צללים עדינים ואלמנטים שמרגישים “מוצר”.
              </p>
            </div>

            <div class="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div class="h-12 w-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" class="h-6 w-6 text-emerald-200" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              <h3 class="mt-4 font-bold text-lg">אינטראקציות</h3>
              <p class="mt-2 text-sm text-slate-300 leading-relaxed">
                מעבר חלק, הוברים ו-CTA שמזמין לפעולה.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section id="testimonials" class="py-14 md:py-18">
        <div class="mx-auto max-w-6xl px-4">
          <div class="flex items-end justify-between gap-6">
            <div>
              <p class="text-sm text-indigo-300 font-semibold">המלצות</p>
              <h2 class="mt-2 text-2xl md:text-3xl font-extrabold">מה אומרים הלקוחות</h2>
            </div>
            <p class="max-w-md text-slate-300">
              משפטים קצרים, אמינות וקריאות גבוהה.
            </p>
          </div>

          <div class="mt-8 grid gap-5 md:grid-cols-3">
            <figure class="rounded-3xl border border-white/10 bg-white/5 p-6">
              <blockquote class="text-sm text-slate-300 leading-relaxed">
                “נראה מקצועי מאוד. הטמעה הייתה מהירה והמסך פשוט עובד.”
              </blockquote>
              <figcaption class="mt-4 flex items-center gap-3">
                <div class="h-10 w-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30"></div>
                <div>
                  <p class="font-bold text-sm">דנה</p>
                  <p class="text-xs text-slate-400">ניהול מוצר</p>
                </div>
              </figcaption>
            </figure>

            <figure class="rounded-3xl border border-white/10 bg-white/5 p-6">
              <blockquote class="text-sm text-slate-300 leading-relaxed">
                “העיצוב ברור ואלגנטי, וה-CTA תופס את העין בלי להיות אגרסיבי.”
              </blockquote>
              <figcaption class="mt-4 flex items-center gap-3">
                <div class="h-10 w-10 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-400/30"></div>
                <div>
                  <p class="font-bold text-sm">איתי</p>
                  <p class="text-xs text-slate-400">יזם</p>
                </div>
              </figcaption>
            </figure>

            <figure class="rounded-3xl border border-white/10 bg-white/5 p-6">
              <blockquote class="text-sm text-slate-300 leading-relaxed">
                “מושלם למי שרוצה דף בית מודרני בלי להתחיל מאפס.”
              </blockquote>
              <figcaption class="mt-4 flex items-center gap-3">
                <div class="h-10 w-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30"></div>
                <div>
                  <p class="font-bold text-sm">עדי</p>
                  <p class="text-xs text-slate-400">שיווק</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- Pricing -->
      <section id="pricing" class="py-14 md:py-18">
        <div class="mx-auto max-w-6xl px-4">
          <div class="flex items-end justify-between gap-6">
            <div>
              <p class="text-sm text-fuchsia-300 font-semibold">תמחור</p>
              <h2 class="mt-2 text-2xl md:text-3xl font-extrabold">בחר את החבילה שמתאימה לך</h2>
            </div>
            <p class="max-w-md text-slate-300">3 רמות, עיצוב אחיד והדגשת החבילה המומלצת.</p>
          </div>

          <div class="mt-8 grid gap-5 md:grid-cols-3">
            <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 class="text-lg font-bold">בסיס</h3>
              <p class="mt-2 text-sm text-slate-300">לנוכחות מהירה</p>
              <div class="mt-5">
                <p class="text-4xl font-extrabold">₪99</p>
                <p class="text-sm text-slate-400">לחודש</p>
              </div>
              <ul class="mt-6 space-y-3 text-sm text-slate-300">
                <li class="flex gap-2"><span class="text-emerald-300">✓</span> דף בית אחד</li>
                <li class="flex gap-2"><span class="text-emerald-300">✓</span> עיצוב מותאם מובייל</li>
                <li class="flex gap-2"><span class="text-emerald-300">✓</span> תמיכה בסיסית</li>
              </ul>
              <a href="#contact" class="mt-7 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-white/10 transition">
                להתחיל
              </a>
            </div>

            <div class="rounded-3xl border border-fuchsia-400/30 bg-gradient-to-b from-fuchsia-500/15 to-white/5 p-6 relative overflow-hidden">
              <div class="absolute -top-3 left-6 rounded-full bg-fuchsia-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
                מומלץ
              </div>
              <h3 class="text-lg font-bold mt-6">פרו</h3>
              <p class="mt-2 text-sm text-slate-200">לצמיחה מהירה</p>
              <div class="mt-5">
                <p class="text-4xl font-extrabold">₪199</p>
                <p class="text-sm text-slate-400">לחודש</p>
              </div>
              <ul class="mt-6 space-y-3 text-sm text-slate-200">
                <li class="flex gap-2"><span class="text-emerald-300">✓</span> עד 5 עמודים</li>
                <li class="flex gap-2"><span class="text-emerald-300">✓</span> רכיבים מוכנים</li>
                <li class="flex gap-2"><span class="text-emerald-300">✓</span> אופטימיזציה בסיסית</li>
              </ul>
              <a href="#contact" class="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-95 transition">
                לבחור פרו
              </a>
            </div>

            <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 class="text-lg font-bold">עסק</h3>
              <p class="mt-2 text-sm text-slate-300">לפרויקטים מתקדמים</p>
              <div class="mt-5">
                <p class="text-4xl font-extrabold">₪399</p>
                <p class="text-sm text-slate-400">לחודש</p>
              </div>
              <ul class="mt-6 space-y-3 text-sm text-slate-300">
                <li class="flex gap-2"><span class="text-emerald-300">✓</span> עד 10 עמודים</li>
                <li class="flex gap-2"><span class="text-emerald-300">✓</span> התאמות לפי צורך</li>
                <li class="flex gap-2"><span class="text-emerald-300">✓</span> עדיפות בתמיכה</li>
              </ul>
              <a href="#contact" class="mt-7 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-white/10 transition">
                לדבר עם צוות
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" class="py-14 md:py-18">
        <div class="mx-auto max-w-6xl px-4">
          <div class="flex items-end justify-between gap-6">
            <div>
              <p class="text-sm text-indigo-300 font-semibold">שאלות נפוצות</p>
              <h2 class="mt-2 text-2xl md:text-3xl font-extrabold">יש לך תהיות? הנה תשובות</h2>
            </div>
            <p class="max-w-md text-slate-300">בלוק FAQ פשוט וקריא.</p>
          </div>

          <div class="mt-8 grid gap-4 md:grid-cols-2">
            <details class="group rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary class="cursor-pointer list-none font-bold">
                כמה זמן לוקח להעלות דף בית?
                <span class="float-left text-fuchsia-300 group-open:rotate-45 transition">+</span>
              </summary>
              <p class="mt-3 text-sm text-slate-300 leading-relaxed">
                לרוב אפשר להתחיל תוך זמן קצר, תלוי בהיקף ובחומרים שיש ברשותכם.
              </p>
            </details>

            <details class="group rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary class="cursor-pointer list-none font-bold">
                האם זה באמת עובד במובייל?
                <span class="float-left text-fuchsia-300 group-open:rotate-45 transition">+</span>
              </summary>
              <p class="mt-3 text-sm text-slate-300 leading-relaxed">
                כן—העיצוב רספונסיבי ומותאם למסכים שונים.
              </p>
            </details>

            <details class="group rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary class="cursor-pointer list-none font-bold">
                אפשר לשנות צבעים וטקסט?
                <span class="float-left text-fuchsia-300 group-open:rotate-45 transition">+</span>
              </summary>
              <p class="mt-3 text-sm text-slate-300 leading-relaxed">
                בהחלט. הכל בנוי על Tailwind וקל לעריכה.
              </p>
            </details>

            <details class="group rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary class="cursor-pointer list-none font-bold">
                האם יש התאמה לדפדפנים שונים?
                <span class="float-left text-fuchsia-300 group-open:rotate-45 transition">+</span>
              </summary>
              <p class="mt-3 text-sm text-slate-300 leading-relaxed">
                העיצוב בנוי בצורה סטנדרטית, כך שהוא אמור לעבוד היטב בדפדפנים נפוצים.
              </p>
            </details>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="py-14 md:py-18">
        <div class="mx-auto max-w-6xl px-4">
          <div class="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
            <div class="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p class="text-sm text-fuchsia-300 font-semibold">צור קשר</p>
                <h2 class="mt-2 text-2xl md:text-3xl font-extrabold">בואו נבנה משהו יפה ביחד</h2>
                <p class="mt-4 text-slate-300 leading-relaxed">
                  השאירו פרטים ונחזור אליכם. (אפשר לשנות את הטופס לקישור/Backend שלכם.)
                </p>

                <div class="mt-6 flex flex-wrap gap-3">
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">תגובה מהירה</span>
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">עיצוב מותאם</span>
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">תמיכה לאורך הדרך</span>
                </div>
              </div>

              <form class="space-y-4" onsubmit="event.preventDefault(); alert('הטופס נשלח (דמו).');">
                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="block">
                    <span class="text-sm text-slate-200">שם</span>
                    <input class="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 outline-none focus:border-fuchsia-400/40"
                      type="text" required placeholder="לדוגמה: דנה" />
                  </label>
                  <label class="block">
                    <span class="text-sm text-slate-200">אימייל</span>
                    <input class="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 outline-none focus:border-indigo-400/40"
                      type="email" required placeholder="name@example.com" />
                  </label>
                </div>

                <label class="block">
                  <span class="text-sm text-slate-200">מה תרצו לבנות?</span>
                  <textarea class="mt-2 min-h-[120px] w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 outline-none focus:border-fuchsia-400/40"
                    required placeholder="כתבו כאן בקצרה..."></textarea>
                </label>

                <button
                  type="submit"
                  class="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-3 font-semibold text-white shadow-lg hover:opacity-95 transition"
                >
                  שלח פנייה
                </button>

                <p class="text-xs text-slate-400">
                  * זהו דמו—כדי לחבר אמיתי לשרת, החליפו את פעולת הטופס ב-API שלכם.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="border-t border-white/10 py-10">
        <div class="mx-auto max-w-6xl px-4">
          <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p class="text-sm text-slate-400">
              © <span id="year"></span> האתר שלך. כל הזכויות שמורות.
            </p>
            <div class="flex gap-4 text-sm">
              <a href="#features" class="text-slate-300 hover:text-white transition">תכונות</a>
              <a href="#pricing" class="text-slate-300 hover:text-white transition">תמחור</a>
              <a href="#contact" class="text-slate-300 hover:text-white transition">צור קשר</a>
            </div>
          </div>
        </div>
      </footer>
    </main>

    <script>
      // שנה שנה נוכחית
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');

      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
    </script>
  </body>
</html>
```

רוצה שאכוון את הדף לפי האתר שלך?
תגיד לי בבקשה:
1) שם האתר והצבעים המועדפים (או “כמו בדמו”)
2) מה העסק שלך ומה 3 התכונות המרכזיות
3) האם אתה רוצה 1 עמוד (Home בלבד) או גם דפי משנה (About / Services וכו’)