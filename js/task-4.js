const registerForm = document.querySelector('.login-form');

registerForm.addEventListener("submit", event => {
	event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
     
    if (email === "" || password === "") {
        return console.log('All form fields must be filled in');
    }
    const formData = { email, password }; // utworzono obiekt z danymi
    console.log(formData); // wypisanie danych w konsoli
        form.reset(); // zresetowanie formularza
});





// Zadanie 4

// Napisz skrypt do zarządzania formularzem logowania.

// Przetwarzanie wysyłania formularza form.login-form powinno odbywać się poprzez zdarzenie submit.
// Podczas wysyłania formularza strona nie powinna być przeładowywana.
// Jeśli podczas submit w formularzu są nieuzupełnione pola, wyświetl alert z komunikatem 'All form fields must be filled in'. Nie dodawaj atrybutu required do inputów, walidacja powinna odbywać się za pomocą JS.
// Jeśli użytkownik wypełnił wszystkie pola i wysłał formularz, zbierz wartości pól do obiektu z dwoma właściwościami, gdzie kluczem jest nazwa inputów, a wartością są odpowiednie wartości tych inputów, oczyszczone z białych znaków na krawędziach. Do uzyskania dostępu do elementów formularza użyj właściwości elements.
// Przy submit formularza wypisz obiekt z wprowadzonymi danymi w konsoli i zresetuj wartości pól formularza za pomocą metody reset.


// Na co zwróci uwagę mentor podczas sprawdzania:

// Nasłuchuje zdarzenia submit.
// Podczas wysyłania formularza strona nie jest przeładowywana.
// Jeśli podczas submit w formularzu są nieuzupełnione pola, wyświetla alert.
// Przy submit formularza w konsoli wypisuje obiekt z dwoma właściwościami, gdzie klucze to nazwy inputów, a wartości to odpowiednie wartości tych inputów, oczyszczone z białych znaków na krawędziach.
// Po submit formularza wartości pól są czyszczone.
