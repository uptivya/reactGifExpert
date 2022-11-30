export const GifList = ({title, url}) => {
    return (
        <div className="flex-grid__card">
            <p>{title}</p>
            <img src={url} />
        </div>
    )
}
