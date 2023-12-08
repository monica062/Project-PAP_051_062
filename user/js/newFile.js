<script>
    document.addEventListener('DOMContentLoaded', function () {console.log("Script loaded")};

    var tabs = document.querySelectorAll('#tabs ul li input');

    tabs.forEach(function (tab) {tab.addEventListener('change', function () {
        console.log("Tab clicked");

        var targetId = tab.getAttribute('id').replace('tab-', '');
        var targetContent = document.getElementById('tabs-' + targetId);

        if (targetContent) {
            // Hide all articles
            document.querySelectorAll('.tabs-content article').forEach(function (article) {
                article.style.display = 'none';
            });

            // Show the selected article
            targetContent.style.display = 'block';
        } else {
            console.error("Target content not found");
        }
    })};
});
});
</script>;
