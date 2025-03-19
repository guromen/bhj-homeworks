let count = 0;
        let isBig = false;
        const cookie = document.getElementById('cookie');
        const counter = document.getElementById('clicker__counter');

        cookie.addEventListener('click', () => {
            count++;
            counter.textContent = count;
            
            if (isBig) {
                cookie.style.width = '200px';
                // cookie.style.height = '150px';
            } else {
                cookie.style.width = '220px';
                // cookie.style.height = '180px';
            }
            
            isBig = !isBig;
        });