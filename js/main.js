// task 1


let fruits = [
    {name: "banana", count: 10},
    {name: "orange", count: 12},
    {name: "apple", count: 20},
    {name: "pineapple", count: 2},
    {name: "peach", count: 18}
    ];
    function f(arr, paramName) {
      return arr.map (item => item[paramName]);
    };
    console.log(f(fruits, 'name'));
    console.log(f(fruits, 'count'));


    // task 2

    let read = [
      {name: "Anna", books: ["Harry Potter", "War and Peace"]},
      {name: "Olya", books: ["Winnie-the-Pooh", "Airport"]},
      {name: "Alexander", books: ["Three Men in a Boat", "Jane Eyre"]},
      {name: "Denis", books: ["Leaving Time", "The Atlantis Gene"]},
      {name: "Leo", books: ["The Martian", "Sherlock Holmes"]},
      ];
      function func (arr){
        return arr.reduce ((acc, item) => {
           if(item.books){ 
            acc.push(item.books);
            return acc;
           }
        },[]);
    };
    alert(func (read));
    