# Tech Against Fascism

## Ausgangslage: 

### Big Tech & Autokratie 

Big Tech besitzt zentralisierte, authoritär durchgeführte Infrastrukturen und enorme Macht ohne demokratische Legitimation und ist eng mit Systemen oder Menschen verflochten, die selbst oft autoritär oder faschistoid agieren. Durch soziale Abhängigkeit erzwingt sie faktisch ihre Nutzung, steuert über das sammeln unserer Daten und der Einführung von Algorithmen Verhalten und fördert Polarisierung. Zudem verstärkt KI gesellschaftliche Verzerrungen auf intransparenter, ungefragt genutzter Datenbasis, gilt aber weiterhin als neutral.

### Leseempfehlung: Fighting Tech Fascism

Veröffentlcht am 14. Mai 2025 von Jürgen Geuter aka @tante:
 - https://error417.expectation.fail/406/tech-fascism-not-acceptable/essay-refusing-tech-fascism-by-tante


 > Tech Fascism emerges when a select few have the power to structure the world according to their very limited ideals of efficiency and 'rationality'


### Tech-Regime Mappings 

LittleSis ist eine Open-Source-Datenbank und Rechercheplattform, die Verflechtungen zwischen einflussreichen Personen und Organisationen aus Politik, Wirtschaft und Finanzwelt dokumentiert:

Complex web of AI figures:

- https://littlesis.org/oligrapher/10454-complex-web-of-ai-figures 

Mapping Trump's crypto empire:

- https://map.citationneeded.news/


Palantir, a Big Tech company at the heart of the Trump administration:

- https://multinationales.org/en/investigations/the-reactionary-international-285/palantir-a-big-tech-company-at-the-heart-of-the-trump-administration

*Infographie von Zelda Mauger:*

