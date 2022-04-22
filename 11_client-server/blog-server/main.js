const containerBlogs = document.getElementById('containerBlogs');
const containerPosts = document.getElementById('containerPosts');
const listsPages = document.getElementById('list__pages');


const loadBlogs = async() => {
    const pageParams = new URLSearchParams(location.search);
    const postPages = pageParams.get('page');

    const response = await fetch(`https://gorest.co.in/public-api/posts?page=${postPages == null ? 1 : postPages}`);
    const result = await response.json();

    //  console.log(result);
    return {
        posts: result.data,
        pagination: result.meta.pagination,
    };
};

const createPosts = async() => {
    const pages = await loadBlogs();
    let listPages = '';

    for (let i = 1; i <= pages.pagination.pages; i++) {

        listPages += `
        <li class="page-item">
             <a class="page-link" href="https://gorest.co.in/public-api/posts?page=${i}">
                 Стр - ${i}
             <a/>
        </li>`;
    }
    listsPages.innerHTML = listPages;
}
createPosts()

const createBlogs = async() => {
    const blogs = await loadBlogs();


    console.log(blogs.posts)


}
createBlogs()
