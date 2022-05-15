import { CSSTransitionGroup } from 'react-transition-group';
import React from 'react';
import Arrow from '../photo_slider/arrow'

class PhotoSlider extends React.Component {

  state = {
    paths: this.props.artworks,
    current: 0,
    next: 1,
    prev: this.props.artworks.length - 1,
    active: false
  };

  changePictureLeft = () => {
    const prev = this.state.prev - 1
    const next = this.state.current
    const current = this.state.prev
    if ((prev) < 0) {
      this.setState({ current: current, prev: this.props.artworks.length - 1, next: next });
    } else {
      this.setState({ current: current, prev: prev, next: next });
    }

  }

  changePictureRight = () => {
    const next = this.state.next + 1;
    const prev = this.state.current
    const current = this.state.next
    if ((next) == this.props.artworks.length) {
      this.setState({ current: current, prev: prev, next: 0 });
    } else {
      this.setState({ current: current, prev: prev, next: next });
    }

  }
  showArrows = () => {
    this.setState({ active: true });
  }

  hideArrows = () => {
    this.setState({ active: false });
  }

  render() {
    return (

      <div className="photo-slider-container" onMouseOver={this.showArrows} onMouseOut={this.hideArrows}>

        <div className="arrow-left">
          <Arrow direction="left" active={this.state.active} onClick={this.changePictureLeft}></Arrow>
        </div>

        <div className="center">

          <CSSTransitionGroup
            transitionName="content"
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}
          >
            <div key={this.state.current} className="stay">
              <div>
                <img className="photo" src={this.props.artworks[this.state.current].path} width="500" height="auto"></img>
              </div>

            </div>

          </CSSTransitionGroup>

          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={200}
            transitionLeave={false}
          >

            <div key={this.state.current} className="stay-text">
              <div className="art-title">{this.props.artworks[this.state.current].name}</div><div className="art-year">, {this.props.artworks[this.state.current].year}</div>
              <div className="art-medium">{this.props.artworks[this.state.current].medium}</div>
            </div>

          </CSSTransitionGroup>
        </div>

        <div className="arrow-right">
          <Arrow direction="right" active={this.state.active} onClick={this.changePictureRight}></Arrow>
        </div>

      </div>
    )
  }
}

export default PhotoSlider;