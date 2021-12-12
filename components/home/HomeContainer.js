import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostFromUrl, fetchPostFromJson } from '../../store/actions/post';


const HomeContainer = () => {
  const dispatch = useDispatch();
  const filteredPostResponse = useSelector(state => state.post.filteredPostResponse);
  const postFetching = useSelector(state => state.post.postFetching);

  const [url, setUrl] = useState(" ");
  const [jsonFormat, setJsonFormat] = useState(" ");
  const [jsonReponse, setJsonReponse] = useState("");

  const handleSend = (sendType) =>{
    sendType === 'url' ? dispatch(fetchPostFromUrl(url)) : dispatch(fetchPostFromJson(jsonFormat));
  }

  useEffect(() => {
    setJsonReponse(filteredPostResponse)
 }, [filteredPostResponse]);


  return (
    <main className={styles.main}>
      <h2>Json Import</h2>
      <div className={styles.contentCard}>
        <div className={styles.urlArea}>
          <h4>Url Input</h4>
          <div className={styles.featureArea}>
            <input 
            placeholder="Please insert a json file url"
            className={styles.inputRow} 
            onChange={(e)=> setUrl(e.target.value)
            }></input>
            <div className={styles.btnArea}>
            <Button 
            variant="contained" 
            onClick={() =>handleSend('url')}
            disabled={postFetching}
            >Send</Button>
            </div>

          </div>
        </div>
        <div className={styles.inputArea}>
          <h4>Json Input</h4>
          <div className={styles.featureArea}>
            <textarea 
            className={styles.textarea}
            placeholder="Please insert the json content"
            style={{ border: '1px solid #d8d8d8'}}
            onChange={(e)=> setJsonFormat(e.target.value)}
            >
            </textarea>
            <div className={styles.btnArea}>
            <Button 
              variant="contained" 
              onClick={() =>handleSend('json-format')}
              disabled={postFetching}
              >Send</Button>
            </div>
          </div>
        </div>
      </div>


      <h2>Output Result</h2>
      <div className={styles.contentCard}>
        <div className={styles.jsonArea}>
          <pre className={styles.pre}>
          { `${jsonReponse}` }
          </pre>

        </div>
      </div>
    </main>
  );
};

export default HomeContainer;
