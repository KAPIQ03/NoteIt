# NoteIt

## Opis projektu

NoteIt to aplikacja stworzona w React, umożliwiająca tworzenie i edytowanie własnych notatek za pomocą znaczników markdown. Program na ten moment nie zawiera bazy dancyh ani innego systemu zapisu notatek. Aplikacja została stworzona na potrzeby zaliczenia przedmiotu Języki Skryptowe i Znaczników.

## Technologie

- React
- JavaScript (ES6+)
- HTML5
- CSS3

## Funkcjonalności

- Tworzenie notatek za pomocą znaczników markdown
- Edycja notatek
- Usuwanie notatek
- Pobieranie lub drukowanie notatek

## Instalacja

1. Sklonuj repozytorium:

```bash
git clone https://github.com/KAPIQ03/NoteIt.git
```

2. Przejdź do katalogu projektu:

```bash
cd NoteIt
```

3. Zainstaluj zależności:

```bash
npm install
```

## Uruchomienie

Aby uruchomić aplikację w trybie deweloperskim, użyj:

```bash
npm start
```

Aplikacja będzie dostępna pod adresem: [http://localhost:3000](http://localhost:3000).

## Użytkowanie

Przez brak bazy danych nie działa system logowania i tworzenia użytkownika. Został on stworzony jedynie jako front aplikacji. Aby się zalogować wprować poprawnie skonstrułowany adres e-mail.(np. `a@b.c`)
Jako hasło wpisz: `a`.

![Zrzut ekranu logowania](./docs/Login.jpeg)

Po zalogowaniu można tworzyć notatki kożystając z znaczników markdown.
Przyciski na prawym panelu służą (od prawej):

- przejście do strony startowej z listą wspieranych znaczników
- przejście do widoku druku, lub pobrania notatki w PDF
- usuwanie aktualnej (podświetlonej) notatki
- dodanie nowej notatki

W celu zmiany nazwy notatki wystarczy nacisnąć na jej nazwę w widoku edycji notatki.

![Zrzut ekranu aplikacji](./docs/AppPage.jpeg)

## Autorzy

- Kacper Szamszon
