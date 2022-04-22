async function loadTodoItems() {
    const response = await fetch('https://gorest.co.in/public-api/posts?');
    const data = await response.json();
    console.log(data);
}
loadTodoItems()
