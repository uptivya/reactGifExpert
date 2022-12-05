import PropTypes from "prop-types";

export const GifList = ({title, url}) => {
    return (
        <div className="flex-grid__card">
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    )
}

GifList.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
