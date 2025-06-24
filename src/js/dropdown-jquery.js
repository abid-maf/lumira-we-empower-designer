$(() => {
    $("[data-expand]").on("click", function () {
        const $clickedBtn = $(this);
        const targetId = $clickedBtn.data("expand");
        const $target = $(`#${targetId}`);
        const $svg = $clickedBtn.find("svg");

        // Tutup semua target yang lain dan reset class svg lainnya
        $("[data-expand]").each(function () {
            const $btn = $(this);
            const id = $btn.data("expand");
            if (id !== targetId) {
                $(`#${id}`).slideUp(); // Tutup konten lain
                $btn.find("svg").removeClass("-rotate-180 text-white"); // Reset icon lain
            }
        });

        // Toggle yang diklik
        $target.slideToggle(); // Buka atau tutup target yang diklik
        $svg.toggleClass("-rotate-180 text-white"); // Toggle icon-nya
    });
});
