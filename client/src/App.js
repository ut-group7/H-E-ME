import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Form from "./components/Form";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";
import FormResults from "./components/FormResults";

class App extends React.Component {
  
  render() {
    return(
      <Wrapper>
        <Header />
        <ContentContainer>
        <Form />
        {/* {this.state.aisles.map(aisle => (
            <FormResults 
            name={aisle.name}

            />
          ))}
        </Form> */}
        <Content />
        </ContentContainer>
        <Footer />
      </Wrapper>
    )
  };
}

export default App;
