import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Posts from "../components/Posts";

import { fetchPostDetails } from "../actions";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  aside {
    min-width: 35vh;
    display: flex;
    justify-content: flex-end;
  }
  main {
    flex: 1 0 350px;
    ${"" /* not responsive */} padding: 0 5rem;
  }
`;

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchPostDetails();
  }
  render() {
    const { title, body } = this.props.data;
    const countTotal = this.props.data.numberOfRecommends;
    return (
      <StyledApp>
        <main>
          {this.props.isLoadingData ? (
            "Loading . . ."
          ) : (
            <Posts
              title={title}
              body={body}
            />
          )}
        </main>
      </StyledApp>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData
});
export default connect(
  mapStateToProps,
  {
    fetchPostDetails
  }
)(App);
