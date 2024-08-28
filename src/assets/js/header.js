export function toggleNavbar() {
    const hamburgerToggle = document.querySelector(".hamburger-toggle");
    const navbarLinks = document.querySelector(".navbar-links");

    hamburgerToggle.addEventListener("click", () => {

        navbarLinks.classList.toggle("active");
        //class改成active後就執行.navbar-links.active的css，也就是display: flex
        hamburgerToggle.classList.toggle("toggle"); //class改成toggle
    })
    document.addEventListener('DOMContentLoaded', function () {
        const phoneDiv = document.querySelector('.phone');
        const emailDiv = document.querySelector('.email');
    
        // 确保元素存在后添加事件监听器
        if (phoneDiv) {
            phoneDiv.addEventListener('click', function () {
                const phoneP = this.querySelector('p');
                // 检查元素的显示状态并切换
                if (phoneP.style.display === 'none' || phoneP.style.display === '') {
                    phoneP.style.display = 'block';
                } else {
                    phoneP.style.display = 'none';
                }
            });
        }
    
        if (emailDiv) {
            emailDiv.addEventListener('click', function () {
                const emailP = this.querySelector('p');
                // 检查元素的显示状态并切换
                if (emailP.style.display === 'none' || emailP.style.display === '') {
                    emailP.style.display = 'block';
                } else {
                    emailP.style.display = 'none';
                }
            });
        }
    });
    

}

