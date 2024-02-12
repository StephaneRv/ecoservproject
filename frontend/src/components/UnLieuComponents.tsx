import HoverPlayVideo from './HoverPlayVideo';
import Carousel from './Carousel';
import './UnLieuComponents.css';
import '../pages/texts.css';
import { Navigation, NavbarProps } from './Navbar';


interface TextImageBlockPropsCarrousel {
    title: string;
    text: string;
    images: string[];
}

interface TextImageBlockProps {
    title: string;
    text: string;
    image: string;
}

interface TextImageBlock3PartsProps {
    title: string;
    text: string;
    image: string;
    bottomImage: string;
}

export const ContainerNavigation: React.FC<NavbarProps> = ({activeTab, onTabChange}) => {
    return (
        <div className="container">
            <Navigation activeTab={activeTab} onTabChange={onTabChange}/>
        </div>
    );
};

export const TextImageBlock: React.FC<TextImageBlockPropsCarrousel> = ({ title, text, images }) => {
    return (
        <div className="text-image-block">
            <div className="card text-part">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="card image-part">
                <Carousel images={images} />
            </div>
        </div>
    );
};

export const ImageTextBlock: React.FC<TextImageBlockProps> = ({ title, text, image }) => {
    return (
        <div className="text-image-block">
            <div className="card image-part">
                <img alt='img' src={image} />
            </div>
            <div className="card text-part">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export const ImageTextBlock3Parts: React.FC<TextImageBlock3PartsProps> = ({ title, text, image, bottomImage }) => {
    return (
        <div className="text-image-block-3p">
            <div className="card-3p text-image-split">
                <div className="text-section-3p">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div className="image-section-3p">

                    <img loading='lazy' src={bottomImage} alt="" />
                </div>
            </div>
            <div className="card-3p image-part-3p">
                <HoverPlayVideo videoId='uceaJ__FZg4' thumbnailUrl={image} />
            </div>
        </div>
    );
};