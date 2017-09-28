import React from 'react';
import './image.css';

class AddImageButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      open: false,
      position: {
        transform: 'scale(0)'
      }
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.closePopover);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closePopover);
  }

  onPopoverClick() {
    this.preventNextClose = true;
  }

  openPopover(e) {
    e.preventDefault();
    if (!this.state.open) {
      this.preventNextClose = true;
      this.setState({
        open: true,
      });
    }
  }

  addImage() {
    const { editorState, onChange } = this.props;
    //onChange(this.props.modifier(editorState, this.state.url));
  }

  changeUrl(evt) {
    this.setState({ url: evt.target.value });
  }

  render() {

    return (
      <div>
        <div className="image-button-wrapper">
          <button
            className="image-add"
            onClick={this.openPopover.bind(this)}
            type="button"> + </button>
        </div>
        {this.state.open ?
          <div
            className="image-add-popover"
            onClick={this.onPopoverClick.bind(this)} >

            <input
              type="text"
              placeholder="Paste the image url …"
              className=""
              onChange={this.changeUrl.bind(this)}
              value={this.state.url} />

            <button
              className=""
              type="button"
              onClick={this.addImage.bind(this)}>
              Add
            </button>
          </div> : null}
        </div>
    );
  }
}

AddImageButton.displayName = 'AddImageButton';
AddImageButton.propTypes = {};
AddImageButton.defaultProps = {};

export default AddImageButton;
