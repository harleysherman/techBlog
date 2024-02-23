const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blogTitleEnter').value.trim();
  const description = document.querySelector('#blogDescriptionEnter').value.trim();

  if (title && description) {
    const response = await fetch(`/api/blogpost`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogpost/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.newPostForm')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blogPostContainer')
  .addEventListener('click', delButtonHandler);
