const newReply = async (event) => {
    event.preventDefault();

    const reply_text = document.querySelector('#reply-body').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (reply_text) {
        const response = await fetch('/api/replies', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                reply_text,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();

        } else {
            alert('Reply failed')
        }
    }
}

document
    .querySelector('#replyButton')
    .addEventListener('click', newReply);