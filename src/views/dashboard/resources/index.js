import React, { useState, useCallback, useRef } from 'react'
import { useDropzone } from 'react-dropzone'

const Index = (props) => {
  const [files, setFiles] = useState([])

  const onDrop = useCallback(
    (acceptedFiles) => {
      // Add the new files to the existing array of files
      setFiles([...files, ...acceptedFiles])
    },
    [files]
  )

  const fileInputRef = useRef(null)

  const removeFile = (indexToRemove) => {
    const updatedFiles = files.filter((file, index) => index !== indexToRemove)
    setFiles(updatedFiles)
  }

  const handleAddImage = () => {
    fileInputRef.current.click()
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: '*'
  })

  return (
    <>
      <div className='mt-5' {...getRootProps()}>
        <input {...getInputProps()} ref={fileInputRef} />
      </div>
      <div
        className='d-flex flex-wrap'
        style={{ gap: '1rem', alignItems: 'center' }}
      >
        {files.map((file, index) => (
          <div
            className='d-flex flex-column justify-content-center align-items-center'
            style={{ gap: '1rem' }}
            key={index}
          >
            {file.type && file.type.startsWith('image/') ? (
              <img
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'contain'
                }}
                src={URL.createObjectURL(file)}
                alt={`uploaded-${index}`}
              />
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {file.type && file.type.startsWith('audio') && (
                  <i className='fas fa-file-audio fa-3x'></i>
                )}
                {file.type && file.type.startsWith('video') && (
                  <i className='fas fa-file-video fa-3x'></i>
                )}
                {file.type && file.type === 'application/pdf' && (
                  <i className='fas fa-file-pdf fa-3x'></i>
                )}
                {file.type &&
                  !file.type.startsWith('audio') &&
                  !file.type.startsWith('video') &&
                  !file.type === 'application/pdf' && (
                    <i className='fas fa-file fa-3x'></i>
                  )}
                <p
                  style={{
                    fontSize: '16px',
                    color: '#000',
                    width: '150px',
                    textAlign: 'center'
                  }}
                >
                  {file.name.replace(/_/g, ' ')}
                </p>
              </div>
            )}
            <button
              style={{
                backgroundColor: 'var(--bs-danger)',
                border: '0px solid white',
                color: 'white',
                boxShadow: '0px 0px 5px 1px var(--bs-gray-500)',
                borderRadius: '6px',
                padding: '6px 10px'
              }}
              onClick={() => removeFile(index)}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
      <button
        style={{
          marginTop: '1rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
          backgroundColor: 'var(--bs-primary)',
          border: '0px solid white',
          color: 'white',
          boxShadow: '0px 0px 5px 1px var(--bs-gray-500)',
          borderRadius: '6px',
          padding: '6px 10px'
        }}
        onClick={handleAddImage}
      >
        Ajouter une ressource
      </button>
    </>
  )
}

export default Index
