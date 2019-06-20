import React, { Component } from 'react'

export class FileUpload extends Component {

  upload = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.props.onUpload(reader.result);
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <input type="file" onChange={this.upload} />
    )
  }
}

export default FileUpload
