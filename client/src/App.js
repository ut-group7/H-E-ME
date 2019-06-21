import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Form from "./components/Form";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";
import Button from "./components/button";

class App extends React.Component {

  render() {
    return(
      <Wrapper>
        <Header />
        <ContentContainer>
        <Form />
        <Content />

        </ContentContainer>
        <Footer />
      </Wrapper>
    )
  };
}

export default App;
