# EmailJS Setup - Einfache Anleitung

## Schritt 1: EmailJS Account erstellen
1. Gehe zu https://www.emailjs.com/
2. Erstelle einen kostenlosen Account (200 E-Mails/Monat kostenlos)

## Schritt 2: Email Service einrichten
1. Im Dashboard: **Email Services** → **Add New Service**
2. Wähle deinen E-Mail-Provider (z.B. Gmail, Outlook, etc.)
3. Folge den Anweisungen zur Verbindung
4. **Service ID** merken/kopieren

## Schritt 3: Email Template erstellen
1. Im Dashboard: **Email Templates** → **Create New Template**
2. Verwende folgende Template-Variablen:
   - `{{from_name}}` - Name des Absenders
   - `{{from_email}}` - E-Mail des Absenders
   - `{{phone}}` - Telefonnummer
   - `{{message}}` - Nachricht
   - `{{to_email}}` - Empfänger (timobeyer_@outlook.de)

3. Beispiel Template:
   ```
   Betreff: Neue Kontaktanfrage von {{from_name}}
   
   Name: {{from_name}}
   E-Mail: {{from_email}}
   Telefon: {{phone}}
   
   Nachricht:
   {{message}}
   ```

4. **To Email** setzen auf: `timobeyer_@outlook.de`
5. **Template ID** merken/kopieren

## Schritt 4: Public Key holen
1. Im Dashboard: **Account** → **General**
2. **Public Key** kopieren

## Schritt 5: Umgebungsvariablen setzen
Erstelle eine `.env.local` Datei im `sp-fitness-web` Ordner:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=deine_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=deine_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=dein_public_key
```

## Fertig! 🎉
Das Formular sendet jetzt direkt E-Mails an timobeyer_@outlook.de

