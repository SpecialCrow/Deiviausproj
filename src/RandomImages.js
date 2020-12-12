import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Spinner from "./Spinner";
import InstagramEmbed from "react-instagram-embed";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import {
  FacebookProvider,
  Like,
  Share,
  Comments,
  EmbeddedPost,
  Page,
  Feed,
  SendToMessenger,
  CustomChat,
  MessengerCheckbox,
  Login,
  LoginButton,
} from "react-facebook";

export default function RandomImages() {
  const location = useLocation();
  const [image, setImage] = useState(null);
  const [data, setData] = useState(null);
  const Fetch = async () => {
    var data = await fetch("https://foodish-api.herokuapp.com/api/")
      .then((res) => res.json())
      .then((data) => setImage(data));
    return data;
  };
  useEffect(() => {
    Fetch();
  }, []);
  var text;
  if (image != null) {
    var path = image.image.split("/");
    var text = path[4];
  }
  return (
    <div className="randomImg">
      {/* <div className="randomImg-button">
                <div className="box">
                    {text}
                    <Button variant="contained" color="primary" onClick={() => Fetch()}>Generate New</Button>
                </div>
            </div>
            {image != null ?
                <img src={image.image} alt="" />
                :
                null
            } */}
      {/* <InstagramEmbed
        url="https://www.instagram.com/p/CIgIUWiLipv/"
        clientAccessToken="144439030772980|cuGJdzTye25rSiTggTYESWpcwZI"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      /> */}
      <div className="facebook">
        {data != null ? (
          <div>
            <Grid
              container
              alignItems="center"
              className="fb-user"
              justify="center"
            >
              <img src={data.profile.picture.data.url} alt="" />
              <div>
                {data.profile.name}
                <hr />
                <span>{data.profile.email}</span>
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => window.location.reload()}
              >
                Logout
              </Button>
            </Grid>
            <FacebookProvider appId="144439030772980">
              {/* <Comments href="https://www.facebook.com/photo/?fbid=2921898151178209&set=a.486412784726770" /> */}
              <Grid container className="embeded-post">
                <EmbeddedPost
                  href="https://www.facebook.com/photo.php?fbid=2419479808094995&set=pb.100000989995814.-2207520000..&type=3"
                  width="500"
                />
                <EmbeddedPost
                  href="https://www.facebook.com/photo.php?fbid=650793844963609&set=pb.100000989995814.-2207520000..&type=3"
                  width="500"
                />
                <EmbeddedPost
                  href="https://www.facebook.com/photo.php?fbid=820653191311006&set=pb.100000989995814.-2207520000..&type=3"
                  width="500"
                />
              </Grid>
              <Page
                href="https://www.facebook.com/deivydas.kikilas/"
                tabs="timeline"
              />
              <Feed link="https://www.facebook.com/deivydas.kikilas/">
                {({ handleClick }) => (
                  <div className="share">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClick}
                    >
                      Share on Feed
                    </Button>
                  </div>
                )}
              </Feed>
              <SendToMessenger
                messengerAppId="m.me/deivydas.kikilas"
                pageId="1590736137659076"
              />
              <MessengerCheckbox
                messengerAppId="100000989995814"
                pageId="1590736137659076"
              />
              <CustomChat pageId="1590736137659076" minimized={false} />
            </FacebookProvider>
          </div>
        ) : (
          <FacebookProvider appId="144439030772980">
            <LoginButton scope="email" onCompleted={(data) => setData(data)}>
              <Button variant="contained" color="primary">
                Login via Facebook
              </Button>
            </LoginButton>
          </FacebookProvider>
        )}
      </div>
    </div>
  );
}
