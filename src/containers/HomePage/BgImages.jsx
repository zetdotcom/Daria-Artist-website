import * as React from "react";
import "./BgImages.css";
const bgImgs = [
    require('../../images/daria.jpg'),
    require('../../images/Daria-Portrait.jpg'),
    require('../../images/Daria-Studio.jpg')


]

class BgImages extends React.Component {
    constructor() {
        super();

        this.state = {           
            backgroundImage: `url(${bgImgs[0]})`,
            currentImage: 0
        }



        this.changeImage = this.changeImage.bind(this)
    }



    changeImage() {
        let nextImage = this.state.currentImage + 1;
        if(nextImage >= bgImgs.length){
            nextImage = 0;
        }

        this.setState({
            backgroundImage: `url(${bgImgs[nextImage]})`,
            currentImage: nextImage
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.changeImage(), 7000);
    }

    componentWillUnount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <div>
                <div style = {{backgroundImage: this.state.backgroundImage}} className = "bgImages" ></div>

                
            </div>
        );
    }
}

export default BgImages;