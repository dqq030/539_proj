// hover the div, the child img to this div will change

// Get all divs that are children to class "characters"
const parents = document.querySelectorAll('.characters > div');

parents.forEach(parent => {
    const child = parent.querySelector('img');
    const link = parent.querySelector('a');

    // Get the original source of the child image
    const originalSrc = child.src;

    // Add mouseover event listener to each parent div
    parent.addEventListener('mouseover', function () {
        const filename = originalSrc.split('/').pop();
        const filenameWithoutExtension = filename.split('.')[0];
        const newSrc = originalSrc.replace(filenameWithoutExtension, filenameWithoutExtension + '_Happy');
        child.src = newSrc;
    });

    link.addEventListener('focus', function () {
        const filename = originalSrc.split('/').pop();
        const filenameWithoutExtension = filename.split('.')[0];
        const newSrc = originalSrc.replace(filenameWithoutExtension, filenameWithoutExtension + '_Happy');
        child.src = newSrc;
    });

    // Add mouseout event listener to each parent div
    parent.addEventListener('mouseout', function () {
        // Reset the source of the child image to the original source
        child.src = originalSrc;
    });

    link.addEventListener('blur', function () {
        // Reset the source of the child image to the original source
        child.src = originalSrc;
    });
});
