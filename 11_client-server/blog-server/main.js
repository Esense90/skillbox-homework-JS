async function getPostsData() {
    const pageParams = new URLSearchParams(location.search);
    const postPage = pageParams.get('page');

    const response = await fetch(`https://gorest.co.in/public-api/posts?page=${postPage == null ? 1 : postPage}`);
    const result = await response.json();

    return {
        posts: result.data,
        pagination: result.meta.pagination,
    }
};

async function createPages() {
    const pagesArr = await getPostsData();
    const pagesList = document.querySelector('.pages-list');

    for (let i = 1; i <= pagesArr.pagination.pages; i++) {

        let li = document.createElement('li');
        let a = document.createElement('a');

        li.classList.add('page-item', 'item');
        a.classList.add('page-link');
        a.href = `index.html?page=${i}`
        a.textContent = `Стр ${i}`;

        li.appendChild(a);
        pagesList.appendChild(li);
    };
};
createPages();

async function createPosts(id, name, description) {
    const postsList = document.querySelector('.posts-list');
    const li = document.createElement('li');
    li.classList.add("card");
    li.classList.add("col-md-3");
    li.setAttribute("data-id", id);
    const title = document.createElement('h2');
    title.classList.add("item-title");
    const text = document.createElement('p');
    text.classList.add("item-body");

    title.innerHTML = name;
    text.innerHTML = description;

    li.appendChild(title);
    li.appendChild(text);

    postsList.appendChild(li);
};

async function requestPosts() {
    const reqPost = await getPostsData();

    reqPost.posts.forEach((post) => {
        createPosts(post.id, post.title, post.body)
    });
};
requestPosts();
