const _inputFile = document.querySelector("#file");
const _labelInputFile = document.querySelector("label");
const _labelTxt = "Image";

if (_inputFile && _labelInputFile) {
  _labelInputFile.innerText = _labelTxt;

  _inputFile.addEventListener("change", (e) => {
    const _inputTarget = e.target;
    const _file = _inputTarget.files[0];

    if (_file) {
      const _reader = new FileReader();
      _reader.addEventListener("load", function (e) {
        const _readerTarget = e.target;

        const _img = document.createElement("img");
        _img.src = _readerTarget.result;
        _img.classList.add("picture--inputed");

        _labelInputFile.innerText = "";
        _labelInputFile.classList.add("active");

        _labelInputFile.appendChild(_img);
      });
      _reader.readAsDataURL(_file);
    } else {
      _labelInputFile.innerText = _labelTxt;
      _labelInputFile.classList.remove("active");
    }
  });
}
