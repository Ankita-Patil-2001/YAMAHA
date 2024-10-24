document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleSidebarBtn = document.getElementById("toggleSidebar");
    const sidebarIcon = document.getElementById("sidebar-icon");
    const masterItem = document.getElementById("master");
    const subNav = masterItem.querySelector(".sub-nav");
    const toggleIcon = masterItem.querySelector(".nav-text133");
    const submenuItems = document.querySelectorAll('.has-submenu');
    const tabs = document.querySelectorAll('.tabs2 .tab');
    const contents = document.querySelectorAll('.content');
    const container1 = document.querySelector('.container1'); // Content for Tab 1

    // Sidebar toggle functionality
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

    // Master item toggle functionality
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

    // Submenu toggle functionality
    submenuItems.forEach(item => {
        const submenuHeader = item.querySelector('.submenu-header');
        const toggleIcon = submenuHeader.querySelector('.toggle-icon');
        const nestedNav = item.querySelector('.nested-sub-nav');

        submenuHeader.addEventListener('click', function (e) {
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

    // Tab content switching functionality with background change
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const tabNumber = this.getAttribute('data-tab');

            // Remove 'active' class from all tabs and reset their background color
            tabs.forEach(tab => {
                tab.classList.remove('active');
                tab.style.backgroundColor = ''; // Reset background to default
            });

            // Set the clicked tab as active and change its background color to white
            this.classList.add('active');
            this.style.backgroundColor = 'white'; // Change background color

            // Hide all content sections
            contents.forEach(content => {
                content.style.display = 'none';
            });

            // Show the content only for the clicked tab
            const activeContent = document.getElementById(`content-${tabNumber}`);
            activeContent.style.display = 'block'; // Show only relevant content

            // Hide all container2 sections
            document.querySelectorAll('.container2').forEach(container => {
                container.style.display = 'none';
            });

            // Show the corresponding container2 for the clicked tab
            const activeContainer = document.getElementById(`container2-${tabNumber}`);
            if (activeContainer) {
                activeContainer.style.display = 'block';
            }
        });
    });

    // Trigger click for the second tab initially (to show Tab 2 content on load)
    document.querySelector('.tab[data-tab="2"]').click();
});
