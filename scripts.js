document.addEventListener("DOMContentLoaded", function () {
    const recentworkTilte = document.querySelector('.experience .recent-work .title');
    const workExp = document.querySelector('.experience .recent-work .work-exp-container');

    recentworkTilte && recentworkTilte.addEventListener("click", function () {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
            workExp.classList.remove("show");
        } else {
            this.classList.add("active");
            workExp.classList.add("show");
        }
    });

    const menuItems = document.querySelectorAll("header nav ul li");
    menuItems && menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            item.classList.add("active");           
        });
    });

    const menuContianer = document.querySelector("header nav ul");
    menuContianer && menuContianer.addEventListener('click', function () {
        if (window.innerWidth < 1024) {
            this.classList.toggle("show");
        } else {
            if (this.classList.contains("show")) {
                this.classList.remove("show");
            }
        }
    });

    document.querySelector('.btn-mail-copy').addEventListener('click', function() {
        const text = 'hninthuzar.itworld@gmail.com';
        navigator.clipboard.writeText(text).then(function() {
            alert('copied ' + text);
        }).catch(function(err) {
            console.error('Failed to copy text: ', err);
        });
    });
    
});

window.onclick = function(event) {
    const recentworkTilte = document.querySelector('.experience .recent-work .title');
    const workExp = document.querySelector('.experience .recent-work .work-exp-container');
    const recentWork = document.querySelector('.recent-work');
    if (!recentWork.contains(event.target)) {
        if(recentworkTilte.classList.contains("active")) recentworkTilte.classList.remove("active");
        if(workExp.classList.contains("show")) workExp.classList.remove("show");
    }

    const headerMenu = document.querySelector("header nav ul");
    if (!headerMenu.contains(event.target)) {
        if(headerMenu.classList.contains("show")) headerMenu.classList.remove("show");
    }
};