const newReply = async (event) => {
    event.preventDefault();

    const reply_text = document.querySelector('#reply-body').value.trim();
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (reply_text && post_id) {
        const response = await fetch(`/api/replies`, {
            method: 'POST',
            body: JSON.stringify({ post_id, reply_text }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        if (response.ok) {
            document.location.replace('/');

        } else {
            alert('Reply failed')
        }
    }
}

document
    .querySelector('#replyButton')
    .addEventListener('click', newReply);