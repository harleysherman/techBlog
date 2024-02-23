const editPost = async (event)  => {
    event.preventDefault();

    const editTitle = document.querySelector("#postTitleEdit").value.trim();
    const editDescription = document.querySelector("#postDescriptionEdit").value.trim();
    const id = window.location.toString().split('/')[window.location.toString().split("/").length-1];

    if (editTitle && editDescription) {
        const response = await fetch(`/api/blogpost/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ editTitle, editDescription }),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            document.location.replace(`/edit/${id}`);
            alert('Updated post');
          } else {
            alert('Failed to update post');
          }
    }
}

document.querySelector(".editPostForm").addEventListener("submit", editPost);


