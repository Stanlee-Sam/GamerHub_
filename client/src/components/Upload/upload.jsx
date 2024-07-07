import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from './firebaseConfig'; 

const storage = getStorage(app);

const UploadImageComponent = () => {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handleUpload = async () => {
    if (file) {
      try {
        const storageRef = ref(storage, 'images/' + file.name);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        console.log('File uploaded successfully:', downloadURL);
        setUploadMessage('File uploaded successfully.');
      } catch (error) {
        console.error('Error uploading file:', error);
        setUploadMessage('Error uploading file.');
      }
    } else {
      setUploadMessage('Please select a file first.');
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{uploadMessage}</p>
    </div>
  );
}

export default UploadImageComponent;
