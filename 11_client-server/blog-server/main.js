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
        a.textContent = `${i}`;

        li.appendChild(a);
        pagesList.appendChild(li);
    };
    numberPage = document.querySelector('.number-page');

    urlParams = new URLSearchParams(window.location.search);
    params = {};

    urlParams.forEach((p, key) => {
        params[key] = p;
    });
    numberPage.textContent = `Страница ${params.page}`;
};

async function createPosts(id, name, description) {
    const postsList = document.querySelector('.posts-list');
    const a = document.createElement('a');
    a.classList.add("post-link");
    a.href = `post.html?id=${id}`;
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

    li.appendChild(a);
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

async function createPostContent() {
    const postItem = document.querySelector('.post-item');
    postContent = '';

    const pageParams = new URLSearchParams(location.search);
    const postId = pageParams.get('id');

    const response = await fetch(`https://gorest.co.in/public-api/posts/${postId}`);
    const result = await response.json();
    const post = result.data;

    postContent += `
         <div class="card1">
            <div class="card-body">
               <h1 class="card-title">${post.title}</h1>
               <p class="card-text">${post.body}</h1>
            </div>
         </div>
    `;
    postItem.innerHTML = postContent;
};

async function createComments() {
    const commentItem = document.querySelector('.comment-item');
    let postComment = '';

    const pageParams = new URLSearchParams(location.search);
    const postId = pageParams.get('id');

    const response = await fetch(`http://gorest.co.in/public-api/comments?post_id=${postId}`);
    const result = await response.json();
    const comment = result.data;

    comment.map(item => {
        postComment = `
        <div class="card1">
           <div class="card-header">
              ${item.email}
           </div>
           <div class="card-body">
              <h1 class="card-title">${item.name}</h1>
              <p class="card-text">${item.body}</h1>
           </div>
        </div>
   `;
        commentItem.innerHTML = postComment;
    })
};

(async function() {
    const postNav = document.querySelector('.pages-list');
    const postPage = document.querySelector('.post-item');

    if (postNav) {
        createPages();
        requestPosts();
    }

    if (postPage) {
        createPostContent();
        createComments();
    }
}());
