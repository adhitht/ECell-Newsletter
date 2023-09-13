import './styles/BooksandPodcast.css';

function BooksandPodcast({ title, align, children }) {
    return (
        <div className='Bookpodcastcont' style={{ color: "black", margin: "10px", borderBottomRightRadius: align == "left" ? "20px" : 0, borderBottomLeftRadius: align == "right" ? "20px" : 0 }}>
            <BooksandPodcastTitle title={title} />
            <hr style={{ height: '2px', background: '#FF7806', width: '80%', alignItems: 'left', paddingTop: '2px', margin: '15px 0 0 0' }} />
            <ol className='bookpodcastcontent'>
                {children}
            </ol>
        </div>
    )
}

function BooksandPodcastTitle({ title }) {
    return (
        <div className="bookpodcastheadingcont">
            <div style={{ position: "absolute", }} className="bookpodcastheading">{title}</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="628" height="187" viewBox="0 0 628 187" fill="none">
                <path
                    d="M12 6H6V12V175V181H12H598H612.674L602.204 170.719L523.564 93.5L602.204 16.2811L612.674 6H598H12Z"
                    fill="#FF7806"
                    stroke="#FFFCF9"
                    stroke-width="12" />
            </svg>
        </div>)
}

export default BooksandPodcast;