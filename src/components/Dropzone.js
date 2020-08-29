import React, {useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import FormData from 'form-data';
import axios from 'axios';

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
  
  const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    
`;

  const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 10px 100px 10px;
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

  const [category, setCategory] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    setCategory(null);
      var formData = new FormData();
      formData.append('image', acceptedFiles[0]);
      

      
      const options = {
        method: 'POST',
        body: formData,
    
      };
  
      fetch('https://photovpainting.onrender.com/predict', options)
        .then(response => response.json())
        .then(data => {
          setCategory(data.category.substring(0,data.category.length -1));
        })


    });

    
    const {acceptedFiles, fileRejections, isDragAccept, isDragReject, getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: 'image/jpeg, image/png'})

    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path}
        </li>
      ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
          {file.path}
          <ul>
            {errors.map(e => (
                <li key={e.code}>{e.message}</li>
            ))}
          </ul>
        </li>
      ));    
    


    return (
        <div class="container">
            <Flex>
                <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
                <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <p>Drop the image here ...</p> :
                            <p>Drag and drop image of photo or painting here, or click to select files</p>
                    }
                </Container>
            </Flex>
            <aside>
                <ul>Your file is... {acceptedFileItems}</ul>
                <ul>This is a... {category}</ul>
                <ul>Rejected items: {fileRejectionItems}</ul>
                
            </aside>
        </div>
    )
}

export { Dropzone };