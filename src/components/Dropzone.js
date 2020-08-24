import React, {useCallback, useMemo} from 'react';
import {useDropzone} from 'react-dropzone';

import styled from 'styled-components';

const getColor = (props) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isDragActive) {
        return '#2196f3';
    }
    return '#eeeeee';
  }
  
  const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border .24s ease-in-out;
  `;
  
  

const Dropzone = props => {
    const onDrop = useCallback(acceptedFiles => {

    
    }, [])
    const {acceptedFiles, isDragAccept, isDragReject, getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: 'image/*'})

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));

    


    return (
        <div className="container">
            <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the image here ...</p> :
                        <p>Drag and drop image of photo or painting here, or click to select files</p>
                }
            </Container>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </div>
    )
}

export { Dropzone };