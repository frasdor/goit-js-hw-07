const categories = document.querySelectorAll("#categories .item")
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`);
    const numberOfElements = category.querySelectorAll('ul li').length;
    console.log(`Elements: ${numberOfElements}`);
});



// Z wykorzystaniem właściwości i metod elementów DOM napisz skrypt, który:

// Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementów li.item.
// Dla każdego elementu li.item na liście ul#categories znajdzie i wypisze w konsoli tekst nagłówka elementu (tagu <h2>) oraz liczbę elementów w kategorii (wszystkich <li>, które są w nim zagnieżdżone).


// Na co zwróci uwagę mentor podczas sprawdzania:

// Liczba kategorii, ich nazwa i liczba elementów uzyskane za pomocą właściwości i metod elementów DOM.
// Dane dla każdej kategorii zostały uzyskane i wypisane w konsoli w ciele pętli lub metody forEach().
// W konsoli powinien być wyświetlony następujący komunikat: