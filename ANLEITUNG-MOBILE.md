# EU AI Act Glossar — Mobile PWA

**Learning Factory · Edition 2026**
Mobile-optimierte Progressive Web App. Installierbar wie eine native App, läuft offline, im Vollbild ohne Browser-Chrome.

---

## 1. Was du bekommen hast

```
glossar-mobile/
├── index.html              ← Mobile App-Shell
├── terms.js                ← Datendatei (identisch zur Desktop-Version)
├── manifest.webmanifest    ← PWA-Manifest (App-Metadaten)
├── sw.js                   ← Service Worker (Offline-Cache)
├── icon-192.png            ← App-Icon klein
├── icon-512.png            ← App-Icon groß
├── icon-maskable-512.png   ← App-Icon für Android Adaptive Icons
└── ANLEITUNG-MOBILE.md     ← dieses Dokument
```

### Mobile-Optimierungen gegenüber Desktop

- **Bottom Sheet** statt aufklappbarer Karten — Detail erscheint von unten, swipe-down zum Schließen
- **Sticky Search** unter dem Header, immer erreichbar
- **Horizontal scrollbare Filter** statt Wrap-Liste
- **Single-Column-Layout** auf Handys, 2 Spalten ab Tablet
- **Größere Touch-Targets** (min. 44×44 px nach Apple-HIG)
- **Auto-Dark-Mode** folgt der Systemeinstellung
- **iPhone-Notch-Support** (Safe-Area-Insets)
- **Sprache wird gemerkt** (localStorage)
- **Suche debounced** (120 ms) — kein Lag beim Tippen
- **Install-Banner** erscheint einmalig, dann unterdrückt
- **Offline-fähig** durch Service Worker

---

## 2. Wichtig: PWA braucht HTTPS

Eine PWA mit Offline-Funktion läuft **nur über HTTPS** (oder `localhost` für Tests). Datei-URL (`file://`) und einfaches HTTP funktionieren nicht — der Service Worker wird sonst vom Browser blockiert.

**Konsequenz für die Veröffentlichung:**
- ✅ GitHub Pages (HTTPS automatisch)
- ✅ Netlify, Vercel, Cloudflare Pages (alle kostenlos, HTTPS automatisch)
- ✅ Eigener Webserver mit Let's Encrypt
- ❌ Datei vom Desktop direkt im Browser öffnen — kein PWA-Modus

---

## 3. Lokal testen

```bash
cd glossar-mobile
python3 -m http.server 8000
```

Dann auf dem **gleichen Computer** öffnen: <http://localhost:8000>

### Auf dem Handy testen — gleiches WLAN-Netz

1. IP-Adresse deines Computers herausfinden:
   - macOS: `ipconfig getifaddr en0` → z. B. `192.168.1.42`
   - Windows: `ipconfig` → "IPv4-Adresse"
   - Linux: `hostname -I`
2. Auf dem Handy im Browser öffnen: `http://192.168.1.42:8000`
3. **Achtung**: Über HTTP funktioniert die App, aber der Service Worker und der Install-Button werden vom Browser blockiert. Für vollen PWA-Test → erst auf GitHub Pages deployen (Schritt 5).

---

## 4. Installieren auf dem Handy

Sobald die App über HTTPS verfügbar ist:

### iPhone (Safari)
1. Seite in Safari öffnen
2. Teilen-Button (Pfeil nach oben) tippen
3. *"Zum Home-Bildschirm"* wählen
4. Bestätigen — Icon erscheint auf dem Home-Bildschirm
5. Beim Öffnen läuft die App im Vollbild, ohne Safari-Leiste

### Android (Chrome / Edge / Brave)
1. Seite öffnen
2. Es erscheint nach kurzem Lesen ein **Install-Banner** unten
3. *"Installieren"* tippen — oder Browser-Menü → *"App installieren"*
4. App erscheint im App-Drawer
5. Beim Öffnen Vollbild-Modus, separates Task-Window

