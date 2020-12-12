import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import Spinner from './Spinner';

export default function RandomImages() {
    const [image, setImage] = useState(null)
    const Fetch = async () => {
        var data = await fetch("https://foodish-api.herokuapp.com/api/")
            .then(res => res.json())
            .then(data => setImage(data))
        return data
    }
    useEffect(() => {
        Fetch()
    }, [])
    var text;
    if (image != null) {
        var path = image.image.split("/")
        var text = path[4]
    }
    return (
        <div className="randomImg">
            <div className="randomImg-button">
                <div className="box">
                    {text}
                    <Button variant="contained" color="primary" onClick={() => Fetch()}>Generate New</Button>
                </div>
            </div>
            {image != null ?
                <img src={image.image} alt="" />
                :
                null
            }
        </div>
    )
}
