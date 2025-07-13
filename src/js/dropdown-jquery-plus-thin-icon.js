$(() => {
  $('[data-expand]').on('click', function () {
    const $clickedBtn = $(this);
    const targetId = $clickedBtn.data('expand');
    const $target = $(`#${targetId}`);
    const $img = $clickedBtn.children('img').first(); // Ambil hanya img anak langsung pertama

    // Toggle yang diklik
    $target.slideToggle(); // Buka atau tutup target yang diklik
    $img.toggleClass('-rotate-135 text-white');
  });
});
