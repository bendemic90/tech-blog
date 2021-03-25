const newReply = async (event) => {
    event.preventDefault();
  
    const replyBody = document.querySelector('#reply-body').value.trim();
  
    if (replyBody) {
      const response = await fetch(`/api/posts`, {
        method: 'PUT',
        body: JSON.stringify({ replyBody }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

document
  .querySelector('#replyButton')
  .addEventListener('click', newReply)