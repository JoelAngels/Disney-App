import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "../firebase";

const Detail = (props) => {
  //id of the movie

  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  //updated based on id changing
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("No Such Document in Firebase 🚀🔥");
        }
      })
      .catch((error) => {
        alert("Error getting document", error);
      });
  }, [id]);
  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8; /* here*/
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    /* width: 100vw;
    height: 100vh; */
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
export default Detail;
