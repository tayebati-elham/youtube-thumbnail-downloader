import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button, Form } from 'reactstrap';
require('dotenv').config()
// https://youtu.be/lEipOiIQwxg
const download = require('image-downloader').images
const _download = e => {
   var _target= e.target;
    const src=_target.dataset.link;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    //img.crossOrigin = "Use-Credentials";
    //img.crossOrigin = 'anonymous';  // This tells the browser to request cross-origin access when trying to download the image data.
    // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#Implementing_the_save_feature
    img.src = src;
    img.onload = () => {
      // create Canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // create a tag
      const a = document.createElement('a');
      a.download = _target.name +'.png';
      a.href = canvas.toDataURL('image/png');
      
      a.click();
  };
};
//use AIzaSyAMPYngoK9pI9NiJM0RqGT52Z6o2oiWVjM API instead of ${process.env.REACT_APP_API} 
const Search = () => {
    const [thumbnailData, setThumbnailData] = useState([])
    const searchInput = useRef('');

    // console.log(searchInput.current.value);

    const submitFormm = (e) => {
        e.preventDefault();
    }
    const searchMove = () => {
        // console.log(searchInput.current.value);
        const _key='AIzaSyAkyKMm3jOsLZ7BbEHpeTDPu6UzrSmKOF8';
        let youtubeURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchInput.current.value}&type=video&key=${_key}`
        fetch(youtubeURL)
            .then(res => res.json())
            .then(data => setThumbnailData(data.items))
    }
    // console.log(thumbnailData);

    return (
        <Container className="mt-5 text-center">
            <Row>
                <Col md={{ size: 6, offset: 3 }}>
                    <p>
                        Download youtube and vimeo thumbnail images of all quality for free. This application let you download thumbnails of all quality. Just paste the URL of the thumbnail video in the below input and click Get Thumbnail Image
                </p>
                    <Form onSubmit={submitFormm}>
                        <input ref={searchInput} placeholder="Enter the youtube URL here" required type="text" className="form-control" />
                        <Button onClick={searchMove} outline color="dark" type="submit">Get Thumbnail Images</Button>
                    </Form>
                </Col>
            </Row>
            <div>
                {
                    thumbnailData && thumbnailData.map((item, i) =>
                        <div key={i}>
                            <Row className="my-4">
                                <Col>
                                    <img className="mb-1" src={item.snippet.thumbnails.high.url} alt="" /> <br />
                                       <Button type="button" data-link={item.snippet.thumbnails.high.url} target="_blank"
                                        onClick={_download}
                                      name="large" >Download</Button>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                    <img className="mb-1" src={item.snippet.thumbnails.medium.url} alt="" /> <br />
                                    <Button  type="button" data-link={item.snippet.thumbnails.medium.url} target="_blank" 
                                     name="medium"   onClick={_download}
                                    >Download</Button>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                    <img className="mb-1" src={item.snippet.thumbnails.default.url} alt="" /> <br />
                                    <Button  type="button" data-link={item.snippet.thumbnails.default.url} target="_blank" 
                                     onClick={_download}
                                   name="tiny" >Download</Button>
                                </Col>
                            </Row>
                        </div>
                    )
                }
            </div>
        </Container >
    );
};

export default Search;