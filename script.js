function showMore() {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
    } else {
        moreInfo.classList.add('hidden');
    }
}