![image](https://multinationales.org/local/adapt-img/960/20x/IMG/jpg/palantir-en.jpg@.webp?1780904976)


## Strategie 1: Opt Out & Objecting


### Allgemeine Privatsphäre bei (kommerziellen) Anbietern

#### Google
- Google-Datenschutz > Web- und App-Aktivitäten > Deaktivieren
- Standortverlauf / Zeitachse > Deaktivieren
- YouTube-Verlauf > Speicherung deaktivieren

#### WhatsApp
- Einstellungen > Datenschutz > Standard-Nachrichtendauer > 24 Stunden / 7 Tage
- Einstellungen > Chats > Chat-Backup > Ende-zu-Ende-verschlüsseltes Backup > Aktivieren
- Einstellungen > Datenschutz > Profilbild / Zuletzt online / Info > Meine Kontakte oder Niemand

#### Telegram
- Einstellungen > Datenschutz und Sicherheit > Telefonnummer / Profilbild / Zuletzt online > Sichtbarkeit einschränken
- Einzelkontakt öffnen > Profil > Mehr > Geheimen Chat starten

#### Signal
- Einstellungen > Datenschutz > Bildschirmsperre aktivieren
- Einstellungen > Datenschutz > Registrierungs-Sperre aktivieren
- Chat öffnen > Kontaktname > Verschwindende Nachrichten

#### iCloud & iMessage
- Einstellungen > Apple Account > iCloud > Erweiterter Datenschutz > Aktivieren
- Wiederherstellungskontakt oder Wiederherstellungsschlüssel einrichten

#### iPhone – App-Tracking
- Einstellungen > Datenschutz & Sicherheit > Tracking > App-Tracking-Anfragen erlauben > Aus
- Einstellungen > Datenschutz & Sicherheit > Ortungsdienste > App-Berechtigungen einschränken
- Mikrofon / Kamera > Zugriffe nicht benötigter Apps entziehen


### Browser: Firefox (oder Tor) + uBlock Origin + VPN 

Der Browser sieht fast alles, was du im Netz tust. Ein Wechsel weg von Chrome plus Tracker-Blocker reduziert das Datensammeln deutlich.

- [Firefox](https://www.mozilla.org/de/firefox/) – Open Source. Datenschutz auf "Streng" stellen.
- [Tor](https://www.torproject.org/de/) – leitet ihren Datenverkehr über das dezentrale Tor-Netzwerk („The Onion Router“), um Identität und Aktivitäten im Internet zu verschleiern.
- [uBlock Origin](https://ublockorigin.com/) – Blockt Werbung und Tracker, funktioniert in Firefox am besten.
- VPN – Verbirgt deine IP vor besuchten Seiten (aber nicht vor dem VPN-Anbieter selbst) 
    -[RiseUpVPN (BETA)](https://riseup.net/de/vpn ) ist ein kostenloser, quelloffener VPN-Dienst, der vom autonomen Technik-Kollektiv Riseup.net betrieben wird. Er finanziert sich ausschließlich über freiwillige Spenden.
- integrierter Firefox VPN: **eher als Zusatz*. Kostenloses, nur im Browser wirkendes VPN, 50 GB pro Monat. Neuer Dienst von Mozilla selbst, Kritiker bemängeln, dass er noch ungeprüft ist.

#### Grenzen:
- Firefox hängt finanziell an Google, Tor wrid mitfinanziert von US-Regierungsbehörden
- Blocker verhindern nicht, dass Seiten dich per Login, Fingerprint oder IP erkennen.
- Ein VPN verlagert das Vertrauen vom Internetanbieter zum VPN-Anbieter. 

### KI-Objection

#### Instagram & Facebook (Meta)
- Einstellungen > Datenschutz-Center > KI bei Meta > Widerspruch gegen Datennutzung einlegen > Formular absenden

#### LinkedIn
- Profilbild > Einstellungen und Datenschutz > Datenschutz > Daten zur Verbesserung generativer KI > Aus

#### ChatGPT
- Profil > Einstellungen > Datenkontrollen > Das Modell für alle verbessern > Aus

#### Google Gemini
- Gemini > Einstellungen > Gemini-Apps-Aktivität > Keep Activity deaktivieren

#### Claude
- Einstellungen > Datenschutz > Verwendung deiner Daten zur Modellverbesserung deaktivieren


#### Grenzen und Probleme:

- Einstellungen reduzieren Tracking und Datennutzung teilweise, bieten aber keine vollständige, und vor allem rückwirkende sowie wirklich transparent einsehbare, Kontrolle über die eigenen Daten. 
- Nutzer:innen müssen sich kontinuierlich und bei jeder neuen Funktion erneut selbst schützen, während Geschäftsmodelle und Machtverhältnisse der Konzerne unverändert bestehen bleiben.



### Robots.txt

Du kannst eine `robots.txt` in den Root-Verzeichnis deiner Website erstellen (`deine-domain.de/robots.txt`). Sie regelt, welche Bots welche Inhalte crawlen dürfen.

#### Beispiele

**Alle Bots sperren:**
```txt
User-agent: *
Disallow: /
```

**Bestimmte Ordner sperren:**
```txt
User-agent: *
Disallow: /private/
Disallow: /admin/
```

**KI-Training mit Texten einschränken:**
```txt
User-agent: GPTBot
Disallow: /
```

**KI-Crawler von Bildern ausschliessen:**
```txt
User-agent: GPTBot
Disallow: /images/
Disallow: /*.jpg$
Disallow: /*.png$
```

**Google-KI-Nutzung einschränken:**
```txt
User-agent: Google-Extended
Disallow: /
```

**Sensible Bereiche sperren:**
```txt
User-agent: *
Disallow: /kunden/
Disallow: /backup/
Disallow: /user-data/
```

#### Hinweise:
- `User-agent: *` sperrt alle regelkonformen Crawler. Dadurch können auch Bilder aus der Google-Bildersuche verschwinden.
- KI-Dienste lassen sich gezielt ansprechen, z. B. `GPTBot` (OpenAI), `ClaudeBot` (Anthropic) oder `CCBot` (Common Crawl).
- **Keine Garantie:** Crawler können Regeln ignorieren oder ihre Identität verschleiern. `robots.txt` ist kein technischer Zugriffsschutz.


### Aktuelle Bot-Liste: 

[ai.robots.txt](https://github.com/ai-robots-txt/ai.robots.txt)


### .htaccess

Anders als `robots.txt` ist das keine Bitte, sondern wird vom Server durchgesetzt. Die Datei `.htaccess` liegt im Root-Verzeichnis der Website (nur Apache/LiteSpeed, bei nginx wirkungslos).

**KI-Bots sperren:**
```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTP_USER_AGENT} (GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|anthropic-ai|CCBot|Bytespider|Amazonbot|PerplexityBot|meta-externalagent|Diffbot|ImagesiftBot) [NC]
RewriteRule .* - [F,L]
</IfModule>
```

**Einfache Scraper sperren:**
```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTP_USER_AGENT} ^$ [OR]
RewriteCond %{HTTP_USER_AGENT} ^(python-requests|Scrapy|Go-http-client) [NC]
RewriteRule .* - [F,L]
</IfModule>
```
- Wirkt nur bei ehrlichem User-Agent, getarnte Crawler kommen auch heir easy durch.
- Risiko: Tippfehler = Fehler 500. Vorher Kopie der Datei machen und die Seite danach testen.


### A Fly Like Thee

[A Fly Like Thee](https://webresidencies.akademie-solitude.de/a-fly-like-thee/) von Olivier Jonvaux ist ein Open-Source-Plugin, das KI-Crawler erkennt, ihnen statt der Website-Inhalte vier Verse aus William Blakes Gedicht »The Fly« liefert und jeden Bot durch eine animierte Fliege sichtbar macht.


### Nephenes 
https://github.com/NEPENTHESWEB/nepenthes-py
- [Nepenthes](https://github.com/NEPENTHESWEB/nepenthes-py) ist ein Open-Source-Tool (eine sogenannte Tarpit bzw. »Teergrube«), das Webcrawler von KI-Unternehmen in ein endloses Labyrinth aus falschen Seiten und bedeutungslosem Text lockt.
- technisch allerdings im Setup etwas komplitiertzer, wenn ein Tarpit nicht sauber konfiguriert ist, können auch erwünschte Crawler (wie der Googlebot oder Bing) in die Falle tappen.

## +weitere KI-Gegenschritte

### Nightshade & Glaze

- [Nightshade](https://nightshade.cs.uchicago.edu/) – Verändert Bilder durch gezielte Pixelmanipulationen (»Data-Poisioning«) um KI-Trainingsdaten zu verfälschen und das Training an den eigenen Werken zu erschweren.
- [Glaze](https://glaze.cs.uchicago.edu/) – Verändert minimale visuelle Bildmerkmale, sodass KI-Modelle den individuellen Kunststil möglichst schwer imitieren können.

**Aktueller Status (November 2026):** Beide Dienste sind seit Anfang November offenbar nicht erreichbar; die genaue Ursache ist bislang nicht verlässlich bestätigt.

#### Fragliche Wirksamkeit:
Eher Outdated. Beide Tools bieten keinen zuverlässigen Schutz vor KI-Training, da ihre Schutzmechanismen durch technische Gegenmassnahmen umgangen werden können und sie bereits verbreitete Bildkopien nicht nachträglich schützen. Ausserdem: Glaze Kann durch die Stilverschleierung leichte visuelle Veränderungen verursachen, die je nach Bild auffallen können.


## Strategie 2: Alternativen & Föderation 

### Zentrale Netwerke vs. Föderation 

Für einen Kompletten ausstieg aus diesen Infrastrukturen empfiehlt es sich Föderierte Systeme zu nutzen. Föderierte Systeme sind Netzwerke aus eigenständigen, unabhängigen Instanzen (Servern), die über gemeinsame Standards miteinander kommunizieren. Im Gegensatz zu zentralen Systemen, bei denen ein einzelnes Unternehmen alle Daten und Regeln kontrolliert, verteilen föderierte Systeme die Macht auf viele verschiedene Betreiber. Bekannte Beispiele für diese Technologie ist das Fediverse (mit Plattformen wie Mastodon).


### Beispiel Mastodon

[Mastodon](https://joinmastodon.org/de) ist ein dezentrales soziales Netzwerk ähnlich wie vielleicht X (Twitter). Nutzer:innen können Beiträge veröffentlichen, anderen folgen und Inhalte teilen. Mastodon besteht aus vielen unabhängigen Servern, sogenannten Instanzen. Nutzer:innen können selbst entscheiden, welcher Instanz sie beitreten möchten. Die Plattform ist kostenlos, werbefrei und Open Source.

#### Wichtig:
- Home, Lokal und Föderiert sind chronologisch sortiert. Es gibt also keine personalisierte Auswahl nach Likes, Interessen oder Verweildauer. Bei Trends und Vorschlägen gibt es dagegen »algorithmische Elemente«. Aber keine größer, vertsteckter (engagementbasierter) Algorithmus im normalen Feed. (über Drittanbieter kann man sich, dank der offennen API, sich den Content auch algorithmischer kuratieren lassen, siehe z.B: [Fedialgo](https://github.com/rollecode/fedialgo))
  - Kein übermächtiges *Algo Regime* => Weniger Manipulation, mehr Kontrolle.
  - Nachteil: weniger automatische Empfehlungen und Reichweite => neue Inhalte und Accounts muss man eher selbst suchen.

- **Viele Instanzen:** Unterschiedliche Regeln und Communities ermöglichen eine passende Umgebung. Eigene Codes of Conduct können für Safe Spaces und für eine intensivere, authentischere Gemeinschaft sorgen, die Auswahl kann anfangs aber etwas verwirrend sein.

### Probleme mit Telegram

- Telegram ist standardmässig nicht Ende zu Ende (e2e) verschlüsselt (Nachrichten sind serverseitig lesbar!)

- Telegram arbeitet seit einigen Jahren mit Behörden zusammen und gibt Daten an diese weiter ([link](https://cyberinsider.com/telegram-sharing-user-data-with-us-authorities/))

- Unsere Daten sind der willkürlichen Entscheidung von Telegram ausgeliefert

### Alternativen (Privat Chats)

- Die bekannteste und auch sicherste Alternative ist [Signal](https://signal.org/de/)
  - Beste Verschlüsselung (Egal wer Kontrolle über Server hat, Nachrichten + Absender:in sind nicht auslesbar)
  - hat bereits viele User:innen
  - Server ist nicht föderiert und kann von autoritären Staaten geblockt werden ([und wird es bereits](https://ooni.org/post/2021-how-signal-private-messenger-blocked-around-the-world/))
  - Gruppenchats sind auf 1000 Teilnehmer:innen limitiert

- Als Backup zu Signal kann [Delta Chat](https://delta.chat/de/) dienen ([hier ausführlicher](https://signal-contingency-plan.info/))
  - Nachrichten sind auch sehr sicher verschlüsselt
  - Dafür sind ca. die letzten 20 Tage an Kommunikation des Servers dort gespeichert (Nachrichten verschlüsselt, Metadaten nicht verschlüsselt)
  - Durch föderierte Server und einem auf email basierten Protokoll, ist es schwer bis unmöglich Delta Chat komplett zu blockieren

### Alternativen (Channels)

- Da Signal keine Untergruppen unterstützt und Gruppengrössen begrenzt sind, hält das manche grösseren Gruppen vom Wechsel ab. Dafür gibt es zwei Alternativen:

- [mov.im](https://movim.eu/) (keine komplette Empfehlung, da noch sehr buggy)
  - ist ein Client/Bedienoberfläche für [xmpp](https://xmpp.org/), ist föderiert und nutzt e2e Verschlüsselung
    - e2e Verschlüsselung muss bei movim extra aktiviert werden! In den Einstellungen OMEMO aktivieren. Und dann in den Chats das Schloss Symbol klicken.
  - funktioniert ähnlich wie discord und hat ein Blogging Feature
  - ein Account bei jeglichem [xmpp Provider](https://providers.xmpp.net/) reicht aus um mov.im zu benutzen
  - weniger weit verbreitet und buggier, nur als webapp verfügbar (es gibt andere [xmpp Clients (Bedienoberflächen)](https://xmpp.org/software/?category=clients), bei denen aber keine Channels funktionieren)
  - Metadaten sind nicht komplett sicher

- [Matrix](https://matrix.org/) (keine komplette Empfehlung)
  - ist ein föderiertes Protokoll mit e2ee
  - schon weit verbreitet, viele [Homeserver](https://servers.joinmatrix.org/) zur Auswahl
  - Die Burg betreibt auch einen eigenen [Matrix Server](https://matrix.burg-halle.de/#/welcome), der mit den studi Zugangsdaten benutzbar ist
  - Chat Metadaten werden an jeden Homeserver kopiert, deren User:innen teil des Channels sind (leicht auslesbar)
  - Ist nicht DSGVO konform, erfüllt nicht das Recht auf Vergessen ([link](https://www.cr-online.de/blog/2022/06/02/ein-fehler-in-der-matrix/))
  - [FluffyChat](https://fluffychat.im/) kann als Client/Messenger empfohlen werden

- Slack ähnliche Anwendungen, die explizit auf Gruppenchat fokussiert sind (pro Community ein Account) **diese sind serverseitig nicht verschlüsselt**
  - müssen also entweder selbst gehostet werden oder ein vertrauenswürdiger Anbieter gefunden werden
  - [mattermost](https://mattermost.com/)
    - z.B. bei framasoft gehostet ([link](https://framateam.org/login))
  - [zulip](https://zulip.com/)

### Fazit Messenger

Es gibt viele offene und sichere Optionen um von Telegram fort zu kommen. Den Netzwerkeffekt können wir nur durch kollektiven Wechsel bekämpfen. 
**Vor Staatstrojanern oder direkten Zugriff aufs Handy durch andere kann uns kein Messenger schützen!** Trotzdem lohnt es sich sicherere Alternativen zu benutzen.

## Weitere Ressourcen

### Kollaborationstools, gehostet auf Spendenbasis (offene Mitgliedschaft)

- [framasoft](https://framasoft.org/en/) (entwickelt PeerTube) bietet unter:
  - [Entgoogle das Internet](https://degooglisons-internet.org/) viele spendenbasierte Dienste an
  - [framasuite](https://framasuite.org/en/) noch mehr Dienste
  - Fast alle sind offen/mit offener Registrierung benutzbar, wenn ihr diese benutzt, denkt daran zu spenden!
- [chatons](https://entraide.chatons.org/en/) hostet dezentralisiert Dienste

### andere Vereine/Organisationen welche Dienste anbieten

- [riseup](https://riseup.net/): pads, pastebins, wikis für alle + andere Dienste mit Einladung
- [systemli](https://www.systemli.org/index.html): manche Dienste frei, manche mit Einladung
- [servus.at](https://core.servus.at/): viele Dienste (cloud, mail, hosting etc.) mit Mitgliedschaft (10€ p.M.) für Kulturschaffende
- [lurk](https://lurk.org/): xmpp, icecast, wikis, mailinglisten für Mitglieder:innen
- [systemausfall](https://systemausfall.org/index.html): mail, xmpp, cloudspeicher, hosting etc. für Mitglieder:innen

### andere Sammlungen

- [Resistant Infra](https://circulations.constantvzw.org/octomode/infra-resistance/pagedjs.html) von [titipi](https://titipi.org/): gehostete und selbhostbare cloud software, Organisationssoftware, andere Listen :)
- [weird little guys of FOSS](https://drewdevault.com/weird-guys/) von [Drew Devault](https://drewdevault.com/): Faschisten in der Open Source Community
  - [guter Blogbeitrag zum Thema](https://brennan.day/normalized-fascism-in-open-source-12-million-given-to-dhh/) von Brennan Brown
- [Fashware](https://git.sr.ht/~rabbits/fashware) von [devine lu linvega](https://wiki.xxiivv.com/site/devine_lu_linvega.html): Quellen zu fragwürdigem bis faschistischem Verhalten von Tech Unternehmen und Personen des Tech Universums
- [fediverse.party](https://fediverse.party/) Sammlung von Fediverse Diensten
