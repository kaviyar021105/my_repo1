const searchInput = document.getElementById('search');
    const emojiListContainer = document.getElementById('emoji-list');
    const categoryButtons = document.querySelectorAll('.item1');

   
    const displayEmoji = (emojis) => {
        emojiListContainer.innerHTML = '';
        emojis.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("emoji-cell");
            const emojiCell = document.createElement("span");
            emojiCell.classList.add("emoji");
            emojiCell.innerHTML = item.emoji;
            div.appendChild(emojiCell);
            emojiListContainer.appendChild(div);
        });
    };
    const filterEmoji = (value) => {
        let filteredData;
        if (value.toLowerCase() === "all") {
            filteredData = emojiList;
        } else {
            filteredData = emojiList.filter(e => {
                if (e.description.toLowerCase().includes(value.toLowerCase())) {
                    return true;
                }
                if (e.aliases.some(alias => alias.toLowerCase().includes(value.toLowerCase()))) {
                    return true;
                }
                if (e.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))) {
                    return true;
                }
                return false;
            });
        }
        displayEmoji(filteredData);
    };

    
    searchInput.addEventListener('input', (event) => {
        filterEmoji(event.target.value);
    });

   
    categoryButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const category = event.target.getAttribute('data-category');
            filterEmoji(category);
        });
    });

   
    displayEmoji(emojiList);
