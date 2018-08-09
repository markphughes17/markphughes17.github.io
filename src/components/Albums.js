import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import GooglePhoto from 'react-google-photo';

const images = [
    {
        src: 'https://photos.app.goo.gl/26EmKugg7YkJW7sc7',
    },
    {
        src: 'https://photos.app.goo.gl/zjSKMN7g2LrcjsLK8',
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
                />
            </div>
        )
    }

}


export default Albums;