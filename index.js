const image_input = document.querySelector("#image_input");
var uploded_image = "";

image_input.addEventListener("change", function () {
    const render = new FileReader();
    render.addEventListener("load", () => {
        uploded_image = render.result;
        document.querySelector("#imgPreview").setAttribute("src", uploded_image);
    });
    render.readAsDataURL(this.files[0]);
})