# EmailJS Quick Setup

## Template erstellen (nur 2 Minuten!)

1. Gehe zu https://dashboard.emailjs.com/admin/template
2. Klicke auf **"Create New Template"**
3. Fülle folgendes aus:

**Template Name:** Kontaktformular

**Subject:** Neue Kontaktanfrage von {{from_name}}

**Content (HTML):**
```
Name: {{from_name}}
E-Mail: {{from_email}}
Telefon: {{phone}}

Nachricht:
{{message}}
```

**To Email:** timobeyer_@outlook.de

4. Klicke auf **"Save"**
5. Kopiere die **Template ID** (sieht aus wie: `template_xxxxxxx`)

## Template ID in .env.local eintragen

Füge diese Zeile zu deiner `.env.local` hinzu:
```
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=deine_template_id_hier
```

## Fertig! 🎉

Das war's! Das Formular sendet jetzt direkt an timobeyer_@outlook.de





