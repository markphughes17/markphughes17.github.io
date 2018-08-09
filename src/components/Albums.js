import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import GooglePhoto from 'react-google-photo';

const images = [
    {
        src: 'https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        width: 749,
        height: 1000,
    },
    {
        src: 'https://photos.app.goo.gl/zjSKMN7g2LrcjsLK8',
        width: 749,
        height: 1000,
    }
];

class Albums extends Component {
    state = {
        index: 0,
        open: false,
    };

    handleClickPrev = () => {
        this.setState({ index: this.state.index - 1 });
    };

    handleClickNext = () => {
        this.setState({ index: this.state.index + 1 });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div>
                <button onClick={this.handleOpen}>Open</button>
                <GooglePhoto
                    open={open}
                    src={images}
                    srcIndex={this.state.index}
                    onClickPrev={this.handleClickPrev}
                    onClickNext={this.handleClickNext}
                    onClose={this.handleClose}
                    closeOnEsc={true}
                />
            </div>
        )
    }

}


export default Albums;