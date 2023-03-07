import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import '../../css/FileUpload.css';


class Basic extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
        this.setState({files});
    };
    this.state = {
      files: []
    };
  }

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name}
      </li>
    ));

    return (
      <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <><div className="file-container">

                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <p><img src={require('../../assets/icons/cloud-computing.png')} width='60px' /><p></p>Drag and drop files here, or <u>click here</u> to select files</p>
                    </div>
                </div><br /><div className="file-list"><h4>Uploaded Files</h4><ul className="uploaded-files">{files}</ul></div></>
        )}
      </Dropzone>
    );
  }
}

export default Basic;