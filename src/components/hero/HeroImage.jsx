import './hero-image.scss'

export const HeroImage = () => {
    return (
        <div className="imageContainer">
            {/* <svg class="kz-photo-line" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="350px" height="350px">
                <circle class="line circle" cx="175" cy="175" r="0"  />
            </svg> */}
            <img src="/hero.png" alt="" />
        </div>
    )
}