### Desktop (Chrome / Edge)
- Adresszeile rechts: kleines Install-Symbol, Klick installiert die App als Desktop-Anwendung
- Funktioniert nicht in Firefox (begrenzte PWA-Unterstützung)

---

## 5. Veröffentlichen — GitHub Pages

```bash
# Im Repo-Root
mkdir -p docs
cp -r glossar-mobile/* docs/
git add docs/
git commit -m "feat: EU AI Act Glossar Mobile PWA"
git push
```

In GitHub: **Settings → Pages → Source: Deploy from branch → main → /docs**

Nach 1–2 Minuten online unter z. B. `https://iwilfried.github.io/<repo>/`

**Mit eigener Domain**: in den Pages-Settings *Custom domain* setzen, DNS-CNAME einrichten, "Enforce HTTPS" anklicken.

### Tipp: Desktop und Mobile parallel

Du kannst beide Versionen unter einer Domain anbieten:

```
docs/
├── index.html         ← Desktop-Version
├── terms.js
└── m/                 ← Mobile-PWA in Unterverzeichnis
    ├── index.html
    ├── terms.js (Kopie!)
    ├── manifest.webmanifest
    ├── sw.js
    └── icon-*.png
```

Auf der Desktop-Seite kannst du oben einen kleinen Link "📱 Mobile App" einbauen.

---

## 6. Daten erweitern

Die `terms.js` ist **identisch** zur Desktop-Version. Du kannst:

- entweder **eine gemeinsame `terms.js`** pflegen und in beide Ordner kopieren
- oder ein **Build-Skript** schreiben, das die Datei spiegelt

Einfachster Weg: in einem Editor öffnen, neuen Begriff anhängen, dann

```bash
cp glossar/terms.js glossar-mobile/terms.js
```

Format und Felder siehe `glossar/ANLEITUNG.md` (Hauptanleitung).

---

## 7. Service-Worker-Updates

Wenn du `index.html`, `sw.js` oder Icons änderst, müssen Nutzer-Browser den neuen Stand laden. Dafür ist der Versionsstring im Service Worker entscheidend.

**Bei jedem Release**:

1. Öffne `sw.js`
2. Erhöhe `CACHE_VERSION` (z. B. `"v1.0.0"` → `"v1.0.1"`)
3. Deployen

Der Browser registriert beim nächsten Besuch den neuen SW, der alte Cache wird automatisch gelöscht. Nutzer-seitig braucht es ggf. einen Reload.

> Bei reinen Inhaltsänderungen (`terms.js`) ist kein Bump nötig — der SW prüft im Hintergrund auf Aktualisierungen.

---

## 8. Häufige Fragen

**Warum ist der Install-Button erst nach kurzer Zeit sichtbar?**
Browser zeigen den Install-Prompt erst nach ein paar Sekunden Engagement (User scrollt, klickt, etc.) — Browser-Engagement-Heuristik.

**Kann ich die App in den App Stores anbieten?**
Über *PWABuilder* (pwabuilder.com) lässt sich aus einer PWA ein Android-APK / iOS-Wrapper erzeugen, das du in Google Play / Apple App Store einreichen kannst. Apple ist restriktiv, prüft aber neuerdings PWAs durchaus.

**Wie groß darf das Glossar werden, bevor es zu langsam wird?**
Aktuell 53 Begriffe → 75 KB JSON. Bis ~1.000 Begriffe (~1,5 MB) bleibt die App schnell. Darüber hinaus: virtualisiertes Rendering (z. B. nur sichtbare Karten rendern) wäre die nächste Optimierung.

**Kann ich Bilder zu Begriffen hinzufügen?**
Ja, das `terms.js`-Schema lässt sich um ein `image`-Feld erweitern. Müsstest du im Render-Code in `index.html` einbauen. Beim Pre-Cache im Service Worker dann auch ergänzen.

**Funktioniert das Glossar auch mit eingeschalteter dunkler Systemfarbe?**
Ja — automatisch. Die App folgt `prefers-color-scheme`. Heller Modus: warmes Pergament; dunkler Modus: tiefes Navy.

---

**Edition 2026 · Stand 05/2026 · v1.0.0**
