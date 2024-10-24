document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleSidebarBtn = document.getElementById("toggleSidebar");
    const sidebarIcon = document.getElementById("sidebar-icon");
    const masterItem = document.getElementById("master");
    const subNav = masterItem.querySelector(".sub-nav");
    const toggleIcon = masterItem.querySelector(".nav-text133");
    const submenuItems = document.querySelectorAll('.has-submenu');

    toggleSidebarBtn.addEventListener("click", function () {
        sidebar.classList.toggle("closed"); 

        if (sidebar.classList.contains("closed")) {
            sidebarIcon.style.left = "8px"; 
            sidebarIcon.style.backgroundColor = "white"; 
        } else {
            sidebarIcon.style.left = "calc(100% - 40px)";
            sidebarIcon.style.backgroundColor = "blue";
        }
    });

    masterItem.addEventListener("click", function (e) {
        if (e.target === masterItem || e.target.closest('.ffff')) {
            const isVisible = subNav.style.display === "block";
            
            subNav.style.display = isVisible ? "none" : "block";
            
            toggleIcon.src = isVisible
                ? "./assets/images/Vector.png"
                : "./assets/images/Vector (1).png";
            
            masterItem.classList.toggle("active");
        }
    });

    submenuItems.forEach(item => {
        const submenuHeader = item.querySelector('.submenu-header');
        const toggleIcon = submenuHeader.querySelector('.toggle-icon');
        const nestedNav = item.querySelector('.nested-sub-nav');

        submenuHeader.addEventListener('click', function(e) {
            e.stopPropagation(); 

            const isExpanded = item.classList.contains('active');
            
            item.classList.toggle('active');
            nestedNav.style.display = isExpanded ? 'none' : 'block';
            
            toggleIcon.src = isExpanded
                ? "./assets/images/Vector.png"
                : "./assets/images/minus.png";
            
            toggleIcon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });
});
